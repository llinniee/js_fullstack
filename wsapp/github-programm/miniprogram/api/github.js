
const trendings = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}

const events=()=>{
  return {
    get(){
      return new Promise((resolve,reject)=>{
        wx.request({
          url:"https://api.github.com/events",
          success:res=>{
            resolve({data:res.data,next:null});
          },
          fail:error=>{
            reject(error)
          }
        })
      })
    }
  }
}

module.exports = {
  trendings,
  events
}