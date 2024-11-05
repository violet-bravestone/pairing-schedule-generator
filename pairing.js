import { cohort, students } from './data/data.js'
import { writeFile } from 'node:fs/promises'
import { prepArrays, createPairs } from './functions/pairingUtilFuncs.js'

export default async function pairing() {
  const stringTemplate = ['## Pairing Schedule']

  createPairs(prepArrays(students)).forEach((week) => {
    const monToThur = [
      '',
      '<details>',
      `<summary><b><u>Week ${week.week}</u></b></summary>`,
      '',
      '<details>',
      '<summary><i>--- Monday ---</i></summary>',
      '',
      '| | |',
      '|-|-|',
      week.mon[0]
        .map((student, i) => `|${student}|${week.mon[1][i]}|`)
        .join('\n'),
      '</details>',
      '',
      '<details>',
      '<summary><i>--- Tuesday ---</i></summary>',
      '',
      '| | |',
      '|-|-|',
      week.tue[0]
        .map((student, i) => `|${student}|${week.tue[1][i]}|`)
        .join('\n'),
      '</details>',
      '',
      '<details>',
      '<summary><i>--- Wednesday ---</i></summary>',
      '',
      '| | |',
      '|-|-|',
      week.wed[0]
        .map((student, i) => `|${student}|${week.wed[1][i]}|`)
        .join('\n'),
      '</details>',
      '',
      '<details>',
      '<summary><i>--- Thursday ---</i></summary>',
      '',
      '| | |',
      '|-|-|',
      week.thu[0]
        .map((student, i) => `|${student}|${week.thu[1][i]}|`)
        .join('\n'),
      '</details>',
    ]

    const fri =
      week.week === 1
        ? [
            '',
            '<details>',
            '<summary><i>--- Friday ---</i></summary>',
            '',
            '| | |',
            '|-|-|',
            week.fri[0]
              .map((student, i) => `|${student}|${week.fri[1][i]}|`)
              .join('\n'),
            '</details>',
          ]
        : []
    stringTemplate.push([...monToThur, ...fri, '</details>'].join('\n'))
  })

  await writeFile(
    `./output/pairing-${cohort}.md`,
    stringTemplate.join('\n'),
    'utf-8'
  )
}
