/* Relative mark in time-history,
 * measured in years (i.e., integer; for now),
 * with resepct to Jesus' year of birth (i.e., AD 1)
 * in astronomers notation -2, -1, 0, 1, 2, 3... */

export class Mark {
  name = ''
  tags = []
  constructor(date) {
    this.year = date // in Gregorian calendar, astronomer notation
  }
}

/* An interval consist of two marks (dates) in time-history */
export class Interval {
  from = null
  to = null
  subIntervals = null // [] // sorted array of non-overlaping intervals
  name = ''
  tags = []
  constructor(a, b, name) {
    this.from = a
    this.to = b
    this.name = name
  }
}

/* A `Timeline` consist of a `name` and a
 * property `events`, which consists of an ordered list
 * of `Interval`s AND/OR `Mark`s (or even other `Timeline`s) */
export class Timeline {
  events = []
  name = ''
  tags = []
}

// todo: make temporal mark like rules in photoshop

// note: Mark, Interval & Timeframe should implement
// some sort of interface {toAbsoluteFrom(...), getMarginLeft(...)}
// in TS

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
