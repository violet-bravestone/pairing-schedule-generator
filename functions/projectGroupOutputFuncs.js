import { writeFile } from 'node:fs/promises'
import { cohort } from '../data/data.js'

// exportJSON() writes the group projects schedule to a .json file
export async function exportJSON(projects) {
  const [p1, p2, p3, p4, p5] = projects
  const jsonString = JSON.stringify({ groups: { p1, p2, p3, p4, p5 } }, null, 2)
  await writeFile(`./output/fridayGroups-${cohort}.json`, jsonString, 'utf-8')
}

// exportCSV() writes the group projects schedule to a .csv file after transforming the group arrays to be 'vertical'
export async function exportCSV(projects) {
  const weekHeaders = ['Week 2', 'Week 3', 'Week 4', 'Week 5', 'Final Project']
  const csvWeeks = [...projects].map((week, i) => [
    weekHeaders[i],
    ...week.map((team) => [...team, '']).flat(),
  ])
  const csvString = csvWeeks[0].reduce(
    (output, _, i) => output + csvWeeks.map((week) => week[i]).join(',') + '\n',
    'Group Project Teams\n'
  )

  await writeFile(`./output/fridayGroups-${cohort}.csv`, csvString, 'utf-8')
}

// exportMD() writes the group projects schedule to a .md file after transforming the group arrays to be 'vertical'
export async function exportMD(projects) {
  const mdString = ['### Draft Groups for Friday Group Projects']
  projects.forEach((projectWeek, i) => {
    const tableHeader = `${[
      '|',
      ...projectWeek.map((_, i) => `Group ${i + 1}`).join('|'),
      '|',
    ].join('')}\n${['|', ...new Array(projectWeek.length).fill('-|')].join('')}`

    const content = [
      '',
      '<details>',
      `<summary><b><u>Week ${i + 2}</u></b></summary>`,
      '',
      tableHeader,
      projectWeek[0]
        .map((_, i) => projectWeek.reduce((a, c) => a + `${c[i] || ''}|`, '|')) // this is making the teams appear vertically in the table
        .join('\n'),
      '</details>',
    ]
    mdString.push(content.join('\n'))
  })

  await writeFile(`./output/fridayGroups-${cohort}.md`, mdString, 'utf-8')
}
