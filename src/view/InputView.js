import { Console } from "@woowacourse/mission-utils";
import { parseLottoNumbers } from "../utils/parseLottoNumbers.js";

class InputView {
  async purchaseInput() {
    const purchaseAmount = Number(
      await Console.readLineAsync("구입금액을 입력해 주세요.\n"),
    );
    return purchaseAmount;
  }

  async lottoNumbersInput() {
    const numbersInput =
      await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const lottoNumbers = parseLottoNumbers(numbersInput);
    return lottoNumbers;
  }

  async bonusNumberInput() {
    const bonusNumber = Number(
      await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"),
    );
    return bonusNumber;
  }
}

export default InputView;
