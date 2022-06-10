import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import Logo from "../../icons/logo.svg"
import LeftBarIcon from "../../icons/leftBarIcon.svg"

type LeftBarProps = {
    children: React.ReactNode
}

const LeftBar: FC<LeftBarProps> = (
    {
        children
    }) => {
    const blockName = "leftBar"

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={cn(styles.default[blockName], isOpened ? styles.default['full-width']: '')}>
            <div className={cn(styles.default[`${blockName}__header`], isOpened ? styles.default['full-width']: '')}>
                <div className={cn(styles.default[`${blockName}__header-opened`], !isOpened ? styles.default['hidden']: '')}>
                    <img src={Logo}
                         alt={'logo'}
                         className={styles.default[`${blockName}__header-icon`]}
                    />
                    <div className={styles.default[`${blockName}__header-title`]}>
                        Creator
                    </div>
                </div>
                <img
                    className={styles.default[`${blockName}__menu-icon`]}
                    onClick={() => {setIsOpened(!isOpened)}} src={LeftBarIcon} alt={'leftBar'}/>
            </div>
            <div className={cn(styles.default[`${blockName}__content`], !isOpened ? styles.default['hidden']: '')}>
                {children}
            </div>
        </div>
    )
}

export default LeftBar
