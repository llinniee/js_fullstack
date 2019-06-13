<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name: 'demoChild2',
  data () {
    return {
      message: 'hhhhh'
    }
  },
  method: {
    sendMsg () {
      this.$emit('xly', this.message)
    }
  }
}
</script>

<style scroped>
  
</style>