export const ERROR_MESSAGES = {
  INVALID_UNIT: "[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.",
  INSUFFICIENT_AMOUNT: "[ERROR] 구입 금액은 1000원 이상으로 입력해야합니다.",
  INVALID_ARRAY_TYPE: "[ERROR] 배열에 숫자가 아닌 값이 포함되어 있습니다.",
  INVALID_NUMBER_TYPE: "[ERROR] 숫자가 아닌 값이 입력값으로 들어왔습니다.",
  LENGTH_MISMATCH: (label, expectedLength) =>
    `[ERROR] ${label}는 ${expectedLength}개여야 합니다.`,
  INVALID_RANGE: "[ERROR] 번호는 1~45 사이여야 합니다.",
  DUPLICATE_NUBMER: "[ERROR] 번호가 중복될 수 없습니다.",
};
