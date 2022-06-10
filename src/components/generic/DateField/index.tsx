import React, {FC, useContext, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type DateFieldProps = {
    placeholder: string
    label: string
    className: string
    dateFormat: string
    name: string
    initialValue?: string
}

const DateField: FC<DateFieldProps> = (
    {
        placeholder,
        label,
        className,
        dateFormat,
        name,
        initialValue = '',
    }) => {
    const blockName = "dateField"
    // @ts-ignore
    const [startDate, setStartDate] = useState(new Date(initialValue?.split('.').reverse().map((i) => Number(i))))
    console.log(startDate)
    return (
        <div className={cn(styles.default[`${blockName}__container`], styles.default[className])}>
            <label className={styles.default[`${blockName}__label`]}>
                {label}
            </label>
            <DatePicker dateFormat={dateFormat} placeholderText={placeholder}
                        onChange={(date: Date) => setStartDate(date)}
                        className={styles.default[`${blockName}__field`]} selected={startDate} name={name}/>
        </div>
    )
}

export default DateField
