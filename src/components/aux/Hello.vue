<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++ },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--
            }
        },
    },
    computed: {
        exclamationMarks() {
            return Array(this.enthusiasm + 1).join('!')
        }
    }
})
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
