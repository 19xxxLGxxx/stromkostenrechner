import {test, expect, describe} from "@jest/globals";
import {
    calculateConsumptionInKwhPerDay,
    calculateConsumptionInKwhPerMonth,
    calculateConsumptionInKwhPerWeek,
    calculateConsumptionInKwhPerYear,
    calculateCostsPerDay,
    calculateCostsPerMonth,
    calculateCostsPerWeek, calculateCostsPerYear,
    sum
} from "./calculator";

describe('test calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('calculate consumption in kwh per day', () => {
        const watt = 50;
        const consumingHoursPerDay = 8;
        const expectedResultInKwhPerDay = 0.4;
        expect(calculateConsumptionInKwhPerDay(watt, consumingHoursPerDay)).toBe(expectedResultInKwhPerDay)
    })

    test('calculate consumption in kwh per week', () => {
        const consumptionInKwhPerDay = 0.7;
        const consumingDaysPerWeek = 4;
        const expectedResultInKwhPerWeek = 2.8;
        expect(calculateConsumptionInKwhPerWeek(consumptionInKwhPerDay, consumingDaysPerWeek)).toBe(expectedResultInKwhPerWeek)
    })

    test('calculate consumption in kwh per month', () => {
        const consumptionInKwhPerWeek = 2.8;
        const expectedResultInKwhPerMonth = 11.2;
        expect(calculateConsumptionInKwhPerMonth(consumptionInKwhPerWeek)).toBe(expectedResultInKwhPerMonth)
    })

    test('calculate consumption in kwh per year', () => {
        const consumptionInKwhPerWeek = 2.8;
        const expectedResultInKwhPerYear = 145.6;
        expect(calculateConsumptionInKwhPerYear(consumptionInKwhPerWeek)).toBe(expectedResultInKwhPerYear)
    })

    test('calculate costs per day', () => {
        const consumptionInKwhPerDay = 0.6;
        const pricePerKwh = 0.29;
        const pricePerDay = 0.17;
        expect(calculateCostsPerDay(consumptionInKwhPerDay, pricePerKwh)).toBe(pricePerDay)
    })

    test('calculate costs per week', () => {
        const consumptionInKwhPerWeek = 3.4;
        const pricePerKwh = 0.29;
        const pricePerWeek = 0.99;
        expect(calculateCostsPerWeek(consumptionInKwhPerWeek, pricePerKwh)).toBe(pricePerWeek)
    })

    test('calculate costs per month', () => {
        const consumptionInKwhPerMonth = 11.2;
        const pricePerKwh = 0.29;
        const pricePerMonth = 3.25;
        expect(calculateCostsPerMonth(consumptionInKwhPerMonth, pricePerKwh)).toBe(pricePerMonth)
    })

    test('calculate costs per year', () => {
        const consumptionInKwhPerYear = 145.6;
        const pricePerKwh = 0.29;
        const pricePerYear = 42.22;
        expect(calculateCostsPerYear(consumptionInKwhPerYear, pricePerKwh)).toBe(pricePerYear)
    })
})
