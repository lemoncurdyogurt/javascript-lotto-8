import { ERROR_MESSAGES } from "../constants/validationMessage";

export function validatePurchaseUnit(purchaseAmount) {
  if (purchaseAmount % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.INVALID_UNIT);
  }
}
export function validateMinPurchase(purchaseAmount) {
  if (purchaseAmount < 1000) {
    throw new Error(ERROR_MESSAGES.INSUFFICIENT_AMOUNT);
  }
}
export function validateIsNumber(input) {
  if (Array.isArray(input)) {
    if (!input.every((n) => typeof n === "number" && !isNaN(n))) {
      throw new Error(ERROR_MESSAGES.INVALID_ARRAY_TYPE);
    }
  } else {
    if (typeof input !== "number" || isNaN(input)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_TYPE);
    }
  }
}

export function validateLength(numbers, expectedLength, label = "당첨 번호") {
  if (numbers.length !== expectedLength) {
    throw new Error(ERROR_MESSAGES.LENGTH_MISMATCH(label, expectedLength));
  }
}

export function validateRange(numbers) {
  if (numbers.some((n) => n < 1 || n > 45)) {
    throw new Error(ERROR_MESSAGES.INVALID_RANGE);
  }
}

export function validateDuplicates(numbers) {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NUBMER);
  }
}
