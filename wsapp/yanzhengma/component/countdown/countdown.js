// component/countdown/countdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start:{
      type:Boolean,
      value:false,
      observer(newVal){
        console.log(newVal)
      },
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    timerText:"获取验证码"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
