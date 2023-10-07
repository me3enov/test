# Currency Converter SPA (Single Page Application)

An intuitive and user-friendly currency converter application that leverages a public API for fetching the latest exchange rates and ensures instant conversions between different currency pairs.

## Features

- **Instant Conversions**: The application is designed to be reactive. As the user inputs a value or changes the currency, the converted amount updates in real time.
- **User-Friendly Interface**: A clean and simple UI that allows users to select currency pairs and input values for conversion without any hassles.
- **Data Validation**: The input fields have checks in place to ensure valid numbers are entered and warns the user if the value exceeds a set limit.
- **Powered by Svelte**: Though my primary experience was with React and Redux, this project gave me the opportunity to explore and implement the project using Svelte.

## How it Works

1. **API Integration**: Uses the open API from [open.er-api.com](https://open.er-api.com/v6/latest) to fetch the latest currency exchange rates.
2. **Dual Input Fields**: Users can input values in either of the two fields, and the corresponding conversion value in the other field updates automatically.
3. **Currency Selection**: Drop-down selectors allow users to choose the source and target currencies for conversion.
4. **Exchange Rate Display**: The current exchange rate for the selected currency pair is displayed below the converter for user reference.

## Codebase Highlights

- `App.svelte`: The core application component that integrates currency input fields, selectors, and manages conversion logic.
- `apiUtils.ts`: Contains the async function to fetch exchange rates from the open API. It manages API calls and handles potential errors gracefully.
- Helper functions: Includes utility functions like `sanitizeInputValue` for input validation, and `bankersRounding` for precise currency conversion calculations.
- Components: Modular Svelte components such as `CurrencyInput` and `CurrencySelector` to ensure code reusability and clean architecture.

## Feedback

Thank you for considering my application for this task. I enjoyed working on it, and I hope it meets your expectations.

## License

This project is open source and available for any kind of benign use.
