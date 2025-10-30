import { Console } from "@woowacourse/mission-utils";
import { PRIZE_MONEY } from "../constants/prizeMoney.js";

class OutputView {
  printPurchaseNumber(purchaseCount) {
    Console.print(`${purchaseCount}개를 구매했습니다.`);
  }

  printPurchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
  printWinningResult(resultCount, yieldRate) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(
      `3개 일치 (${PRIZE_MONEY.match3.toLocaleString()}원) - ${resultCount.match3}개`,
    );
    Console.print(
      `4개 일치 (${PRIZE_MONEY.match4.toLocaleString()}원) - ${resultCount.match4}개`,
    );
    Console.print(
      `5개 일치 (${PRIZE_MONEY.match5.toLocaleString()}원) - ${resultCount.match5}개`,
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE_MONEY.match5Bonus.toLocaleString()}원) - ${resultCount.match5Bonus}개`,
    );
    Console.print(
      `6개 일치 (${PRIZE_MONEY.match6.toLocaleString()}원) - ${resultCount.match6}개`,
    );

    Console.print(`총 수익률은 ${yieldRate.toFixed(1)}%입니다.`);
  }
}
export default OutputView;
