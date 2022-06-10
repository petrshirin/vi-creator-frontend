import React, {FC, useState} from "react"
import * as styles from './style.module.scss'
import PageLink from "../PageLink";
import TaskListIcon from '../../../icons/taskList.svg'
import GraphIcon from '../../../icons/graph.svg'
import PlayBotIcon from '../../../icons/playBot.svg'
import CreateTaskIcon from '../../../icons/createTask.svg'
import StudentAnswersIcon from '../../../icons/studentAnswers.svg'
import StudentStatisticsIcon from '../../../icons/studentStatistics.svg'
import MainPageHeader from "../Header";


type TeacherPageProps = {
}

const TeacherPage: FC<TeacherPageProps> = (
    {}) => {
    const blockName = "teacherPage"

    return (
        <div className={styles.default[`${blockName}__container`]}>
            <MainPageHeader />
            <div className={styles.default[blockName]}>
                <div className={styles.default[`${blockName}__col-1`]}>
                    <PageLink icon={TaskListIcon} title={'Список заданий'} path={'/tasks'} className={'third-width'} />
                    <PageLink icon={GraphIcon} title={'Граф'} path={'/graph'} className={'third-width'} />
                    <PageLink icon={CreateTaskIcon} title={'Создание задания'} path={'/create_task'} className={'third-width'} />
                </div>
                <div className={styles.default[`${blockName}__col-2`]}>
                    <PageLink icon={PlayBotIcon} title={'Запуск бота'} path={'/run_bot'} className={'third-width'} />
                    <PageLink icon={StudentAnswersIcon} title={'Ответы учеников'} path={'/student_answers'} className={'third-width'} />
                    <PageLink icon={StudentStatisticsIcon} title={'Прогресс учеников'} path={'/student_statistic'} className={'third-width'} />
                </div>
            </div>
        </div>
    )
}

export default TeacherPage