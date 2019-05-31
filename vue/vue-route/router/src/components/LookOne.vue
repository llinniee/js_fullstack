<template>
  <div class="look">{{msg}}
    <div class="go-two" @click='goTwo'>去look2</div>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data (){
    return {
      msg: '看一看'
    }
  },
  methods: {
    goTwo () {
      this.$router.push({name: 'Look-two'})
    }
  }
}
</script>