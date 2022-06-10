import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'

type LeftBarProps = {
    number: number
    title: React.ReactNode
    icon: string,
    action: React.MouseEventHandler
}

const LeftBarItem: FC<LeftBarProps> = (
    {
        number,
        title,
        icon,
        action
    }) => {
    const blockName = "leftBarItem"

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__item`]}
                 onClick={(e) => {action(e)}} data-itemnumber={number}>
                <span className={styles.default[`${blockName}__title`]}>{title}</span>
                <img src={icon} alt={'graphIcon'} className={styles.default[`${blockName}__icon`]}/>
            </div>
        </div>
    )
}

export default LeftBarItem
