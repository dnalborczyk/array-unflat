import unflat from '../unflat'

interface Test {
  description: string
  expected?: unknown[]
  param: unknown[] | {}
  paramSize?: unknown
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

  {
    description: '',
    expected: [['a', 1, 'c']],
    param: ['a', 1, 'c'],
    paramSize: 3,
  },

  {
    description: '',
    expected: [
      ['a', 'b', 'c'],
      ['d', 'e'],
    ],
    param: ['a', 'b', 'c', 'd', 'e'],
    paramSize: 3,
  },

  {
    description: '',
    expected: [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
    ],
    param: ['a', 'b', 'c', 'd', 'e', 'f'],
    paramSize: 3,
  },
]

describe('unflat', () => {
  tests.forEach(({ description, expected, param, paramSize }) => {
    test(`should return ${description}`, () => {
      // @ts-expect-error
      const result = unflat(param, paramSize)
      expect(result).toEqual(expected)
    })
  })
})

const errorTests: Test[] = [
  {
    description: 'should throw exception if value is not an array',
    param: {},
  },

  {
    description: 'should throw exception if size is null',
    param: [],
    paramSize: null,
  },

  {
    description: 'should throw exception if size is not a number',
    param: [],
    paramSize: '6',
  },
]

describe('unflat exceptions', () => {
  errorTests.forEach(({ description, param, paramSize }) => {
    test(description, () => {
      expect(
        // @ts-expect-error
        () => unflat(param, paramSize),
      ).toThrowErrorMatchingSnapshot()
    })
  })
})
