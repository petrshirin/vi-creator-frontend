import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import Header from "../Header";

type PageContainerProps = {
    title: string
    children: React.ReactNode,
    className?: string,
    style?: object
}

const PageContainer: FC<PageContainerProps> = (
    {
        title,
        children,
        style,
        className = ''
    }) => {
    const blockName = "pageContainer"

    return (
        <div className={styles.default[blockName]}>
            <Header role={'student'} />
            <div className={cn(styles.default[`${blockName}__container`], styles.default[className])}>
                <div
                    className={cn(styles.default[`${blockName}__title`],
                        className === 'full-width' ? styles.default['margin-right'] : '')}>
                    {title}
                </div>
                <div className={styles.default[`${blockName}__content`]}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageContainer
