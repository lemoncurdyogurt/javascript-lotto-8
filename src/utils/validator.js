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
