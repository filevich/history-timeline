<template>
  <div id="timeframe-container" class="lane">
    <div class="year-mark" v-for="i in numStdJumps"
      :key="i"
      :style="{
        width: width + 'px',
        marginLeft: 0 + 'px' 
      }">
      <span class="self-centered">{{ getName(i) }}</span>
    </div>
  </div>
</template>

<script>
/* Imports */
import Vue from 'vue'

/* Constants */
const numVisibleUnits = 6
const timeUnits = [1, 2, 5, 10, 20, 25, 50, 100, 250, 500, 1000]

export default Vue.extend({
  // html-args
  props: ['from', 'to', 'vw', 'ratio'],
  methods: {
    getName(i) {
      let name = this.from + (i * this.unitInYears)
      if (name === 0) {
        name = 1
      }
      return name
    },
  },
  computed: {
    width() {
      let widthInYears = this.unitInYears
      return widthInYears * this.ratio
    },
    numStdJumps() {
      return Math.round((this.to - this.from) / this.unitInYears)
    },
    unitInYears() {
      let floatJumpInYears = Math.round(this.vw / numVisibleUnits)
      let i = 0
      for (; timeUnits[i] < floatJumpInYears;) {
        i++
      }
      return (i > 0) ? timeUnits[i - 1] : timeUnits[i]
    }
  }
})
</script>

<style lang="scss" scoped>
#timeframe-container {
  width: min-content;
  background: white;
  height: 34px;
  padding-top: 6px;
  border-style: solid;
  border-color: #907d5b;
  border-width: 1px 0px;
}

.interval {
  background: yellow;
  box-shadow: inset -1px -1px 0 0 black;
}

.year-mark {
  color: #523500;
  position: relative;

  span {
    position: absolute;
    right: 0;
    transform: translateX(50%)
  }
  
  &:after {
    content: '|';
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    color: black;
    transform: translateX(50%)
    /* width: -webkit-fill-available;
    text-align: center; */
  }
}
</style>