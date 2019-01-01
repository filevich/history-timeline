<template>
  <div id="time-line" @wheel="wheelZoom" style="">
    
    <div class="rou" :style="{ 'margin-left': cv(0) + 'px' }">
        ZOOM: {{roundedZoom}}% RATIO: {{scale}}
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>

    <div id="timeframes-containers" :style="{ width: totalWidth + 'px' }"> <!-- TEMPORAL FIX -->
        <div class="rou" v-for="(timeframe, index) in timeFrames" v-bind:key="index" :style="{ 'margin-left': cv(timeFrames[index].intervals[0].ini) + 'px' }">
            <interval 
                v-for="(interval, index) in timeframe.intervals"
                v-bind:key="index" 
                :ini="interval.ini"
                :end="interval.end"
                :name="interval.name"
                :scale="scale" />
        </div>
    </div>

    <div id="events-containers" :style="{ width: totalWidth + 'px' }">
        <div class="rou" v-for="(event, index) in events" v-bind:key="index" :style="{ 'margin-left': cv(event.ini) + 'px' }">
            <interval 
                v-bind:key="index"
                :ini="event.ini"
                :end="event.end"
                :name="event.name"
                :scale="scale" />
        </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Interval from '../../components/aux/Interval'

/* Constants */
const defaultZoomSensitivity = 0.0001
const _FROM = -4000 // 4,000 BC
const _PRESENT = new Date().getFullYear()
const defaultPosition = 0 // year 0 ~ Jesus is born!

export default Vue.extend({
    // html-args
    props: ['initialZoom', 'initialPosition'],
    components: {
        'interval': Interval,
    },
    data() {
        return {
            from: _FROM,    // year 1,000 BC
            to: _PRESENT,   // year 1,000 AD
            /* then div#time-line width = ((to - from) * scale) pixels */
            zoom: this.initialZoom,
            zoomSensitivity: defaultZoomSensitivity,
            position: (this.initialPosition) ? this.initialPosition : defaultPosition,
            timeFrames: [
                {
                    intervals: [
                        {ini: 0, end: 200, name: 'Paleozoico'},
                        {ini: 200, end: 450, name: 'Mezosoico'},
                        {ini: 450, end: 550, name: 'Cantabrico'},
                        {ini: 550, end: 570, name: 'Neolitico'},
                        {ini: 570, end: 720, name: 'Edad Media'},
                    ]
                },
                {
                    intervals: [
                        {ini: -500, end: -300, name: 'Jurasico'},
                        {ini: -300, end: 600, name: 'Perasico'},
                        {ini: 600, end: 800, name: 'Tirasico'},
                    ]
                }
            ],
            events: [
                {ini: -427, end: -347, name: 'Platon'},
                {ini: -384, end: -322, name: 'Aristoteles'},
                {ini: -470, end: -399, name: 'Socrates'},
            ],
        }
    },
    mounted() {
        let el = document.getElementById('time-line')
        let w = document.getElementById('time-line').offsetWidth
        el.scrollLeft = this.cv(this.position, this.from, this.scale) - (w / 2)
    },
    methods: {
        increment() {
            this.zoom++
        },
        decrement() {
            // if (this.zoom > 1) {
                this.zoom--
            // }
        },
        wheelZoom(event) {
            let dY = event.deltaY
            this.zoom += dY * -1 * this.zoomSensitivity
        },
        cv(ini) {
            return (ini + Math.abs(this.from)) * this.scale
        }
    },
    computed: {
        roundedZoom() {
            return Number((this.zoom).toFixed(1))
        },
        scale() {
            /*
             * zoom:-1% -> 1pixel:2year
             * zoom: 0% -> 1pixel:1year
             * zoom: 1% -> 2pixel:1year
             */
            let ratio
            if (this.zoom === 0) {
                ratio = 1 / 1
            } else if (this.zoom > 0) {
                ratio = (this.zoom + 1) / 1
            } else /* (this.zoom < 0) */ {
                ratio = 1 / Math.abs(this.zoom - 1)
            }
            return ratio
        },
        totalWidth() {
            return (this.to - this.from) * this.scale
        }
    }
})
</script>

<style lang="scss">
#time-line{
	background: rgba(255, 0, 0, 0.3);
    width: 75%;
    position: relative;
    overflow: scroll;
}

.row {
    display: inline-flex;
}

.caca {
    width: 100%;
}

.guide {
    &:before {
        content: "";
        height: 100%;
        width: 2px;
        left: calc(50% - 1px);
        background: red;
        position: absolute;
    }
}

.container {
    width: 4000px;
    display:inline-block;
    background: yellow;
}

.rou {
    background: red;
    display: flex;
    flex-direction: row;
    width: max-content;
    padding: 3px;
}

#timeframes-containers{
    background: blue;
}
#events-containers{
    background: purple;
}
</style>
