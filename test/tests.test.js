import { describe, it, expect, vi } from 'vitest'
import { createPairs, prepArrays, rotate } from '../functions/pairingUtilFuncs'
import { createPairsExpected, projects } from './testData'
import { makeWeek } from '../functions/projectGroupUtilFuncs'
import {
  exportJSON,
  exportCSV,
  exportMD,
} from '../functions/projectGroupOutputFuncs'

vi.mock('node:fs/promises', () => ({
  writeFile: vi.fn(),
}))
import { writeFile } from 'node:fs/promises'

const studentsOdd = [
  'Alicia',
  'Amy',
  'Anahera',
  'Dean',
  'Elias',
  'Jack',
  'Logan',
  'Sam',
  'Ryan',
]
const arrays = [
  ['Alicia', 'Amy', 'Anahera', 'Dean', 'Elias'],
  ['Jack', 'Logan', 'Sam', 'Ryan', 'Sophia'],
]

describe('pairingUtilFuncs', () => {
  describe('prepArrays', () => {
    it('returns pairing schedule with even number of students is provided', () => {
      const studentsEven = [...studentsOdd, 'Sophia']
      const expected = [
        ['Alicia', 'Amy', 'Anahera', 'Dean', 'Elias'],
        ['Jack', 'Logan', 'Sam', 'Ryan', 'Sophia'],
      ]
      const actual = prepArrays(studentsEven)
      expect(actual).toStrictEqual(expected)
    })

    it("includes a ghost if there's an odd number of students", () => {
      const expected = [
        ['Alicia', 'Amy', 'Anahera', 'Dean', 'G-g-g-ghost!'],
        ['Elias', 'Jack', 'Logan', 'Sam', 'Ryan'],
      ]
      const actual = prepArrays(studentsOdd)
      expect(actual).toStrictEqual(expected)
    })
  })

  describe('rotate', () => {
    it('rotates names in the arrays correctly', () => {
      const expected = [
        ['Alicia', 'Anahera', 'Dean', 'Elias', 'Sophia'],
        ['Amy', 'Jack', 'Logan', 'Sam', 'Ryan'],
      ]
      const actual = rotate(arrays)
      expect(actual).toStrictEqual(expected)
    })
  })

  describe('createPairs', () => {
    it('creates pairs for each week based on input arrays', () => {
      const actual = createPairs(arrays)
      expect(actual).toStrictEqual(createPairsExpected)
    })
  })
})

////////////////////////////////////////////////////////////////////////////////////

describe('projectGroupUtilFuncs', () => {
  describe('makeWeek', () => {
    it('creates groups based on student array & number of groups', () => {
      const expected = [
        ['Alicia', 'Anahera', 'Elias', 'Logan', 'Ryan'],
        ['Amy', 'Dean', 'Jack', 'Sam'],
      ]
      const actual = makeWeek(studentsOdd, 2, [[], []])
      expect(actual).toStrictEqual(expected)
    })
  })
})

//////////////////////////////////////////////////////////////////////////////////

describe('projectGroupOutputFuncs', () => {
  describe('exportJSON', () => {
    it('calls fs.writeFile to export a file', async () => {
      await exportJSON(projects)
      expect(writeFile).toHaveBeenCalled()
    })
  })
  describe('exportMD', () => {
    it('calls fs.writeFile to export a file', async () => {
      await exportMD(projects)
      expect(writeFile).toHaveBeenCalled()
    })
  })
  describe('exportCSV', () => {
    it('calls fs.writeFile to export a file', async () => {
      await exportCSV(projects)
      expect(writeFile).toHaveBeenCalled()
    })
  })
})
