<template>
  <div class="moor-switch">
    <span>
      <slot></slot>
    </span>
    <div :class="[{closed: !checked},'switch-box']" @click="handleChange(value)">
      <span :class="{closed: !checked}"></span>
    </div>
    <input type="checkbox" @change="handleChange" :value="value">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    }
  },
  methods: {
    handleChange(value) {
      // input专门去修改v-model的值
      this.$emit('input', !this.checked?this.checked:this.inactiveValue);
    }
  }
}
</script>

<style scroped>
  .moor-switch {
    display: inline-block;

  }
</style>
