import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";

export function generateLotto() {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  lottoNumbers.sort((a, b) => a - b);
  return new Lotto(lottoNumbers);
}
