export function handleInputChange(
    event: Event,
    inputType: 'sourceInput' | 'targetInput',
    sourceAmount: number,
    targetAmount: number,
    fetchRates: () => void
) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = parseFloat(inputElement.value);

    if (inputType === 'sourceInput') {
        sourceAmount = inputValue;
    } else {
        targetAmount = inputValue;
    }

    fetchRates();
}
