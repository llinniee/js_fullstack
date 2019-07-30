<template>
  <div class="map">
    <div id="map"></div>
    <div class="map-tool">
      <p @click="popupShowOnClick">
        <!-- <svg-icon icon-class="city" /> -->
        <span v-if="mapData.district">{{mapData.district}}</span>
        <span v-else-if="mapData.city">{{mapData.city}}</span>
        <span v-else>未知城市</span>
      </p>
      <p @click="mapPopupShowOnClick">
        <!-- <svg-icon icon-class="map" /> -->
        <span>地图</span>
      </p>
      <p>
        <!-- <svg-icon icon-class="loaction" /> -->
        <span>定位</span>
      </p>
    </div>
    <!-- 定位按钮 -->
  </div>
</template>

<script>
export default {
  name: 'mapLocation',
  data () {
    return {
      mapData: {} //定位后所在的地理位置信息
    }
  },
  methods: {
    popupShowOnClick() {},
    mapPopupShowOnClick() {}
  }
}
</script>

<style lang="stylus" scoped>
.map 
  width 100vw
  height 100vh
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 1
  .map-title 
    position absolute
    top 5px
    left 0
  
  .map-start 
    width 200px
    height 200px
    border-radius 200px
    background #57c595
    position fixed
    bottom 140px
    left calc(50%-100px)
    text-align center
    line-height 200px
    color #ffffff
    font-weight bold
    font-size 40px
    box-shadow 0px 8px 30px #afaeae
  
  .map-tool 
    width 580px
    height 70px
    position fixed
    top 220px
    left calc(50%-280px)
    background #ffffff
    border-radius 5px
    box-shadow 0px 0px 20px #afaeae
    display flex
    align-items center
    justify-content space-between
    p 
      width 100%
      text-align center
      color #4b4949
      font-size 26px
      span 
        margin-left 10px
      
    
    p:nth-child(1) 
      border-right 1px solid rgb(182, 180, 180)
    
    p:nth-child(2) 
      border-right 1px solid rgb(182, 180, 180)
    
  
  .strat-go 
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background #ffffffd2
    z-index 10000
    &-top 
      width 100%
      height 40%
      display flex
      align-items center
      justify-content center
      color #555555
      font-size 35px
      vertical-align bottom
      font-style oblique
      span 
        font-size 200px
        font-weight bold
      
    
    &-detail 
      display flex
      align-items center
      justify-content space-between
      color #555555
      font-style oblique
      height70px
      p 
        width 100%
        text-align center
        span:nth-child(1) 
          font-size 50px
          font-weight bold
        
        span:nth-child(3) 
          font-size 24px
          font-style initial
        
      
    
    &-mark
      margin-top 70px
    
    &-markText
      padding 20px
      font-size 24px
    
  

#stratGo 
  transition all 0.4s
  height 35%
  background #ffffff
  box-shadow 0 4px 50px #afaeae
  .strat-go-top 
    margin-top 6%
    font-size 30px
    span 
      font-size 150px
    
  
  .strat-go-detail 
    margin-top 7%
    p 
      width 100%
      text-align center
      span:nth-child(1) 
        font-size 30px
        font-weight bold
      
      span:nth-child(3) 
        font-size 24px
        font-style initial
      
    
  

.buttonDom 
  width 176px
  height 70px
  position fixed
  top 200px
  left 480px
  background transparent

.popupText 
  // width 00px
  min-height 200px
  background #ffffff
  padding 20px
  font-size 25px
  box-sizing border-box

#map 
  width 100%
  height calc(100%+50px)
  box-sizing border-box

.fadeStart-enter 
  transform translateY(-100%)

.fadeStart-enter-to 
  transform translateY(0)

.fadeStart-enter-active 
  transition all 0.4s

</style>
