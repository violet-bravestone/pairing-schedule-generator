import { emptyGroups, numberOfGroups } from '../data/data.js'

// shuffleArray() uses the  Fisher-Yates algorithm to return a shuffled copy of an array
export function shuffleArray(arr) {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

// makeWeek() creates teams by repeatedly looping through an array of empty groups, adding a student from the student array each time until all students belong to a group.
export function makeWeek(
  array,
  numOfGroups = numberOfGroups,
  emptyGrps = emptyGroups
) {
  return array.reduce(
    (a, c) => {
      const arr = [...a.groups]
      arr[a.currentGroup] = [...arr[a.currentGroup], c]
      return {
        groups: arr,
        currentGroup: a.currentGroup < numOfGroups - 1 ? a.currentGroup + 1 : 0,
      }
    },
    { groups: emptyGrps, currentGroup: 0 }
  ).groups
}

export function reshuffleStudents(arr) {
  return arr.reduce((a, c) => [...a, ...shuffleArray(c)], [])
}
