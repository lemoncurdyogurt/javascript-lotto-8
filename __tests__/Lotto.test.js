import Lotto from "../src/models/Lotto.js";
import { LOTTO_ERROR } from "../src/constants/lottoMessages.js";

describe("Lotto 클래스 테스트", () => {
  test("로또 번호 개수가 6개가 아니면 예외 발생", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
      LOTTO_ERROR.INVALID_LENGTH,
    );
  });

  test("로또 번호에 중복이 있으면 예외 발생", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      LOTTO_ERROR.DUPLICATE_NUMBER,
    );
  });

  test("로또 번호가 범위 밖이면 예외 발생", () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow(
      LOTTO_ERROR.INVALID_RANGE,
    );
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(
      LOTTO_ERROR.INVALID_RANGE,
    );
  });

  test("로또 번호가 숫자가 아니면 예외 발생", () => {
    expect(() => new Lotto([1, 2, "a", 4, 5, 6])).toThrow(
      LOTTO_ERROR.INVALID_NUMBER_TYPE,
    );
  });

  test("올바른 로또 번호 생성", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });
});
