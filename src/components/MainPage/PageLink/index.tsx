import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";


type PageLinkProps = {
    icon: string
    title: string
    path: string
    className: string
}

const PageLink: FC<PageLinkProps> = (
    {
        icon,
        title,
        path,
        className,
    }) => {
    const blockName = "pageLink"
    const navigate = useNavigate()

    const redirectHandler = () => {
        navigate(path)
    }

    return (
        <div className={cn(styles.default[blockName], styles.default[className])} onClick={redirectHandler}>
            <div className={styles.default[`${className}__icon-block`]}>
                <img src={icon} alt={title}/>
            </div>
            <div className={styles.default[`${className}__title-block`]}>
                {title}
            </div>
        </div>
    )
}

export default PageLink
