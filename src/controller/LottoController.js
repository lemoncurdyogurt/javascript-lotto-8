import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { getPurchaseNumber } from "../utils/getPurchaseNumber.js";
import { generateLotto } from "../utils/generateLotto.js";
import { Console } from "@woowacourse/mission-utils";

class LottoController {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    // 1. 사용자 입력
    const purchaseAmount = await inputView.purchaseInput();
    const purchaseCount = getPurchaseNumber(purchaseAmount);
    Console.print("");
    // 2. 구매한 로또 갯수 출력
    outputView.printPurchaseNumber(purchaseCount);

    // 3. 구매한 로또 발행
    const purchasedLottos = [];
    for (let i = 0; i < purchaseCount; i++) {
      purchasedLottos.push(generateLotto());
    }
    outputView.printLottoList(purchasedLottos);
    Console.print("");

    // 4. 사용자 입력 당첨 번호
    this.lottoNumbers = await inputView.lottoNumbersInput();
    Console.print("");
    this.bonusNumber = await inputView.bonusNumberInput();
    Console.print("");
  }
}

export default LottoController;
