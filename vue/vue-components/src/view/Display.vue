<template>
  <div>
    <h3>动态渲染.vue文件的组件————display</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from '@/components/com/display.vue'
import defaultCode from './default-code.js'
export default {
  components: {
    iDisplay
  },
  data () {
    return {
      code: defaultCode
    }
  }
}
</script>

<style>

</style>
