import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import Logo from "../../icons/logo.svg"
import TextField from "../generic/TextField";
import DateField from "../generic/DateField";
import HiddenField from "../generic/HiddenField";
import Button from "../generic/Button";
import {useNavigate} from "react-router-dom";

type RegistrationContentProps = object

const RegistrationContent: FC<RegistrationContentProps> = (
    ) => {
    const blockName = "registrationContent"
    const navigate = useNavigate()

    const redirectToLogin = () => {
        navigate('/login')
    }

    const registerUser = () => {

    }

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__header`]}>
                <img src={Logo} alt={"logo"} className={styles.default[`${blockName}__logo`]} />
                <div className={styles.default[`${blockName}__header-text`]}>{"РЕГИСТРАЦИЯ"}</div>
            </div>
            <form method={"post"} className={styles.default[`${blockName}__container`]}>
                <TextField placeholder={''} label={'ИМЯ'} maxLength={255}
                           className={'big_width'} name={'first_name'} type={'text'} />
                <TextField placeholder={''} label={'ФАМИЛИЯ'} maxLength={255}
                           className={'big_width'} name={'second_name'} type={'text'} />
                <DateField placeholder={''} label={'ГОД РОЖДЕНИЯ'}
                           className={'big_width'} name={'birth_date'} dateFormat={'dd.MM.yyyy'} />
                <TextField placeholder={''} label={'EMAIL'} maxLength={255}
                           className={'big_width'} name={'email'} type={'email'} />
                <HiddenField placeholder={''} label={'ПАРОЛЬ'} maxLength={255}
                             className={'big_width'} name={'password1'} />
                <HiddenField placeholder={''} label={'ПОДТВЕРЖДЕНИЕ ПАРОЛЯ'} maxLength={255}
                             className={'big_width'} name={'password2'} />
                <div className={styles.default[`${blockName}__footer`]}>
                    <Button type={"submit"} className={"submit"}
                            name={''} value={''} buttonContent={"ЗАРЕГИСТРИРОВАТЬСЯ"} action={registerUser}/>
                    <Button type={"button"} className={"simple"}
                            name={''} value={''} buttonContent={"ОТМЕНА"} action={redirectToLogin} />
                </div>
            </form>
        </div>
    )
}

export default RegistrationContent
