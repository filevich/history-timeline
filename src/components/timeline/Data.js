import { Mark, Interval, Timeframe, Eventsframe } from './Helper'

let Capodonica = new Timeframe()
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

let dinosaurs = new Timeframe()
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

let timeFrames = [] // Array of *Timeframe* ~ []Timeframe
timeFrames.push(
  Capodonica,
  dinosaurs
)

let eventsFrame = new Eventsframe()
eventsFrame.name = 'Universal History' // also could be named "phylosophers"

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

eventsFrame.events.push(
  socrates,
  platon,
  aristoteles
)

export { timeFrames, eventsFrame }
