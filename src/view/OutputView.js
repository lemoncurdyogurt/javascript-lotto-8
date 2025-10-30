import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printPurchaseNumber(purchaseCount) {
    Console.print(`${purchaseCount}개를 구매했습니다.`);
  }

  printPurchasedLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
}
export default OutputView;
