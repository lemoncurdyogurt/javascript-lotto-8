import { LOTTO_ERROR } from "../constants/lottoMessages";
import { LOTTO_CONSTANTS } from "../constants/lottoConstants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 길이 검사
    if (numbers.length !== LOTTO_CONSTANTS.NUMBER_LENGTH) {
      throw new Error(LOTTO_ERROR.INVALID_LENGTH);
    }
    // 중복 검사
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error(LOTTO_ERROR.DUPLICATE_NUMBER);
    }
    // 범위 검사
    const isOutOfRange = numbers.some(
      (n) => n < LOTTO_CONSTANTS.MIN_NUMBER || n > LOTTO_CONSTANTS.MAX_NUMBER,
    );
    if (isOutOfRange) {
      throw new Error(LOTTO_ERROR.INVALID_RANGE);
    }
    // 숫자 검사
    const hasInvalidType = numbers.some(
      (n) => typeof n !== "number" || Number.isNaN(n),
    );
    if (hasInvalidType) {
      throw new Error(LOTTO_ERROR.INVALID_TYPE);
    }
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
