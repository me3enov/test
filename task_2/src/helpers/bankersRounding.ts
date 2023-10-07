export function bankersRounding(number: number, precision: number): number {
    const factor = Math.pow(10, precision);
    const adjusted = Math.round(number * factor);

    return (Math.abs(number * factor - adjusted) === 0.5 && adjusted % 2 !== 0)
        ? (adjusted - 1) / factor
        : adjusted / factor;
}
