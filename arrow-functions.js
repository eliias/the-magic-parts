const a = [1, 2, 3, 4, 5, 6]

const sumOfIncrementedByOneAndOddNumbers = a
  .map(v => v += 1)
  .filter(v => v % 2 !== 0 ? v : false)
  .reduce((sum, v) => sum + v, 0)
