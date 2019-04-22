// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notSingle:true,
    logs:[],
    formData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  singleChange:function(event){
    this.setData({
      notSingle:!this.data.notSingle
    })
  },
  formsubmit:function(event){
    console.log('表单提交成功',event.detail.value);
    let formData = this.data.formData;
    formData.push(event.detail.value);
    this.setData({formData});
  },
})