<template>
  <div id="timeline-container" :style="{ width: width + 'px' }">
    <div 
      v-for="i in numStdJumps"
      :key="i" 
      :style="{ 'margin-left': getJumpYear(i) + 'px' }"
      class="floating self-centered year-mark">
      {{ getDividerName(i) }}
    </div>
  </div>
</template>

<script>
/* Imports */
import Vue from 'vue'

/* Constants */
const numVisibleJumps = 6
const stdTimeJumps = [1, 2, 5, 10, 20, 25, 50, 100, 250, 500, 1000]

export default Vue.extend({
  // html-args
  props: ['width', 'from', 'to', 'vw'],
  methods: {
    getDividerName(i) {
      return this.from + (i * this.stdJumpInYears)
    },
    getJumpYear(i) {
      return i * this.stdJumpInYears
    },
  },
  computed: {
    numStdJumps() {
      return Math.round((this.to - this.from) / this.stdJumpInYears)
    },
    stdJumpInYears() {
      let floatJumpInYears = Math.round(this.vw / numVisibleJumps)
      let i = 0
      for (; stdTimeJumps[i] < floatJumpInYears;) {
        i++
      }
      return (i > 0) ? stdTimeJumps[i - 1] : stdTimeJumps[i]
    }
  }
})
</script>

<style lang="scss" scoped>
#timeline-container {
  position: relative;
  background: white;
  height: 34px;
  padding-top: 5px;
  border-style: solid;
  border-color: black;
  border-width: 1px 0px;
}
.dummy {
  opacity: 0;

  &:before {
    content: 'dummy';
  }
}

.floating {
 position: absolute; 
}

.self-centered {
  transform: translateX(-50%)
}

.year-mark {
  &:before {
    content: '|';
    position: absolute;
    top: 20px;
    font-size: 12px;
    color: black;
    width: -webkit-fill-available;
    text-align: center;
  }
}
</style>