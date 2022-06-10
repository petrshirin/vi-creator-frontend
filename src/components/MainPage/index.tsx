import React, {FC, useState} from "react"
import * as styles from './style.module.scss'
import StudentPage from "./StudentPage";
import TeacherPage from "./TeacherPage";


type MainPageProps = {
    role: string
}

const MainPage: FC<MainPageProps> = (
    {role}) => {
    const blockName = "mainPage"

    return (
        <div className={styles.default[`${blockName}__container`]}>
            {role === 'student' ? <StudentPage /> : <TeacherPage />}
        </div>
    )
}

export default MainPage
