import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import Header from "../Header";
import Button from "../generic/Button";
import TextField from "../generic/TextField";
import HiddenField from "../generic/HiddenField";
import DateField from "../generic/DateField";
import userStore from "../../stores/userStore";

type SettingsProps = object

const Settings: FC<SettingsProps> = () => {
    const blockName = "settings"

    const saveUserInformation = () => {

    }
    const saveTelegramInformation = () => {

    }

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__user-settings`]}>
                <div className={styles.default[`${blockName}__header-title`]}>{'Личная информация'}</div>
                <form method={'post'} className={styles.default[`${blockName}__content`]}>
                    <TextField placeholder={''} label={'Имя'} maxLength={255}
                               className={'very_big_width'} type={'text'} name={'first_name'}
                               initialValue={userStore.firstName}/>
                    <TextField placeholder={''} label={'Фамилия'} maxLength={255}
                               className={'very_big_width'} type={'text'} name={'second_name'}
                               initialValue={userStore.secondName}/>
                    <TextField placeholder={''} label={'Email'} maxLength={255}
                               className={'very_big_width'} type={'email'} name={'email'}
                               initialValue={userStore.email}/>
                    <HiddenField placeholder={''} label={'ПАРОЛЬ'} maxLength={255}
                                 className={'big_width'} name={'password1'} isDisabled={true}/>
                    <DateField placeholder={''} label={'Дата рождения'}
                               className={'very_big_width'} name={'birth_date'} dateFormat={'dd.MM.yyyy'}
                               initialValue={userStore.birthDate}/>
                    <div className={styles.default[`${blockName}__footer`]}>
                        <Button type={"submit"}
                                className={"submit-light"}
                                name={''} value={''}
                                buttonContent={"СОХРАНИТЬ"}
                                action={saveUserInformation}/>
                    </div>
                </form>
            </div>
            <div className={styles.default[`${blockName}__telegram-settings`]}>
                <div className={styles.default[`${blockName}__header-title`]}>{'Telegram'}</div>
                <form method={'post'} className={styles.default[`${blockName}__content`]}>
                    <TextField placeholder={''} label={'Username'} maxLength={255}
                               className={'big_width'}
                               type={'text'}
                               name={'username'}
                               autoComplete={false}
                               initialValue={userStore.username}/>
                    <HiddenField placeholder={''} label={'Telegram token'} maxLength={255}
                                 className={'full-width'}
                                 name={'token'}
                                 isDisabled={false}
                                 autoComplete={false}
                                 initialValue={userStore.telegramToken}/>
                    <div className={styles.default[`${blockName}__footer`]}>
                        <Button type={"submit"}
                                className={"submit-light"}
                                name={''} value={''}
                                buttonContent={"СОХРАНИТЬ"}
                                action={saveTelegramInformation}/>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Settings
