import {
  validateIsNumber,
  validateLength,
  validateRange,
  validateDuplicates,
} from "../src/utils/validator.js";

import { ERROR_MESSAGES } from "../src/constants/validationMessage.js";

describe("Validator 유틸 테스트", () => {
  test("숫자가 아닐 경우 예외 발생", () => {
    expect(() => validateIsNumber("abc")).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER_TYPE,
    );
  });

  test("배열 길이가 다를 경우 예외 발생", () => {
    expect(() => validateLength([1, 2, 3], 6, "로또 번호")).toThrow(
      ERROR_MESSAGES.LENGTH_MISMATCH("로또 번호", 6),
    );
  });

  test("숫자가 범위(1~45)를 벗어나면 예외 발생", () => {
    expect(() => validateRange([0, 46])).toThrow(ERROR_MESSAGES.INVALID_RANGE);
  });

  test("중복 숫자가 있으면 예외 발생", () => {
    expect(() => validateDuplicates([1, 2, 3, 3])).toThrow(
      ERROR_MESSAGES.DUPLICATE_NUMBER,
    );
  });
});
