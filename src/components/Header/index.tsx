import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import HeaderItem from "./HeaderItem";
import Logout from "../../icons/logout.svg";
import MainPageIcon from "../../icons/mainPage.svg"

type HeaderProps = {
    role: string
}

const Header: FC<HeaderProps> = (
    {
        role
    }) => {
    const blockName = "header"

    const navigate = useNavigate()
    const logoutHandler = () => {

    }
    const redirectToMainPage = () => {
        navigate('/')
    }

    return (
        <div className={styles.default[blockName]}>
            {role == 'student' ?
                <div className={styles.default[`${blockName}__container`]}>
                    <img src={MainPageIcon} alt={'main_page'} onClick={redirectToMainPage}/>
                    <HeaderItem title={'Список заданий'} path={'/tasks'} />
                    <HeaderItem title={'Граф'} path={'/graph'} />
                    <HeaderItem title={'Запуск бота'} path={'/run_bot'} />
                    <HeaderItem title={'Настройки'} path={'/settings'} />
                    <img src={Logout} alt={'logout'} onClick={logoutHandler}/>
                </div> :

                <div className={styles.default[`${blockName}__container`]}>
                    <img src={MainPageIcon} alt={'main_page'} onClick={redirectToMainPage}/>
                    <HeaderItem title={'Создание заданий'} path={'/create_task'} />
                    <HeaderItem title={'Ответы учеников'} path={'/student_answers'} />
                    <HeaderItem title={'Прогресс учеников'} path={'/student_statistic'} />
                    <HeaderItem title={'Граф'} path={'/graph'} />
                    <HeaderItem title={'Запуск бота'} path={'/run_bot'} />
                    <HeaderItem title={'Список заданий'} path={'/tasks'} />
                    <HeaderItem title={'Настройки'} path={'/settings'} />
                    <img src={Logout} alt={'logout'} onClick={logoutHandler}/>
                </div>
            }
        </div>
    )
}

export default Header
