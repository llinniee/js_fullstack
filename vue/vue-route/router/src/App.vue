<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>导航：
      <rouute-look to="/">首页</rouute-look>|
      <rouute-look :to="{name: 'Look', params: {id: 123}}">看看</rouute-look>
      <!-- <rouute-look to=/look/666>看看</rouute-look> -->
      <rouute-look to="/look/look-one">look1</rouute-look>
      <rouute-look to="/look/look-two">look2</rouute-look>
      <rouute-look to="/go-back">重定向</rouute-look>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
