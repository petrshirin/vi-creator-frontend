import React, {FC, useEffect, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import openEye from '../../../icons/openEye.svg';
import closedEye from '../../../icons/closedEye.svg';


type HiddenFieldProps = {
    placeholder: string
    label: string
    maxLength: number
    className: string,
    name: string,
    isDisabled?: boolean
    autoComplete?: boolean,
    initialValue?: string
}

const HiddenField: FC<HiddenFieldProps> = (
    {
        placeholder,
        label,
        maxLength,
        className,
        name,
        isDisabled= false,
        autoComplete = true,
        initialValue = ''
    }) => {
    const blockName = "hiddenField"
    const [isVisible, setIsVisible] = useState(false)
    const [value, setValue] = useState(initialValue)

    return (
        <div className={cn(styles.default[`${blockName}__container`], styles.default[className])}>
            <label className={styles.default[`${blockName}__label`]}>
                {label}
            </label>
            {isVisible ?
                <input type={"text"} className={styles.default[`${blockName}__field`]}
                       placeholder={placeholder} value={value} maxLength={maxLength}
                       onChange={e => setValue(e.target.value)} name={name} disabled={isDisabled}
                       autoComplete={autoComplete ? 'on' : 'new-password'}/>
                :
                <input type={"password"} className={styles.default[`${blockName}__field`]}
                       placeholder={placeholder} value={value} maxLength={maxLength}
                       onChange={e => setValue(e.target.value)} name={name} disabled={isDisabled}
                       autoComplete={autoComplete ? 'on' : 'new-password'}/>
            }
            {isDisabled ?
                <div className={styles.default[`${blockName}__change-btn`]}>{'Изменить'}</div> :
                <div></div>}

            {isVisible ?
                <img src={openEye} alt={"Показать"} className={styles.default[`${blockName}__icon`]}
                     onClick={() => {setIsVisible(!isVisible)}}/>
                :
                <img src={closedEye} alt={"Показать"} className={styles.default[`${blockName}__icon`]}
                     onClick={() => {setIsVisible(!isVisible)}}/>
            }
        </div>
    )
}

export default HiddenField
