export const students = [
  // update this with your cohort's students
  'Henry',
  'Gurwinder',
  'Manasa',
  'Preet',
  'Jun',
  'Liam',
  'Nikki',
  'Abdullah',
]

const minGroupSize = 4 // minimum group size for Friday groups - usually 4 or 5
export const cohort = 'Pohutukawa-2024'

// These variables are derived from minGroupSize, so you don't need to touch them
export const numberOfGroups = Math.floor(students.length / minGroupSize)
export let emptyGroups = new Array(numberOfGroups).fill([])
