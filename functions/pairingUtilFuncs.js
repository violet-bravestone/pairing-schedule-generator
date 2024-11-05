// prepArrays() takes the array of student names from data/data.js and splits it into 2 'columns'
// If there's an odd number of students, it adds a placeholder "ghost"
export function prepArrays(students) {
  const halfRoundedDown = Math.floor(students.length / 2)
  const arr1 = students.slice(0, halfRoundedDown)
  const arr2 = students.slice(halfRoundedDown)
  if (arr1.length < arr2.length) arr1.push('G-g-g-ghost!')
  return [arr1, arr2]
}

// rotate() is how the 2 columns cycle, creating the day's pairs.
// The 1st student in array 1 never moves, and the others move around in a loop
export function rotate(arrays) {
  const [arr1, arr2] = arrays
  const [permanent, first1, ...rest1] = arr1
  const rest2 = arr2.slice(0, -1)
  const last2 = arr2[arr2.length - 1]
  return [
    [permanent, ...rest1, last2],
    [first1, ...rest2],
  ]
}

// createPairs() uses the rotate() function to generate pairings for every mon-thursday for weeks 1-6 (and the friday of the first week as there's no project)
export function createPairs(arrays) {
  let workingArr = [...arrays]
  const pairs = [
    { week: 1 },
    { week: 2 },
    { week: 3 },
    { week: 4 },
    { week: 5 },
    { week: 6 },
  ]

  pairs.forEach((week) => {
    workingArr = rotate(workingArr)
    week.mon = [...workingArr]
    workingArr = rotate(workingArr)
    week.tue = [...workingArr]
    workingArr = rotate(workingArr)
    week.wed = [...workingArr]
    workingArr = rotate(workingArr)
    week.thu = [...workingArr]
    if (week.week === 1) {
      workingArr = rotate(workingArr)
      week.fri = [...workingArr]
    }
  })
  return pairs
}
