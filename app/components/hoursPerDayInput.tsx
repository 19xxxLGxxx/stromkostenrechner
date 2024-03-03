import {ChangeEvent, useState} from "react";

interface Props {
    hoursPerDay: number;
    setHoursPerDay: (hoursPerDay: number) => void;
}

export const HoursPerDayInput = ({hoursPerDay, setHoursPerDay}: Props) => {
    const [inputValue, setInputValue] = useState(hoursPerDay.toString())
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (value.length === 0) {
            setInputValue("")
            return;
        }
        const parsedInput = Number.parseInt(value);
        if (isNaN(parsedInput)) {
            return;
        }
        const validHoursPerDay = parsedInput <= 24 ? parsedInput : 24;
        setHoursPerDay(validHoursPerDay);
        setInputValue(validHoursPerDay.toString())
    }

    return (
        <div className={"flex flex-row"}>
            <div className={"w-1/2"}>
                Betriebsstunden / Tag
            </div>
            <div className={"w-1/2"}>
                <input
                    value={inputValue}
                    onChange={handleOnChange}
                    className={"border border-gray-300 text-right pr-3 text-gray-500"}
                />
            </div>

        </div>
    )
}