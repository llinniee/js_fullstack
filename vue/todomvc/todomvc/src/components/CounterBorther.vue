<template>
  <div>
    {{count}}
  </div>
</template>

<script>
export default {
  props: ['count'],
  methods: {
    increment () {
      this.$emit('increment')
    }
  }
}
</script>

<style>

</style>
