import { Interval, Timeline } from './Helper'

let cellarius = new Timeline(`División clásica de Cellarius`)

cellarius.events = [
  new Interval({
    title: 'Antiguedad',
    from: -3000,
    to: 476,
  }),

  new Interval({
    title: 'Edad Media',
    from: 476,
    to: 1492,
  }),

  new Interval({
    title: 'Edad Moderna',
    from: 1492,
    to: 1789,
  }),

  new Interval({
    title: 'Edad Contemporánea',
    from: 1789,
    to: 2019,
  })
]

let upper = [] // Array of *Timeframe* ~ []Timeframe
upper.push(
  cellarius
)

let lower = new Timeline()

let greekPhilosophers = new Timeline('Greek Philosophers')
greekPhilosophers.tags.push(['Philosophy', 'Greek Philosophy'])
greekPhilosophers.events.push(
  new Interval({
    title: 'Socrates',
    from: -470,
    to: -399,
  }),

  new Interval({
    title: 'Platon',
    from: -427,
    to: -347,
  }),

  new Interval({
    title: 'Aristoteles',
    from: -384,
    to: -322,
  })
)

let easternPhilosophers = new Timeline('Eastern Philosophers')
easternPhilosophers.tags.push(['Philosophy', 'Eastern Philosophy'])
easternPhilosophers.events.push(
  new Interval({
    title: 'Sun Tzu',
    from: -545,
    to: -470,
  }),
)

let germanPhilosophers = new Timeline('German Philosophers')
germanPhilosophers.tags.push(['Philosophy', 'German Philosophy'])
germanPhilosophers.events.push(
  new Interval({
    title: 'Nietzsche',
    from: 1844,
    to: 1900,
  }),

  new Interval({
    title: 'Schopenhauer',
    from: 1788,
    to: 1860,
  })
)

lower.events.push(
  greekPhilosophers,
  germanPhilosophers,
  easternPhilosophers
)

export { upper, lower }

/*
// old manual way

let antiguedad = new Interval(
  new Mark(-3000),
  new Mark(476)
)
antiguedad.i18n = {
  messages: {
    es: { message: { name: 'Antiguedad' } }
    en: { message: { name: 'Ancient history' } }
    cn: { message: { name: '----' } }
  }
}

*/
