const API_BASE = "https://open.er-api.com/v6/latest";

interface ExchangeRateData {
    rates: Record<string, number>;
}

export async function fetchExchangeRate(
    sourceCurrency: string,
    targetCurrency: string
): Promise<number> {
    const apiUrl = `${API_BASE}/${sourceCurrency}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`Failed to fetch exchange rate: ${response.status} - ${response.statusText}`);
    }

    const data: ExchangeRateData = await response.json();
    const rate = data.rates[targetCurrency];

    return rate ?? (() => {
        throw new Error(`Exchange rate not available for ${sourceCurrency} to ${targetCurrency}`);
    })();
}
