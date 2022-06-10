import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import Logo from "../../../icons/logo.svg"
import Logout from "../../../icons/logout.svg"


type MainPageHeaderProps = {}

const MainPageHeader: FC<MainPageHeaderProps> = (
    {}) => {
    const blockName = "mainPageHeader"

    return (
        <div className={styles.default[blockName]}>
            <img src={Logo} alt={'logo'}/>
            <img src={Logout} alt={'logout'} />
        </div>
    )
}

export default MainPageHeader
