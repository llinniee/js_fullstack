const superagent = require('superagent'); //发送请求的
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const local = 'jiangxi/qingshanhu-district';
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`;
const getWeatherTips = function() {
  return new Promise((resolve, reject) => {
    superagent.get(weatherUrl).end((err, res) => {
      if(err) {
        reject(err)
      }
      const $ = cheerio.load(res.text);
      const $weatherTip = $('.wea_tips ') ;
      const weatherTip = $weatherTip.find('em').text();
      let threeDaysDate =[];
      $('.forecast .days').each((index, dayNode) => {
        const $singleDay = $(dayNode).find('li');
        const day = $singleDay.eq(0).text().trim();
        const weatherText = $singleDay.eq(1).text().trim();
        const temperature = $singleDay.eq(2).text().trim();
        threeDaysDate.push({
          day, weatherText, temperature
        })
      })
      resolve({weatherTip, threeDaysDate});
    })
  })
}
const getOneData = function () {
  return new Promise((resolve, reject) => {
    superagent.get('http://wufazhuce.com/').end((err, res) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(res.text);
      let selectItem = $("#carousel-one .carousel-inner .item");
      let todayOne = selectItem[0];
      let todayOneData = {
        type: $(todayOne)
          .find(".fp-one-imagen-footer")
          .text()
          .replace(/\s/g, ''),
        text: $(todayOne)
          .find(".fp-one-cita")
          .text()
          .replace(/\s/g, '')
      };
      resolve(todayOneData)

    })
  })
}
function getSpiderData() {
  const htmlData = {}
  Promise.all([getWeatherTips(), getOneData()]).then(spiderArr => {
    const [weatherData, oneData] = spiderArr;
    htmlData['weatherTip'] = weatherData.weatherTip;
    console.log(weatherData, oneData)
    sendEmail(htmlData);
  })
}
function sendEmail(htmlData) {
  const template = ejs.compile(
    fs.readFileSync(path.resolve(__dirname, 'email.ejs'), 'utf8')
  )
  const html = template(htmlData);
}

const html = template(htmlData);
let transporter = nodemailer.createTransport({
  service: 'qq',
  port: 465,  //smtp 端口号
  secureConnection: true,
  auth: {
    user: '144070825@qq.com',
    pass: ''
  }
})
transporter.sendMail({
  from: '茹茹<144070825@qq.com>',
  to: '',
  subject: '邮件',
  html: html,
},
(err, info) => {
  if(err) {
    console.log('err', err);
    return false;
  }
  console.log('info', info)
}
)
getSpiderData()



