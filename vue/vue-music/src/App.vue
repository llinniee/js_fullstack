<template>
  <div id="app">
    <!-- 放头部header -->
    <v-header>
      <div slot="left-icon">123456</div>
    </v-header>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'App',
  components: {
    'v-header':header
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")
.icon 
  font-family "icon"  !important
  font-size 18px
  font-style normal
  color #fff
html,body 
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none 
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  color #fff
  

</style>
