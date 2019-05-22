// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request');
const cheerio = require('cheerio');

cheerio.prototype.removeTagText = function () {
  const html = this.html();
  return html.replace(/<.*>.*<\/.*>/g, '');
}

cloud.init()
// async + await
// 云函数入口函数
function youhuiSpider() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if (!err) {
        const body = res.body;
        const $ = cheerio.load(body, {
          decodeEntities: false
        })
        let youhuiLists = []
        $('.list.list_preferential').each(function () {
          let title = $('.itemName a', this).removeTagText();
          const price = $('.itemName .red', this).text().trim();
          const img = $('img', this).attr('src');
          const desc = $('.lrInfo', this).text().trim();
          youhuiLists.push({
            title,
            price,
            img,
            desc
          })
        });
        resolve(youhuiLists);
      }
    })    
  })
}
exports.main = async (event, context) => {
  const youhuiLists = await youhuiSpider();
  return {
    youhuiLists
  }
}
