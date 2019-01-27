import { Interval, Timeline, century } from './Helper'

let centuries = new Timeline()

for (let c = -38; c <= -2; c++) {
  centuries.events.push(
    new Interval({
      title: century(c),
      from: c * 100,
      to: (c * 100) + 100
    })
  )
}

centuries.events.push(
  new Interval({
    title: century(-1),
    from: -100,
    to: 0 // <- actually should be -1. but 100 - 0 = 100 years century vs 100 - (-1) = 99 years century :(
  })
)

centuries.events.push(
  new Interval({
    title: century(1),
    from: 0, // <- actually should be -1. but 100 - 0 = 100 years century vs 100 - (-1) = 99 years century :(
    to: 100
  })
)

for (let c = 2; c <= 21; c++) {
  centuries.events.push(
    new Interval({
      title: century(c),
      from: c * 100 - 100,
      to: c * 100
    })
  )
}

let cellarius = new Timeline(`División clásica de Cellarius`)

cellarius.events = [
  new Interval({
    title: 'Antiguedad',
    from: -3000,
    to: 476,
    subIntervals: [
      new Interval({
        title: 'Antigüedad clásica',
        from: -753, // <- fundacion de Roma
        to: 476,    // <- caída del Imperio romano de Occidente
      }),
    ]
  }),

  new Interval({
    title: 'Edad Media',
    from: 476,
    to: 1492,
    subIntervals: [
      new Interval({
        title: 'Alta Edad Media',
        from: 476, // <- caída del Imperio romano de Occidente
        to: 1000,    // <- resurgimiento económico y cultural del continente
      }),

      new Interval({
        title: 'Baja Edad Media',
        from: 1000,
        to: 1492,
        subIntervals: [
          new Interval({
            title: 'Plenitud de la Edad Media',
            from: 1000, // <- siglos XI
            to: 1200,   // <- siglos XIII ~ Crisis de la Edad Media
          }),

          /**
           * "Crisis is the word which comes immediately to the historian's
           * mind when he thinks of the fourteenth and the fifteenth centuries."
           * Léopold Genicot's 1971
           */
          new Interval({
            title: 'crisis de la Edad Media',
            from: 1315, // <- La Gran Hambruna de 1315-1317
            to: 1492,
          }),
        ]
      }),
    ]
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
  cellarius,
  centuries
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

let cleopatra = new Interval({
  title: 'Cleopatra',
  from: -69,
  to: -30,
})
cleopatra.tags.push(['Roman Empire', 'Egypt', 'Pharaoh'])

let caesar = new Interval({
  title: 'Julio César',
  from: -100,
  to: -44,
})
caesar.tags.push(['Roman Empire'])

let pitagoras = new Interval({
  title: 'Pitágoras',
  from: -569,
  to: -475,
})
pitagoras.tags.push(['Philosophy', 'Eastern Philosophy', 'Mathematics'])

/* Mathematicians */

let mathematicians = new Timeline('German Philosophers')
mathematicians.tags.push(['Mathematics'])
mathematicians.events.push(
  new Interval({
    title: 'Leonhard Euler',
    from: 1707,
    to: 1783,
  }),

  new Interval({
    title: 'Joseph-Louis Lagrange',
    from: 1736, // Torino !!
    to: 1813,
  })
)

/* ** */

/* Literature */

let homero = new Interval({
  title: 'Homero',
  from: -800,  // c. VIII AC
  to: -700,    // c. VIII AC
})
homero.tags.push(['Poet'])

/* Historians */

let herodoto = new Interval({
  title: 'Heródoto',
  from: -485,
  to: -425,
})
herodoto.tags.push(['Historian', 'History'])

/* Religion */

let jesus = new Interval({
  title: 'Jesus',
  from: -4, // <- ??
  to: 33, // <- according to Newton (wikipedia:Chronology_of_Jesus)
})
jesus.tags.push(['Religion'])

lower.events.push(
  greekPhilosophers,
  germanPhilosophers,
  easternPhilosophers,
  cleopatra,
  caesar,
  pitagoras,
  mathematicians,
  herodoto,
  homero,
  jesus
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
