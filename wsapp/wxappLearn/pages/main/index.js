Page({
  data: {
    city: '南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items: []
  },
  onLoad () {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca466895eeed03805bf4940/maoyan/newmovie',
      success: function(res) {
        console.log(res)
        that.setData({
          items: res.data.data.movieList
        })
      }
    })
  },
  onPullDownRefresh() {
    console.log(1234)
  },
  onReachBottom() {
    console.log(666)
  }
})