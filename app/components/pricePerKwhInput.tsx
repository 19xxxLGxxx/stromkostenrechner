import {ChangeEvent, useState} from "react";

interface Props {
    pricePerKwh: number;
    setPricePerKwh: (pricePerKwh: number) => void;
}

export const PricePerKwhInput = ({pricePerKwh, setPricePerKwh} : Props) => {
    const [inputValue, setInputValue] = useState<string>(pricePerKwh.toString())

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const normalizedValue = value.replace(/,/g, '.');
        const sanitizedValue = normalizedValue.replace(/[^0-9.]/g, '');

        if (sanitizedValue.length === 0) {
            setInputValue("")
            return;
        }

        const parsedInput = parseFloat(sanitizedValue);
        if (isNaN(parsedInput)) {
            return;
        }
        const commas = value.match(/,/g);
        const hasMoreThanOneCommas = commas && commas.length > 1;
        const formattedPrice = Intl.NumberFormat('de-DE').format(parsedInput) + (value.endsWith(',') && !hasMoreThanOneCommas ? ',' : '' );

        setPricePerKwh(parsedInput);
        setInputValue(formattedPrice.toString());
    }
    return (
        <div className={"flex flex-row"}>
            <div className={"w-1/2"}>
                Strompreis pro KWh
            </div>
            <div>
                <input
                    value={inputValue}
                    onChange={handleOnChange}
                    className={"border border-gray-300 text-right pr-3 text-gray-500"}
                />
            </div>
        </div>
    )
}