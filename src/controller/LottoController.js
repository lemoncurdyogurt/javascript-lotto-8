import { Console } from "@woowacourse/mission-utils";

import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

import { getPurchaseNumber } from "../utils/getPurchaseNumber.js";
import { generateLotto } from "../utils/generateLotto.js";
import { getResultCount } from "../utils/getResultCount.js";
import { calculateYieldRate } from "../utils/calculateYieldRate.js";

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }
  async run() {
    try {
      // 1. 사용자 입력
      const purchaseAmount = await this.inputView.purchaseInput();
      const purchaseCount = getPurchaseNumber(purchaseAmount);
      Console.print("");
      // 2. 구매한 로또 갯수 출력
      this.outputView.printPurchaseNumber(purchaseCount);

      // 3. 구매한 로또 발행
      const purchasedLottos = [];
      for (let i = 0; i < purchaseCount; i++) {
        purchasedLottos.push(generateLotto());
      }
      this.outputView.printPurchasedLottos(purchasedLottos);
      Console.print("");

      // 4. 사용자 입력 당첨 번호
      this.lottoNumbers = await this.inputView.lottoNumbersInput();
      Console.print("");
      this.bonusNumber = await this.inputView.bonusNumberInput();
      Console.print("");

      // 5. 당첨 결과 집계
      const resultCount = getResultCount(
        purchasedLottos,
        this.lottoNumbers,
        this.bonusNumber,
      );
      const yieldRate = calculateYieldRate(resultCount, purchaseAmount);
      this.outputView.printWinningResult(resultCount, yieldRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoController;
