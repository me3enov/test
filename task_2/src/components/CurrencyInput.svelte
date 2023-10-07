<script lang="ts">
    export let value: number;
    export let inputType: 'sourceInput' | 'targetInput';
    export let onInputChange: (event: Event, inputType: 'sourceInput' | 'targetInput') => void;
</script>

<input
    class="input-number"
    min="0"
    max="9999999999999"
    type="number"
    bind:value={value}
    on:input={(e) => onInputChange(e, inputType)}
/>
