import React, {FC, useContext, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type ButtonProps = {
    type: any
    className: string
    name: string
    value: string
    buttonContent: string
    action: React.MouseEventHandler
}

const Button: FC<ButtonProps> = (
    {
        type,
        className,
        name,
        value,
        buttonContent,
        action
    }) => {
    const blockName = "Button"

    return (
        <button
            className={cn(styles.default[blockName], styles.default[`${blockName}__${className}`])}
            type={type}
            value={value}
            name={name}
            onClick={action}>
            {buttonContent}
        </button>
    )
}

export default Button
