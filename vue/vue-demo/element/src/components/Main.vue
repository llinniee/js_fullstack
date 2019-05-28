<template>
  <div class="main-content">
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'HelloWorld'
    }
  },
  components: {
    Header
  }
}
</script>