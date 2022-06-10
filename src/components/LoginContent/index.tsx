import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import Logo from "../../icons/logo.svg"
import TextField from "../generic/TextField";
import DateField from "../generic/DateField";
import HiddenField from "../generic/HiddenField";
import Button from "../generic/Button";
import CheckBoxField from "../generic/CheckBoxField";
import {useNavigate} from "react-router-dom";
import userStore from "../../stores/userStore";
import userApi from "../../api/UserApi";

type LoginContentProps = object

const LoginContent: FC<LoginContentProps> = (
    ) => {
    const blockName = "loginContent"

    const navigate = useNavigate()

    const redirectToRegistration = () => {
        navigate('/registration')
    }

    const loginUser = (e: React.MouseEvent) => {
        e.preventDefault()
        setTimeout(() => navigate('/'), 1000)
    }

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__header`]}>
                <img src={Logo} alt={"logo"} className={styles.default[`${blockName}__logo`]} />
                <div className={styles.default[`${blockName}__header-text`]}>{"CREATOR"}</div>
            </div>
            <form method={"post"} className={styles.default[`${blockName}__container`]}>
                <TextField placeholder={''} label={'Логин'} maxLength={255}
                           className={'small_width'} name={'first_name'} type={'text'} />
                <HiddenField placeholder={''} label={'Пароль'} maxLength={255}
                             className={'small_width'} name={'password1'} />
                <div className={styles.default[`${blockName}__checkBox-container`]}>
                    <CheckBoxField label={'Запомнить меня'} name={'remember'} className={'inline_width'}/>
                </div>
                <div className={styles.default[`${blockName}__footer`]}>
                    <Button type={"submit"} className={"submit"}
                            name={''} value={''} buttonContent={"ВОЙТИ"} action={loginUser} />
                </div>
            </form>
            <div className={styles.default[`${blockName}__button-container`]}>
                <div>{'Восстановить пароль'}</div>
                <div onClick={redirectToRegistration}>{'Зарегистрироваться'}</div>
            </div>
        </div>
    )
}

export default LoginContent
