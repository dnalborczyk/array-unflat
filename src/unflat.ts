export default function unflat<T>(
  value: readonly T[],
  size: number = 2,
): T[][] {
  const unflattened: T[][] = []

  for (let i = 0; i < value.length; i += size) {
    const slice = value.slice(i, i + size)

    unflattened.push(slice)
  }

  return unflattened
}
