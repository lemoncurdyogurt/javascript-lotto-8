import { PRIZE_MONEY } from "../constants/prizeMoney.js";

export function calculateYieldRate(resultCount, purchaseAmount) {
  const totalReward =
    resultCount.match3 * PRIZE_MONEY.match3 +
    resultCount.match4 * PRIZE_MONEY.match4 +
    resultCount.match5 * PRIZE_MONEY.match5 +
    resultCount.match5Bonus * PRIZE_MONEY.match5Bonus +
    resultCount.match6 * PRIZE_MONEY.match6;

  return (totalReward / purchaseAmount) * 100;
}
