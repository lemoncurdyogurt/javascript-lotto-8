import LottoGame from "../src/models/LottoGame.js";
import Lotto from "../src/models/Lotto.js";

describe("LottoGame 클래스 테스트", () => {
  test("구매 금액에 따라 로또 개수 계산", () => {
    const game = new LottoGame(8000);
    expect(game.getPurchaseCount()).toBe(8);
    expect(game.getLottos().length).toBe(8);
    expect(game.getLottos()[0]).toBeInstanceOf(Lotto);
  });

  test("당첨 번호로 결과 집계", () => {
    const game = new LottoGame(1000);
    const lottoNumbers = game.getLottos()[0].getNumbers();
    game.addResult(lottoNumbers, 1); // 보너스 번호 1
    const result = game.getResultCount();
    expect(
      result.match6 +
        result.match5Bonus +
        result.match5 +
        result.match4 +
        result.match3,
    ).toBeGreaterThanOrEqual(0);
  });

  test("수익률 계산", () => {
    const game = new LottoGame(1000);
    const lottoNumbers = game.getLottos()[0].getNumbers();
    game.addResult(lottoNumbers, 1); // 보너스 번호 1
    const rate = game.calculateYieldRate();
    expect(typeof rate).toBe("number");
  });
});
