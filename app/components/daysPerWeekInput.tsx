interface Props {
    numberOfDays: number;
    workingDaysPerWeek: number;
    setWorkingDaysPerWeek: (workingDaysPerWeek: number) => void;
}

export const DaysPerWeekInput = ({numberOfDays, workingDaysPerWeek, setWorkingDaysPerWeek}: Props) => {
    const daysArray = Array.from({ length: numberOfDays }, (_, index) => index + 1);

    if (numberOfDays < 1 || numberOfDays > 7) {
        throw new Error('Invalid amount of days!');
    }

    return (
        <div className={"flex flex-row"}>
            <div className={"w-1/2"}>
                Betriebstage / Woche:
            </div>
            <div className="flex flex-row gap-2.5">
                {daysArray.map(day => (
                    <span key={day}>
                        <input
                            type="radio"
                            id={day.toString()}
                            checked={workingDaysPerWeek === day}
                            onClick={() => setWorkingDaysPerWeek(day)}
                            name="daysPerWeek"
                            value={day.toString()}
                            className="mr-1"
                        />
                    <label htmlFor={day.toString()}>{day}</label>
                    </span>
                ))}
            </div>
        </div>
    )
}