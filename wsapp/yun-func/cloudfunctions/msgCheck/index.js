// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')
let appid = 'wx9a1cf9452a7cabd1'
let secret = '91d1b8a5c0ca66f8129ebfd125a7aa74'
let msgCheackUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token='
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9a1cf9452a7cabd1&secret=91d1b8a5c0ca66f8129ebfd125a7aa74
// 云函数入口函数
exports.main = async (event, context) => {
  // 令牌许可
  let tokenResponse = await got(tokenUrl);
  return '没有问题'
}
