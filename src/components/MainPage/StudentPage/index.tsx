import React, {FC, useState} from "react"
import * as styles from './style.module.scss'
import PageLink from "../PageLink";
import TaskListIcon from '../../../icons/taskList.svg'
import GraphIcon from '../../../icons/graph.svg'
import PlayBotIcon from '../../../icons/playBot.svg'
import SettingsIcon from '../../../icons/settings.svg'
import MainPageHeader from "../Header";


type StudentPageProps = {
}

const StudentPage: FC<StudentPageProps> = (
    {}) => {
    const blockName = "studentPage"

    return (
        <div className={styles.default[`${blockName}__container`]}>
            <MainPageHeader />
            <div className={styles.default[blockName]}>
                <div className={styles.default[`${blockName}__col-1`]}>
                    <PageLink icon={TaskListIcon} title={'Список заданий'} path={'/tasks'} className={'half-width'} />
                    <PageLink icon={GraphIcon} title={'Граф'} path={'/graph'} className={'half-width'} />
                </div>
                <div className={styles.default[`${blockName}__col-2`]}>
                    <PageLink icon={PlayBotIcon} title={'Запуск бота'} path={'/run_bot'} className={'half-width'} />
                    <PageLink icon={SettingsIcon} title={'Настройки'} path={'/settings'} className={'half-width'} />
                </div>
            </div>
        </div>
    )
}

export default StudentPage
