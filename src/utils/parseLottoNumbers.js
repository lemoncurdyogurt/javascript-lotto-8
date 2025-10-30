export function parseLottoNumbers(input) {
  return input
    .split(",")
    .map((num) => Number(num.trim()))
    .filter((n) => !Number.isNaN(n));
}
