import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { getPurchaseNumber } from "../utils/getPurchaseNumber.js";
import { generateLotto } from "../utils/generateLotto.js";
import { Console } from "@woowacourse/mission-utils";

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
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default LottoController;
