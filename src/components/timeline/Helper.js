/* Relative mark in time-history,
 * measured in years (i.e., integer; for now),
 * with resepct to Jesus' year of birth (i.e., AD 1)
 * in astronomers notation -2, -1, 0, 1, 2, 3... */

export class Mark {
  name = ''
  constructor(date) {
    this.year = date // in Gregorian calendar, astronomer notation
  }
}

/* An interval consist of two marks (dates) in time-history */
export class Interval {
  // Where
  //  a, b : Mark
  // name : string
  constructor(a, b, name) {
    this.from = a
    this.to = b
    this.name = name
  }
}

/* A `Timeframe` consist of a `name` and a
 * property `events`, which is of a ordered list
 * of `Interval`s ONLY (no `Mark`s should be allowed) */
export class Timeframe {
  events = []
  name = ''
}

/* An `Eventsframe` consist of a `name` and a
 * property `events`, which is of a ordered list
 * of `Interval`s AND/OR `Mark`s (unlike `Timeframe`) */
export class Eventsframe {
  events = []
  name = ''
}

// todo: make temporal mark like rules in photoshop

// note: Mark, Interval & Timeframe should implement
// some sort of interface {toAbsoluteFrom(...), getMarginLeft(...)}
// - but there are no interfaces in JS you fool!
// - :'( oh man, I miss TS so bad.
// todo: TS implementation od this.

/* todo: THIS GOES IN PARENT CONTAINER */

// /* returns time elapsed to this.year
//  * since a given start time (e.g., -4,000) */
// toAbsoluteFrom(START) {
//   return Math.abs(START - this.year)
// }

// /* return margin-left from start time = 0px
//  * according to given ratio */
// getMarginLeft(START, ratio) {
//   return this.toAbsoluteFrom(START) * ratio + 'px'
// }
