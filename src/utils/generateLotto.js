import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import { LOTTO_CONSTANTS } from "../constants/lottoConstants.js";

export function generateLotto() {
  const lottoNumbers = Random.pickUniqueNumbersInRange(
    LOTTO_CONSTANTS.MIN_NUMBER,
    LOTTO_CONSTANTS.MAX_NUMBER,
    LOTTO_CONSTANTS.NUMBER_LENGTH,
  );
  lottoNumbers.sort((a, b) => a - b);
  return new Lotto(lottoNumbers);
}
