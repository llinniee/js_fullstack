<template>
  <div class="container">
    {{msg}}
    <child @xly='getXly'></child>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  name: 'demo2',
  data () {
    return {
      
    }
  },
  components: {
    child
  },
  methods: {
    getXly (data) {
      this.msg = data
    }
  }
}
</script>

<style scroped>
  
</style>