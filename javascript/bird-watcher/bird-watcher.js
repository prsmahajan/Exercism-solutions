// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0
  for (let birds of birdsPerDay) {
    total += birds
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let endDayOfWeek = week * 7
  let startDayOfWeek = endDayOfWeek - 7
  let total = 0
  for (let i = startDayOfWeek; i < endDayOfWeek; i++) {
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let bird = 0; bird < birdsPerDay.length; bird++) {
    if (bird % 2 == 0) {
      birdsPerDay[bird] += 1
    }
  }
  return birdsPerDay
}