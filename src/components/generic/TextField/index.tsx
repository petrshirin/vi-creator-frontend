import React, {FC, useContext, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'


type TextFieldProps = {
    placeholder: string
    label: string
    maxLength: number
    className: string
    type: string
    name: string
    autoComplete?: boolean
    initialValue?: string
}

const TextField: FC<TextFieldProps> = (
    {
        placeholder,
        label,
        maxLength,
        className,
        type,
        name,
        autoComplete = true,
        initialValue = ''
    }) => {
    const blockName = "textField"
    const [value, setValue] = useState(initialValue)

    return (
        <div className={cn(styles.default[`${blockName}__container`], styles.default[className])}>
            <label className={styles.default[`${blockName}__label`]}>
                {label}
            </label>
            <input type={type} className={styles.default[`${blockName}__field`]}
                   placeholder={placeholder} value={value} maxLength={maxLength}
                   onChange={e => setValue(e.target.value)} name={name}
                   autoComplete={autoComplete ? 'on' : 'new-password'}/>
        </div>
    )
}

export default TextField
