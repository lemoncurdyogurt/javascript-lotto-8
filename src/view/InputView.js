import { Console } from "@woowacourse/mission-utils";
import { LOTTO_CONSTANTS } from "../constants/lottoConstants.js";

import { parseLottoNumbers } from "../utils/parseLottoNumbers.js";
import {
  validateIsNumber,
  validateMinPurchase,
  validatePurchaseUnit,
  validateLength,
  validateRange,
  validateDuplicates,
} from "../utils/validator.js";

class InputView {
  async purchaseInput() {
    const purchaseAmount = Number(
      await Console.readLineAsync("구입금액을 입력해 주세요.\n"),
    );
    validateIsNumber(purchaseAmount);
    validateMinPurchase(purchaseAmount);
    validatePurchaseUnit(purchaseAmount);

    return purchaseAmount;
  }

  async lottoNumbersInput() {
    const numbersInput =
      await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningNumbers = parseLottoNumbers(numbersInput);
    validateIsNumber(winningNumbers);
    validateLength(winningNumbers, LOTTO_CONSTANTS.NUMBER_LENGTH, "당첨 번호");
    validateRange(winningNumbers);
    validateDuplicates(winningNumbers);
    return winningNumbers;
  }

  async bonusNumberInput() {
    const bonusNumber = Number(
      await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"),
    );
    validateIsNumber(bonusNumber);
    validateLength(
      [bonusNumber],
      LOTTO_CONSTANTS.BONUS_NUMBER_LENGTH,
      "보너스 번호",
    );
    return bonusNumber;
  }
}

export default InputView;
