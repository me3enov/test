export function sanitizeInputValue(value: number): number {
    const constrainedValue = Math.min(Math.max(value, 0), 9999999999999);
    const [integerPart, fractionalPart = ""] = constrainedValue.toString().split(".");
    return +`${integerPart}.${fractionalPart.slice(0, 5)}`;
}

