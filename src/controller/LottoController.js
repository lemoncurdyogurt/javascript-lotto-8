import InputView from "../view/InputView.js";
import OutputView from "../view/outputView.js";
import { getPurchaseNumber } from "../utils/getPurchaseNumber.js";
import { generateLotto } from "../utils/generate-lotto.js";

class LottoController {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    // 1. 사용자 입력
    const purchaseAmount = await inputView.purchaseInput();
    const purchaseCount = getPurchaseNumber(purchaseAmount);

    // 2. 구매한 로또 발행
    const purchasedLottos = [];
    for (let i = 0; i < purchaseCount; i++) {
      purchasedLottos.push(generateLotto());
    }

    // 3. 사용자 입력 당첨 번호
    this.lottoNumbers = await inputView.lottoNumbersInput();
    this.bonusNumber = await inputView.bonusNumberInput();

    // 4. 출력
    outputView.printPurchaseNumber(purchaseCount);
    outputView.printLottoList(purchasedLottos);
  }
}

export default LottoController;
