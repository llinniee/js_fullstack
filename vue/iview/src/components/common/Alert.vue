<template>
  <div class="alert">
    {{msg}}
    </br>
    <Button type="success" @click="hidden">ok</Button>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ['msg'],
  data () {
    return {

    }
  },
  method: {
    hidden () {
      this.$emit('fromChild', false)
    }
  }
}
</script>

<style scoped>
  .alert {
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #678787;
    z-index:999;
  }
</style>