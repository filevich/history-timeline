<template>
  <div id="time-line" @wheel="wheelZoom" style="">
    
    <div class="rou" :style="{ 'margin-left': cv(0) + 'px' }">
        ZOOM: {{roundedZoom}}% RATIO: {{ratio}}
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>

    <div id="timeframes-containers" :style="{ width: totalWidthInPixels + 'px' }"> <!-- TEMPORAL FIX -->
        <div class="rou" v-for="(timeframe, index) in timeFrames" :key="index" :style="{ 'margin-left': cv(timeFrames[index].events[0].from.year) + 'px' }">
            <interval 
                v-for="(interval, index) in timeframe.events"
                :key="index" 
                :ini="interval.from.year"
                :end="interval.to.year"
                :name="interval.name"
                :scale="ratio" />
        </div>
    </div>
    
    <timeframe :width="totalWidthInPixels" :from="from" :to="to" :vw="viewWidthInYears"/>

    <div id="events-containers" :style="{ width: totalWidthInPixels + 'px' }">
        <div class="rou" v-for="(event, index) in events" :key="index" :style="{ 'margin-left': cv(event.from.year) + 'px' }">
            <interval 
                :key="index"
                :ini="event.from.year"
                :end="event.to.year"
                :name="event.name"
                :scale="ratio" />
        </div>
    </div>

  </div>
</template>

<script>
/* Imports */
import Vue from 'vue'
import _Interval from '../../components/timeline/Interval'
import Timeframe from '../../components/timeline/Timeframe'

// import {Mark, Interval} from '../../components/timeline/Helper'
import {timeFrames, eventsFrame} from './Data'

/* Constants */
const defaultZoomSensitivity = 0.0001
const DEFAULT_POSITION = 0 // year 0 ~ Jesus is born!
const DEFAULT_RATIO = 1 / 1 // 1 pixel = 1 year (pixels over years)
const DEFAULT_FROM = -4000 // 4,000 BC
const PRESENT = new Date().getFullYear()

export default Vue.extend({
    // html-args
    props: ['initialZoom', 'initialPosition'],
    components: {
        'interval': _Interval,
        'timeframe': Timeframe,
    },
    data() {
        return {
            from: DEFAULT_FROM,    // year 1,000 BC
            to: PRESENT,   // year 1,000 AD
            vw: 1, // view width
            zoom: this.initialZoom,
            zoomSensitivity: defaultZoomSensitivity,
            position: (this.initialPosition) ? this.initialPosition : DEFAULT_POSITION,
            timeFrames: timeFrames,
            events: eventsFrame.events,
        }
    },
    mounted() {
        let el = document.getElementById('time-line')
        this.vw = el.offsetWidth
        el.scrollLeft = this.cv(this.position, this.from, this.ratio) - (this.vw / 2)
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
        // year to pixels, from left.
        // 0px = -4,000 BC
        cv(ini) {
            return (ini + Math.abs(this.from)) * this.ratio
        }
    },
    computed: {
        roundedZoom() {
            return Number((this.zoom).toFixed(1))
        },
        ratio() {
            // ratio = 1 pixel = x years
            // if zoom = 0% then 1 pixel = 1 year
            return DEFAULT_RATIO + (DEFAULT_RATIO * this.zoom)
        },
        totalWidthInPixels() {
            return (this.to - this.from) * this.ratio
        },
        viewWidthInYears() {
            let vwiy = this.vw / this.ratio
            console.log('view width in years', vwiy)
            return vwiy
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
