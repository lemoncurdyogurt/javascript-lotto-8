export function getResultCount(purchasedLottos, winningNumbers, bonusNumber) {
  const resultCount = {
    match3: 0,
    match4: 0,
    match5: 0,
    match5Bonus: 0,
    match6: 0,
  };

  purchasedLottos.forEach((lotto) => {
    const matchCount = lotto
      .getNumbers()
      .filter((num) => winningNumbers.includes(num)).length;
    const bonusMatch = lotto.getNumbers().includes(bonusNumber);

    if (matchCount === 6) resultCount.match6++;
    else if (matchCount === 5 && bonusMatch) resultCount.match5Bonus++;
    else if (matchCount === 5) resultCount.match5++;
    else if (matchCount === 4) resultCount.match4++;
    else if (matchCount === 3) resultCount.match3++;
  });

  return resultCount;
}
