import LottoResult from "../src/models/LottoResult.js";

describe("LottoResult 클래스 테스트", () => {
  let result;

  beforeEach(() => {
    result = new LottoResult();
  });

  test("한 장 로또 결과 집계", () => {
    result.addLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7);
    const counts = result.getResultCount();
    expect(counts.match6).toBe(1);
    expect(counts.match5).toBe(0);
    expect(counts.match5Bonus).toBe(0);
  });

  test("보너스 포함 5개 일치", () => {
    result.addLotto([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7);
    const counts = result.getResultCount();
    expect(counts.match5Bonus).toBe(1);
  });

  test("여러 장 로또 결과 집계", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [1, 2, 3, 4, 5, 7],
    ];
    result.addLottos(lottos, [1, 2, 3, 4, 5, 6], 7);
    const counts = result.getResultCount();
    expect(counts.match6).toBe(1);
    expect(counts.match5Bonus).toBe(1);
  });

  test("수익률 계산", () => {
    result.addLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7);
    const rate = result.calculateYieldRate(1000);
    expect(rate).toBe((2000000000 / 1000) * 100);
  });
});
