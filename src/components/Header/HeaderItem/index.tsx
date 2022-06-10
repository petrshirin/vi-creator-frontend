import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";

type HeaderItemProps = {
    title: string
    path: string
}

const HeaderItem: FC<HeaderItemProps> = (
    {
        title,
        path
    }) => {
    const blockName = "headerItem"
    const navigate = useNavigate()
    const redirectToPage = () => {
        navigate(path)
    }

    return (
        <div className={styles.default[blockName]} onClick={redirectToPage}>
            {title}
        </div>
    )
}

export default HeaderItem
