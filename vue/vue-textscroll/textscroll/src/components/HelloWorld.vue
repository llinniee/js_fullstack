<template>
  <section class="hello">
    <div class="scroll-box">
      <text-scroll scrolltype="scroll-up"></text-scroll>
    </div>
  </section>
</template>

<script>
import textScroll from './textscroll'
export default {
  components: {
    textScroll,
  }
}
</script>

<style scoped>
.hello {
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
.scroll-box {
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  border-radius: 5px;  
}
</style>