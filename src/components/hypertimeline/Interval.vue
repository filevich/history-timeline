<template>
  <div class="interval"
    :style="{
      width: width + 'px',
      marginLeft: marginLeft + 'px' 
    }"
    :title="title">
    <span class="name">{{data.name}}</span>
    
    <!-- sub intervals -->
    <div class="lane" v-if="data.subIntervals">
      <interval
        v-for="(subInterval, index) in data.subIntervals"
        :key="index"
        :data="subInterval"
        :left="last(index)"
        :ratio="ratio" />
    </div>

  </div>
</template>

<script>
// :left last event, in the same lane, to the left, *IN YEARS*
import Vue from 'vue'

export default Vue.extend({
  name: 'interval',
  props: ['data', 'ratio', 'left'],
  methods: {
    last(index) {
      if (index > 0) {
        return this.data.subIntervals[index - 1].to.year
      }
      return null
    },
  },
  computed: {
    marginLeft() {
      if (this.left) {
        return Math.abs(this.left - this.data.from.year) * this.ratio
      }
      return 0
    },
    width() {
        return (this.data.to.year - this.data.from.year) * this.ratio
    },
    title() {
      return `${this.data.name} (${this.data.from.year}-${this.data.to.year})`
    }
  }
})
</script>

<style lang="scss" scoped>
.interval{
  background: yellow;
  box-shadow: inset 0 0 1px black;
  /* border-left: 1px solid black; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  &:hover {
    background: #f2595761;
    cursor: default;
  }
  
  .name {
    color: red;
    padding: 5px 0;
  }
}
</style>