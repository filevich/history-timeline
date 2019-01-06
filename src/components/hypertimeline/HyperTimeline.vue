<template>
  <div id="time-line" @wheel="wheelZoom" class="">
    
    <div id="controls">
        ZOOM: {{roundedZoom}}% RATIO: {{ratio}}
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>

    <div id="upper-timeline" :style="{ width: totalWidthInPixels + 'px' }"> <!-- TEMPORAL FIX -->
        <div class="lane" v-for="(timeframe, index) in timeFrames" :key="index">
            <div class="intervals-container" :style="{ marginLeft: cv(timeFrames[index].events[0].from.year) + 'px' }">
                <interval 
                    v-for="(interval, index) in timeframe.events"
                    :key="index"
                    :data="interval"                
                    :ratio="ratio"/>
            </div>
        </div>
    </div>
    
    <timeframe :width="totalWidthInPixels" :from="from" :to="to" :vw="viewWidthInYears"/>

    <div id="lower-timeline" :style="{ width: totalWidthInPixels + 'px' }">
        <div class="lane" v-for="(event, index) in events" :key="index">
            <div class="intervals-container" :style="{ marginLeft: cv(event.from.year) + 'px' }">
                <interval 
                    :key="index"
                    :data="event"
                    :ratio="ratio" />
            </div>
        </div>
    </div>

  </div>
</template>

<script>
/* Imports */
import Vue from 'vue'
import _Interval from '../../components/hypertimeline/Interval'
import Timeframe from '../../components/hypertimeline/Timeframe'

import {foo, bar} from './Data'

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
            // todo: merge these two together
            timeFrames: foo,
            events: bar.events,
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
        cv(from) {
            let left = this.from
            return Math.abs(left - from) * this.ratio
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
            // console.log('view width in years', vwiy)
            return vwiy
        }
    }
})
</script>

<style lang="scss">
#time-line {
	background: rgba(255, 0, 0, 0.3);
    width: 75%;
    position: relative;
    overflow: scroll;
}

#controls {
    position: fixed;
    bottom: 0%;
    right: 25%;
    margin: 0 35px 20px 0;
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

.lane {
    display: flex;
    flex-direction: row;
    background: none;
    width: 100%;

    .intervals-container {
        display: flex;
    }
}

/* for dev/debugging purposes */
.debugging {
    
    .lane {
        padding: 2px;
        margin: 2px 0;
        border-bottom: 2px dashed white;
    }

    .intervals-container {
        background: #00ff08;
        padding: 10px;
    }

    #upper-timeline{
        background: blue;
    }

    #lower-timeline{
        background: purple;
    }
}
</style>
