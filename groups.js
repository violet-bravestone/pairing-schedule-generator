import { students } from './data/data.js'
import {
  reshuffleStudents,
  makeWeek,
  shuffleArray,
} from './functions/projectGroupUtilFuncs.js'
import {
  exportJSON,
  exportCSV,
  exportMD,
} from './functions/projectGroupOutputFuncs.js'

export default async function projectGroups() {
  const shuffledStudents = shuffleArray(students)

  const week2 = makeWeek(shuffledStudents)
  const week3 = makeWeek(reshuffleStudents(week2))
  const week4 = makeWeek(reshuffleStudents(week3))
  const week5 = makeWeek(reshuffleStudents(week4))
  const finalProject = makeWeek(reshuffleStudents(week5))
  const projectGroups = [week2, week3, week4, week5, finalProject]

  // create the json file
  await exportJSON(projectGroups)

  // create the csv file
  await exportCSV(projectGroups)

  // create the md file
  await exportMD(projectGroups)
}
