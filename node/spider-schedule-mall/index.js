const superagent = require('superagent');
const cheerio = require('cheerio');

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
        const day = $singleDay.eq(0).text();
        const weatherText = $singleDay.eq(1).text();
        const temperature = $singleDay.eq(2).text();
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
})


