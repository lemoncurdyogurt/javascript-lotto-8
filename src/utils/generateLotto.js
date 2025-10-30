import { MissionUtils } from "@woowacourse/mission-utils";

export function generateLotto() {
  const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumbers;
}
