import {ChangeEvent, useState} from "react";

interface Props {
    watt: number;
    setWatt: (watt: number) => void;
}
export const WattInput = ({watt, setWatt}: Props) => {
    const [inputValue, setInputValue] = useState(watt.toString());
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
        setInputValue(parsedInput.toString())
        setWatt(parsedInput)
    }

    return (
        <div className={"flex flex-row"}>
            <div className={"w-1/2"}>
                Verbrauch in Watt
            </div>
            <div className={"w-1/2"}>
                <input
                    value={inputValue}
                    onChange={handleOnChange}
                    className={"border border-gray-300 text-right pr-3 text-gray-500"}
                />
            </div>

        </div>
    );
}