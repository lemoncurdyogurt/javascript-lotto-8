import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LottoGame from "../models/LottoGame.js";

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    try {
      const purchaseAmount = await this.inputView.purchaseInput();
      const game = new LottoGame(purchaseAmount);

      Console.print("");
      this.outputView.printPurchaseNumber(game.getPurchaseCount());
      this.outputView.printPurchasedLottos(game.getLottos());

      Console.print("");
      const winningNumbers = await this.inputView.lottoNumbersInput();
      Console.print("");
      const bonusNumber = await this.inputView.bonusNumberInput();
      Console.print("");

      game.addResult(winningNumbers, bonusNumber);
      const resultCount = game.getResultCount();
      const yieldRate = game.calculateYieldRate();

      this.outputView.printWinningResult(resultCount, yieldRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoController;
