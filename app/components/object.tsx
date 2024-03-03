import {ChangeEvent, useState} from "react";

interface Props {
    objectName: string;
    setObjectName: (name: string) => void;
}
export const ObjectNameInput = ({objectName, setObjectName}: Props) => {
    const [inputValue, setInputValue] = useState(objectName);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setObjectName(value);
    };

    return (
        <div className={"flex flex-row"}>
            <div className={"w-1/2"}>
                Objektname:
            </div>
            <div className={"w-1/2"}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                    className={"border border-gray-300 text-right pr-3 text-gray-500"}
                />
            </div>
        </div>
    );
}
