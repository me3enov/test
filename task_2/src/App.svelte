<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchExchangeRate } from './api/apiUtils.ts';
    import { bankersRounding } from './helpers/bankersRounding.ts';
    import { sanitizeInputValue } from './helpers/sanitizeInputValue.ts';
    import { currencyCodes } from './currencyCodes.ts';
    import CurrencyInput from './components/CurrencyInput.svelte';
    import CurrencySelector from './components/CurrencySelector.svelte';

    type Currency = keyof typeof currencyCodes;

    let sourceAmount = 1;
    let targetAmount = 0;
    let sourceCurrency: Currency = 'USD';
    let targetCurrency: Currency = 'EUR';
    let exchangeRate = 1;
    let activeInput: 'sourceInput' | 'targetInput' = 'sourceInput';

    async function fetchRates() {
        const rate = await fetchExchangeRate(sourceCurrency as string, targetCurrency as string);
        exchangeRate = rate;

        const inputAmounts = {
            sourceInput: { fromAmount: sourceAmount },
            targetInput: { fromAmount: targetAmount }
        };

        const { fromAmount } = inputAmounts[activeInput];
        const convertedAmount = activeInput === 'sourceInput'
            ? bankersRounding(fromAmount * exchangeRate, 5)
            : bankersRounding(fromAmount / exchangeRate, 5);

        sourceAmount = (activeInput === 'sourceInput' ? fromAmount : convertedAmount);
        targetAmount = (activeInput === 'targetInput' ? fromAmount : convertedAmount);
    }

    onMount(() => {
        fetchRates();
    });

    function handleInputChange(event: Event, inputType: 'sourceInput' | 'targetInput') {
        const inputElement = event.target as HTMLInputElement;

        const isInvalid = parseFloat(inputElement.value) > 9999999999999;
        inputElement.classList.toggle('input-invalid', isInvalid);

        let inputValue = sanitizeInputValue(parseFloat(inputElement.value));

        inputElement.value = inputValue.toString();

        activeInput = inputType;

        (inputType === 'sourceInput')
            ? (sourceAmount = inputValue)
            : (targetAmount = inputValue);

        fetchRates();
    }

    function handleCurrencyChange(event: Event, currencyType: 'sourceCurrency' | 'targetCurrency') {
        const selectElement = event.target as HTMLSelectElement;
        const selectedCurrency = selectElement.value as Currency;

        (currencyType === 'sourceCurrency')
            ? (sourceCurrency = selectedCurrency)
            : (targetCurrency = selectedCurrency);

        fetchRates();
    }
</script>

<div class="main">
    <h1 class="title">Currency Converter</h1>
    <div class="converter">
        <div class="currency">
            <div class="input-container">
                <CurrencyInput value={sourceAmount} inputType="sourceInput" onInputChange={handleInputChange} />
            </div>
            <div class="select-container">
                <CurrencySelector selectedCurrency={sourceCurrency} currencyType="sourceCurrency" onCurrencyChange={handleCurrencyChange} />
            </div>
        </div>
        <div class="currency">
            <div class="input-container">
                <CurrencyInput value={targetAmount} inputType="targetInput" onInputChange={handleInputChange} />
            </div>
            <div class="select-container">
                <CurrencySelector selectedCurrency={targetCurrency} currencyType="targetCurrency" onCurrencyChange={handleCurrencyChange} />
            </div>
        </div>
    </div>
    <p class="text">Exchange Rate: 1 {sourceCurrency} = {exchangeRate.toFixed(5)} {targetCurrency}</p>
</div>
