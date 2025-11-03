import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoResult from "./LottoResult.js";
import { LOTTO_CONSTANTS } from "../constants/lottoConstants.js";

export default class LottoGame {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.purchaseCount = this.#calculatePurchaseCount();
    this.lottos = this.#generateLottos();
    this.result = new LottoResult();
  }

  #calculatePurchaseCount() {
    return this.purchaseAmount / LOTTO_CONSTANTS.UNIT_PRICE;
  }

  #generateLottos() {
    return Array.from({ length: this.purchaseCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_CONSTANTS.MIN_NUMBER,
        LOTTO_CONSTANTS.MAX_NUMBER,
        LOTTO_CONSTANTS.NUMBER_LENGTH,
      ).sort((a, b) => a - b);

      return new Lotto(numbers);
    });
  }

  addResult(winningNumbers, bonusNumber) {
    const lottoNumbersArray = this.lottos.map((lotto) => lotto.getNumbers());
    this.result.addLottos(lottoNumbersArray, winningNumbers, bonusNumber);
  }

  getResultCount() {
    return this.result.getResultCount();
  }

  calculateYieldRate() {
    return this.result.calculateYieldRate(this.purchaseAmount);
  }

  getLottos() {
    return this.lottos;
  }

  getPurchaseCount() {
    return this.purchaseCount;
  }
}
