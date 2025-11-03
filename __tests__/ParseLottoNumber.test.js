import { parseLottoNumbers } from "../src/utils/parseLottoNumbers.js";

describe("parseLottoNumbers 함수 테스트", () => {
  test("쉼표로 구분된 문자열을 숫자 배열로 변환한다.", () => {
    const result = parseLottoNumbers("1,2,3,4,5,6");
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("공백이 포함되어도 정상적으로 파싱한다.", () => {
    const result = parseLottoNumbers(" 1 , 2 , 3 , 4 , 5 , 6 ");
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
