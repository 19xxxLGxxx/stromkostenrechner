import {WattInput} from "~/components/wattInput";
import {HoursPerDayInput} from "~/components/hoursPerDayInput";
import {PricePerKwhInput} from "~/components/pricePerKwhInput";
import {DaysPerWeekInput} from "~/components/daysPerWeekInput";
import {useState} from "react";
import {
    calculateConsumptionInKwhPerDay, calculateConsumptionInKwhPerMonth,
    calculateConsumptionInKwhPerWeek, calculateConsumptionInKwhPerYear,
    calculateCostsPerDay, calculateCostsPerMonth, calculateCostsPerWeek, calculateCostsPerYear
} from "~/business/calculator";


export const Calculator = () => {

    const [watt, setWatt] = useState<number>(0)
    const [hoursPerDay, setHoursPerDay] = useState<number>(0)
    const [pricePerKwh, setPricePerKwh] = useState<number>(0)
    const [workingDaysPerWeek, setWorkingDaysPerWeek] = useState(1);

    const consumptionInKwhPerDay = calculateConsumptionInKwhPerDay(watt, hoursPerDay);
    const consumptionInKwhPerWeek = calculateConsumptionInKwhPerWeek(consumptionInKwhPerDay, workingDaysPerWeek);
    const consumptionInKwhPerMonth = calculateConsumptionInKwhPerMonth(consumptionInKwhPerWeek);
    const consumptionInKwhPerYear = calculateConsumptionInKwhPerYear(consumptionInKwhPerWeek);

    const costsPerDay = calculateCostsPerDay(consumptionInKwhPerDay, pricePerKwh);
    const costsPerWeek = calculateCostsPerWeek(consumptionInKwhPerWeek, pricePerKwh);
    const costsPerMonth = calculateCostsPerMonth(consumptionInKwhPerMonth, pricePerKwh);
    const costsPerYear = calculateCostsPerYear(consumptionInKwhPerYear, pricePerKwh);

    return (
        <div className={"flex flex-row"}>
            <div className={"flex flex-col gap-2.5 w-1/2"}>
                <WattInput watt={watt} setWatt={setWatt}/>
                <HoursPerDayInput hoursPerDay={hoursPerDay} setHoursPerDay={setHoursPerDay}/>
                <DaysPerWeekInput numberOfDays={7} workingDaysPerWeek={workingDaysPerWeek} setWorkingDaysPerWeek={setWorkingDaysPerWeek}/>
                <PricePerKwhInput pricePerKwh={pricePerKwh} setPricePerKwh={setPricePerKwh}/>
            </div>
            <div className={"w-1/2"}>
                <h2 className={"font-bold text-xl"}>Ergebnis</h2>
                <div className={"mt-5"}>
                    <h3 className={"font-bold"}>Verbrauch</h3>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Verbrauch pro Tag:</span>
                        <span className={"flex justify-between ml-12"}>{Intl.NumberFormat('de-DE').format(consumptionInKwhPerDay)} kWh</span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Verbrauch pro Woche:</span>
                        <span className={"flex justify-between ml-12"}>{Intl.NumberFormat('de-DE').format(consumptionInKwhPerWeek)} kWh</span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Verbrauch pro Monat:</span>
                        <span className={"flex justify-between ml-12"}>{Intl.NumberFormat('de-DE').format(consumptionInKwhPerMonth)} kWh</span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Verbrauch pro Jahr:</span>
                        <span className={"flex justify-between ml-12"}>{Intl.NumberFormat('de-DE').format(consumptionInKwhPerYear)} kWh</span>
                    </div>
                </div>
                <div className={"mt-5"}>
                    <h3 className={"font-bold"}>Kosten</h3>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Kosten pro Tag:</span>
                        <span className={"flex justify-between ml-12"}>
                            {Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(costsPerDay)}
                        </span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Kosten pro Woche:</span>
                        <span className={"flex justify-between ml-12"}>
                            {Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(costsPerWeek)}
                        </span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Kosten pro Monat:</span>
                        <span className={"flex justify-between ml-12"}>
                            {Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(costsPerMonth)}
                        </span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"w-1/2"}>Kosten pro Jahr:</span>
                        <span className={"flex justify-between ml-12"}>
                            {Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(costsPerYear)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}