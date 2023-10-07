<script lang="ts">
    import {currencyCodes} from "../currencyCodes.js";
    export let selectedCurrency: Currency;
    export let currencyType: 'sourceCurrency' | 'targetCurrency';
    export let onCurrencyChange: (event: Event, currencyType: 'sourceCurrency' | 'targetCurrency') => void;
    export type Currency = string;
</script>

<select class="select" bind:value={selectedCurrency} on:change={(e) => onCurrencyChange(e, currencyType)}>
    {#each Object.entries(currencyCodes) as [code, name]}
        <option value={code}>{name}</option>
    {/each}
</select>
