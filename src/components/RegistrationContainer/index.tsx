import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import Logo from "../../icons/logo.svg"


type RegistrationContainerProps = {
    header: string
    type: string,
    children: React.ReactNode
}

const RegistrationContainer: FC<RegistrationContainerProps> = (
    {
        children,
        type,
    }) => {
    const blockName = "registrationContainer"

    return (
        <div className={styles.default[blockName]}>
            <img src={Logo} className={styles.default[`${blockName}__logo`]} alt={"logo"} />
            <div className={styles.default[`${blockName}__container`]}>
                {children}
            </div>
        </div>
    )
}

export default RegistrationContainer
