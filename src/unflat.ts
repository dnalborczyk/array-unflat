function unflat<T>(value: readonly T[], size: 5): [T, T, T, T, T][]
function unflat<T>(value: readonly T[], size: 4): [T, T, T, T][]
function unflat<T>(value: readonly T[], size: 3): [T, T, T][]
function unflat<T>(value: readonly T[], size: 2): [T, T][]
function unflat<T>(value: readonly T[], size: 1): [T][]
function unflat<T>(value: readonly T[], size: number): T[][]
function unflat<T>(value: readonly T[]): [T, T][]

function unflat<T>(value: readonly T[], size: number = 2): T[][] {
  const unflattened: T[][] = []

  for (let i = 0; i < value.length; i += size) {
    const slice = value.slice(i, i + size)

    unflattened.push(slice)
  }

  return unflattened
}

export default unflat
