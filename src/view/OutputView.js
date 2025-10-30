import { Console } from "@woowacourse/mission-utils";
import { getPurchaseNumber } from "../utils/getPurchaseNumber.js";

class OutputView {
  printPurchaseNumber(purchaseAmount) {
    const purchaseNumber = getPurchaseNumber(purchaseAmount);
    Console.print(`${purchaseNumber}개를 구매했습니다.`);
  }
}
export default OutputView;
