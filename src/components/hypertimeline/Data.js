import { Interval, Timeline } from './Helper'

let cellarius = new Timeline()
cellarius.name = `División clásica de Cellarius`

let antiguedad = new Interval({
  from: -3000,
  to: 476,
  title: 'Antiguedad'
})

let edadMedia = new Interval({
  from: 476,
  to: 1492,
  title: 'Edad Media'
})

let edadModerna = new Interval({
  from: 1492,
  to: 1789,
  title: 'Edad Moderna'
})

let edadContemporanea = new Interval({
  from: 1789,
  to: 2019,
  title: 'Edad Contemporánea'
})

cellarius.events.push(
  antiguedad,
  edadMedia,
  edadModerna,
  edadContemporanea
)

let foo = [] // Array of *Timeframe* ~ []Timeframe
foo.push(
  cellarius
)

let someDudes = new Timeline()
someDudes.name = 'Greek Philosophers'
someDudes.tags.push(['Philosophy', 'Greek Philosophy'])

let socrates = new Interval({
  from: -470,
  to: -399,
  title: 'Socrates',
})

let platon = new Interval({
  from: -427,
  to: -347,
  title: 'Platon',
})

let aristoteles = new Interval({
  from: -384,
  to: -322,
  title: 'Aristoteles',
})

someDudes.events.push(
  socrates,
  platon,
  aristoteles
)

// let goodFellas = new Timeline()
// goodFellas.name = 'German Philosophers'
// goodFellas.tags.push(['Philosophy', 'German Philosophy'])

// let nietzsche = new Interval(
//   new Mark(1844),
//   new Mark(1900),
// )

// let schopenhauer = new Interval(
//   new Mark(1788),
//   new Mark(1860),
// )

// goodFellas.events.push(
//   nietzsche,
//   schopenhauer,
// )

// let people = new Timeline()
// people.name = 'People in general'
// people.events.push(someDudes, goodFellas)

export { foo, someDudes as bar }

/*
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
