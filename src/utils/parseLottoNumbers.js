export function parseLottoNumbers(input) {
  return input.split(",").map((num) => Number(num.trim()));
}
