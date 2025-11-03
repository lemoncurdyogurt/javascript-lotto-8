import { LOTTO_ERROR } from "../constants/lottoMessages";
import { LOTTO_CONSTANTS } from "../constants/lottoConstants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER_LENGTH) {
      throw new Error(LOTTO_ERROR.INVALID_LENGTH);
    }
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error(LOTTO_ERROR.DUPLICATE_NUMBER);
    }

    const isOutOfRange = numbers.some((n) => n < MIN_NUMBER || n > MAX_NUMBER);
    if (isOutOfRange) {
      throw new Error(LOTTO_ERROR.INVALID_RANGE);
    }
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
