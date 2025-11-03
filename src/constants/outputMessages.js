export const OUTPUT_MESSAGES = {
  PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.`,
  STATISTICS_TITLE: "당첨 통계",
  STATISTICS_DIVIDER: "---",
  YIELD_RATE: (rate) => `총 수익률은 ${rate.toFixed(1)}%입니다.`,
  MATCH_RESULT: (matchCount, prize, count, bonus = false) => {
    const bonusText = bonus ? ", 보너스 볼 일치" : "";
    return `${matchCount}개 일치${bonusText} (${prize.toLocaleString()}원) - ${count}개`;
  },
};
