import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printPurchaseNumber(purchaseCount) {
    Console.print(`${purchaseCount}개를 구매했습니다.`);
  }
  printLottoList(purchasedLottos) {
    purchasedLottos.map((purchaseLotto) => Console.print(purchaseLotto));
  }
}
export default OutputView;
