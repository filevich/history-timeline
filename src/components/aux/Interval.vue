<template>
  <div class="interval"
    :style="{ width: width + 'px' }" :title="title">{{name}}</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  // html-args
  props: ['ini', 'end', 'name', 'scale'],
  methods: {
  },
  computed: {
    width() {
        return (this.end - this.ini) * this.scale
    },
    title() {
      return `${this.name} (${this.ini}-${this.end})`
    }
  }
})
</script>

<style lang="scss">
.interval{
  background: yellow;
  border: 1px solid black;
  padding: 2px 0;
  /* text-align: center; */
  /* float: left; */
  border: 1px solid black;
  overflow: hidden;

  &:hover {
    background: #f25957;
    cursor: default;
  }
}
</style>