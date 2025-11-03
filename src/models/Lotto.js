import { ERROR_MESSAGES } from "../constants/validationMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    const isOutOfRange = numbers.some((n) => n < 1 || n > 45);
    if (isOutOfRange) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
