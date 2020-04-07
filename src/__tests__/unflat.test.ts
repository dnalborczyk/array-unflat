import unflat from '../unflat'

interface Test {
  description: string
  expected?: unknown[]
  param: unknown[] | {}
  paramSize?: unknown
}

const testsDefault: Test[] = [
  {
    description: 'should work with empty array',
    expected: [],
    param: [],
  },

  {
    description: 'should work with array with one item',
    expected: [['a']],
    param: ['a'],
  },

  {
    description: 'should work with array with two items',
    expected: [['a', 1]],
    param: ['a', 1],
  },

  {
    description: 'should work with array with three items',
    expected: [['a', 1], ['c']],
    param: ['a', 1, 'c'],
  },

  {
    description: 'should work with array and multiple types',
    expected: [
      ['a', 1],
      [true, {}],
      [undefined, null],
    ],
    param: ['a', 1, true, {}, undefined, null],
  },
]

describe('unflat with default size value', () => {
  testsDefault.forEach(({ description, expected, param, paramSize }) => {
    test(description, () => {
      // @ts-expect-error
      const result = unflat(param, paramSize)
      expect(result).toEqual(expected)
    })
  })
})

const tests: Test[] = [
  {
    description: 'should work with empty aray and size 1',
    expected: [],
    param: [],
    paramSize: 1,
  },

  {
    description: 'should work with empty array and size 2',
    expected: [],
    param: [],
    paramSize: 2,
  },

  {
    description: 'should work with array with 3 items and size 3',
    expected: [['a', 1, 'c']],
    param: ['a', 1, 'c'],
    paramSize: 3,
  },

  {
    description: 'should work with array with 5 items and size 3',
    expected: [
      ['a', 'b', 'c'],
      ['d', 'e'],
    ],
    param: ['a', 'b', 'c', 'd', 'e'],
    paramSize: 3,
  },

  {
    description: 'should work with array with 6 items and size 3',
    expected: [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
    ],
    param: ['a', 'b', 'c', 'd', 'e', 'f'],
    paramSize: 3,
  },

  {
    description: 'should work with empty array and size 0',
    expected: [],
    param: [],
    paramSize: 0,
  },

  {
    description: 'should work with empty array and size -1',
    expected: [],
    param: [],
    paramSize: -1,
  },
]

describe('unflat with size', () => {
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
