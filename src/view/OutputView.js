import { Console } from "@woowacourse/mission-utils";
import { PRIZE_MONEY } from "../constants/prizeMoney.js";
import { OUTPUT_MESSAGES } from "../constants/outputMessages.js";

class OutputView {
  printPurchaseNumber(purchaseCount) {
    Console.print(OUTPUT_MESSAGES.PURCHASE_COUNT(purchaseCount));
  }

  printPurchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
  printWinningResult(resultCount, yieldRate) {
    Console.print(OUTPUT_MESSAGES.STATISTICS_TITLE);
    Console.print(OUTPUT_MESSAGES.STATISTICS_DIVIDER);
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULT(3, PRIZE_MONEY.match3, resultCount.match3),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULT(4, PRIZE_MONEY.match4, resultCount.match4),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULT(5, PRIZE_MONEY.match5, resultCount.match5),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULT(
        5,
        PRIZE_MONEY.match5Bonus,
        resultCount.match5Bonus,
        true,
      ),
    );
    Console.print(
      OUTPUT_MESSAGES.MATCH_RESULT(6, PRIZE_MONEY.match6, resultCount.match6),
    );

    Console.print(`총 수익률은 ${yieldRate.toFixed(1)}%입니다.`);
  }
}
export default OutputView;
