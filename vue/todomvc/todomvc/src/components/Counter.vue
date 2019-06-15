<template>
  <div>
    Clicked: {{count}} times, count is
    <button @click="increment"></button>
  </div>
</template>

<script>
export default {
  // 自身的状态
  data () {
    return {
     
    }
  },
  props: ['count'],
  
  methods: {
    increment () {
      this.count++;
    }
  }
}
</script>

<style >

</style>
