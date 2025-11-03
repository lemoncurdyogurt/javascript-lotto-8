import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../src/view/InputView.js";

describe("InputView 테스트", () => {
  beforeEach(() => {
    MissionUtils.Console.readLineAsync = jest.fn();
  });

  test("구입금액 입력을 정상적으로 처리한다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce("8000");
    const inputView = new InputView();
    const result = await inputView.purchaseInput();
    expect(result).toBe(8000);
  });
});
