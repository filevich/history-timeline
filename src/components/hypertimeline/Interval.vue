<template>
  <div class="interval"
    :style="{
      width: width + 'px',
      marginLeft: marginLeft + 'px' 
    }"
    :title="title">
    <span class="name">{{$t('message.title')}}</span>
    
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
// import i18n from '../../locales'

export default Vue.extend({
  name: 'interval',
  props: ['data', 'ratio', 'left'],
  i18n: {
  },
  created: function() {
    if (this.data.i18n) {
      this.$i18n.setLocaleMessage('es', this.data.i18n.messages.es)
    }
  },
  methods: {
    last(index) {
      if (index > 0) {
        return this.data.subIntervals[index - 1].to.year
      }
      return this.data.from.year
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
      return this.$i18n.t('message.title') + ` (${this.data.from.year},${this.data.to.year})`
    }
  }
})
</script>

<style lang="scss" scoped>
.interval{
  background: #fcf0d9;
  box-shadow: inset 0 0 1px black;
  /* border-left: 1px solid black; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  &:hover {
    background: #a0670082;
    cursor: default;
  }
  
  .name {
    color: #5d4315;
    padding: 5px 0;
    width: max-content;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
}
</style>