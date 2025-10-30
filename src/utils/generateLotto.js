import { MissionUtils } from "@woowacourse/mission-utils";

export function generateLotto() {
  const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  lottoNumbers.sort((a, b) => a - b);
  return lottoNumbers;
}
