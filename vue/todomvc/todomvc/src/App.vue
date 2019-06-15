<template>
  <div>
    <counter :count="count"/>
    <counter-brother :count="count">
  </div>
</template>


<script>
// 两个兄弟组件,共享count 数据
// count 不应该属于counter组件私有 count不应该属于data（）， 而是props
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'
export default {
  data () {
    count: 0
  },
  components: {
    'counter': Counter,
    'counter-brother': Counter-brother
  }
}
</script>