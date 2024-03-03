export function sum(a: number, b: number) {
    return a + b;
}

export const calculateConsumptionInKwhPerDay = (watt: number, consumingHoursPerDay: number) => {
    return roundToTwoDigits((watt / 1000) * consumingHoursPerDay);
}

export const calculateConsumptionInKwhPerWeek = (consumptionInKwhPerDay: number, consumingHoursPerWeek: number) => {
    return roundToTwoDigits(consumptionInKwhPerDay * consumingHoursPerWeek);
}

export const calculateConsumptionInKwhPerMonth = (consumptionInKwhPerWeek: number) => {
    return roundToTwoDigits(consumptionInKwhPerWeek * 4);
}

export const calculateConsumptionInKwhPerYear = (consumptionInKwhPerWeek: number) => {
    return roundToTwoDigits(consumptionInKwhPerWeek * 52);
}

export const calculateCostsPerDay = (consumptionInKwhPerDay: number, pricePerKwh: number) => {
    return roundToTwoDigits(consumptionInKwhPerDay * pricePerKwh);
}

export const calculateCostsPerWeek = (consumptionInKwhPerWeek: number, pricePerKwh: number) => {
    return roundToTwoDigits(consumptionInKwhPerWeek * pricePerKwh);
}

export const calculateCostsPerMonth = (consumptionInKwhPerMonth: number, pricePerKwh: number) => {
    return roundToTwoDigits(consumptionInKwhPerMonth * pricePerKwh);
}

export const calculateCostsPerYear = (consumptionInKwhPerYear: number, pricePerKwh: number) => {
    return roundToTwoDigits(consumptionInKwhPerYear * pricePerKwh);
}
const roundToTwoDigits = (number: number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
}