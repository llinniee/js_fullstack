//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    start:false
  },
  onLoad:function(options){
    setTimeout(()=>{
      this.setData({
        start:true
      })
    },2000)
  }
})
