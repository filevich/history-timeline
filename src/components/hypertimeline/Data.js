import { Mark, Interval, Timeline } from './Helper'

let Capodonica = new Timeline()
Capodonica.name = 'Era Capodonica'
Capodonica.events = [
  new Interval(
    new Mark(0),
    new Mark(200),
    'Paleozoico'
  ),
  new Interval(
    new Mark(200),
    new Mark(450),
    'Mezosoico'
  ),
  new Interval(
    new Mark(450),
    new Mark(550),
    'Cantabrico'
  ),
  new Interval(
    new Mark(550),
    new Mark(570),
    'Neolitico'
  ),
  new Interval(
    new Mark(570),
    new Mark(720),
    'Edad Media'
  ),
]

Capodonica.events[1].subIntervals = [
  new Interval(
    new Mark(200),
    new Mark(300),
    'A'
  ),
  new Interval(
    new Mark(350),
    new Mark(400),
    'B'
  ),
  new Interval(
    new Mark(400),
    new Mark(450),
    'C'
  ),
]

let dinosaurs = new Timeline()
dinosaurs.name = 'Era Trilozoica'
dinosaurs.events = [
  new Interval(
    new Mark(-500),
    new Mark(-300),
    'Jurasico'
  ),
  new Interval(
    new Mark(-300),
    new Mark(600),
    'Perasico'
  ),
  new Interval(
    new Mark(600),
    new Mark(800),
    'Tirasico'
  ),
]

let foo = [] // Array of *Timeframe* ~ []Timeframe
foo.push(
  Capodonica,
  dinosaurs
)

let someDudes = new Timeline()
someDudes.name = 'Greek Philosophers'
someDudes.tags.push(['Philosophy', 'Greek Philosophy'])

let socrates = new Interval(
  new Mark(-470),
  new Mark(-399),
  'Socrates'
)

let platon = new Interval(
  new Mark(-427),
  new Mark(-347),
  'Platon'
)

let aristoteles = new Interval(
  new Mark(-384),
  new Mark(-322),
  'Aristoteles'
)

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
//   'Friedrich Nietzsche'
// )

// let schopenhauer = new Interval(
//   new Mark(1788),
//   new Mark(1860),
//   'Arthur Schopenhauer'
// )

// goodFellas.events.push(
//   nietzsche,
//   schopenhauer,
// )

// let people = new Timeline()
// people.name = 'People in general'
// people.events.push(someDudes, goodFellas)

export { foo, someDudes as bar }
