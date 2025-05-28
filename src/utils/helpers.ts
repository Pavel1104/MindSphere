export function digitsSum(number: number): number {
  let sum = 0;
  let value = number;

  while (value) {
    sum += value % 10;
    value = Math.trunc(value / 10);
  }

  return sum;
}

export function prepareData(number: number): number {
  if (number === 0) return 22;
  if (number <= 22) return number;
  return prepareData(number - 22);
}
