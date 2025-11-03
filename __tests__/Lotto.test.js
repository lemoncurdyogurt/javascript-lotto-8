import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
  });

  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => new Lotto(["1", "a", "3", "4", "5", "6"])).toThrow(
      "[ERROR] 로또 번호는 숫자여야 합니다.",
    );
  });

  test("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow(
      "[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.",
    );

    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(
      "[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.",
    );
  });

  test("올바른 번호 배열이 들어오면 정상적으로 생성된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
