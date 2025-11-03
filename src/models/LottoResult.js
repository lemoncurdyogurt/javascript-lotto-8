import { PRIZE_MONEY } from "../constants/prizeMoney.js";

export default class LottoResult {
  constructor() {
    this.resultCount = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5Bonus: 0,
      match6: 0,
    };
  }

  addLotto(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = lottoNumbers.filter((num) =>
      winningNumbers.includes(num),
    ).length;
    const isBonusMatch = lottoNumbers.includes(bonusNumber);

    switch (matchCount) {
      case 6:
        this.resultCount.match6++;
        break;
      case 5:
        isBonusMatch
          ? this.resultCount.match5Bonus++
          : this.resultCount.match5++;
        break;
      case 4:
        this.resultCount.match4++;
        break;
      case 3:
        this.resultCount.match3++;
        break;
      default:
        break;
    }
  }

  addLottos(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lottoNumbers) =>
      this.addLotto(lottoNumbers, winningNumbers, bonusNumber),
    );
  }

  calculateYieldRate(purchaseAmount) {
    const totalReward =
      this.resultCount.match3 * PRIZE_MONEY.match3 +
      this.resultCount.match4 * PRIZE_MONEY.match4 +
      this.resultCount.match5 * PRIZE_MONEY.match5 +
      this.resultCount.match5Bonus * PRIZE_MONEY.match5Bonus +
      this.resultCount.match6 * PRIZE_MONEY.match6;

    return (totalReward / purchaseAmount) * 100;
  }

  getResultCount() {
    return this.resultCount;
  }
}
