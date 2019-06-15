<template>
  <div>
    Clicked: {{$store.state.count}} times, count is
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
     
    }
  }
}
</script>

<style >

</style>
