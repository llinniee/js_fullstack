<template>
  <div class="container">
    <child :send-msg="test"></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'demo1',
  data () {
    return {
      test: {
      message: 'hhhhh',
      date: '2019-6-11',
      age: '18'
      }
    }
  },
  components: {
    child
  }
}
</script>

<style scroped>
  
</style>