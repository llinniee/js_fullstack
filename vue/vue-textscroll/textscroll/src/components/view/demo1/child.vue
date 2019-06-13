<template>
  <div class="container">{{sendMsg}}{{sendAge}}{{sendDate}}</div>
</template>

<script>
export default {
  name: 'demoChild1',
  props: {
    sendMsg:{
      typle:string,
      require:true
    },
    sendAge:{
      typle:string,
      require:true
    },
    sendDate:{
      typle:string,
      require:true
    },
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scroped>
  
</style>