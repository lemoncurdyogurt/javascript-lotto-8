export function validatePurchaseUnit(purchaseAmount) {
  if (purchaseAmount % 1000 !== 0) {
    throw new Error(`[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.`);
  }
}
export function validateMinPurchase(purchaseAmount) {
  if (purchaseAmount < 1000) {
    throw new Error(`[ERROR] 구입 금액은 1000원 이상으로 입력해야합니다.`);
  }
}
export function validateIsNumber(input) {
  if (isNaN(input)) {
    throw new Error(`[ERROR] 숫자가 아닌 값이 입력값으로 들어왔습니다.`);
  }
}

export function validateLength(numbers, expectedLength, label = "당첨 번호") {
  if (numbers.length !== expectedLength) {
    throw new Error(`[ERROR] ${label}는 ${expectedLength}개여야 합니다.`);
  }
}

export function validateRange(numbers) {
  if (numbers.some((n) => n < 1 || n > 45)) {
    throw new Error("[ERROR] 번호는 1~45 사이여야 합니다.");
  }
}

export function validateDuplicates(numbers) {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error("[ERROR] 번호가 중복될 수 없습니다.");
  }
}
