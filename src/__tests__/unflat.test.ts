import unflat from '../unflat'

interface Test {
  description: string
  expected: unknown[]
  param: unknown[]
  paramSize?: number
}

const tests: Test[] = [
  {
    description: '',
    expected: [],
    param: [],
  },

  {
    description: '',
    expected: [['a']],
    param: ['a'],
  },

  {
    description: '',
    expected: [['a', 1]],
    param: ['a', 1],
  },

  {
    description: '',
    expected: [['a', 1], ['c']],
    param: ['a', 1, 'c'],
  },

  {
    description: '',
    expected: [
      ['a', 1],
      [true, {}],
      [undefined, null],
    ],
    param: ['a', 1, true, {}, undefined, null],
  },

  {
    description: '',
    expected: [],
    param: [],
    paramSize: 1,
  },

  {
    description: '',
    expected: [],
    param: [],
    paramSize: 2,
  },
]

describe('unflat', () => {
  tests.forEach(({ description, expected, param, paramSize }) => {
    test(`should return ${description}`, () => {
      const result = unflat(param, paramSize)
      expect(result).toEqual(expected)
    })
  })
})
