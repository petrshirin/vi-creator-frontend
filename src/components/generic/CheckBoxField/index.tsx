import React, {FC, useContext, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import "react-datepicker/dist/react-datepicker.css";
import CheckBox from '../../../icons/checkBox.svg'
import CheckBoxDone from '../../../icons/checkBoxDone.svg'


type CheckBoxFieldProps = {
    label: string
    className: string
    name: string
}

const CheckBoxField: FC<CheckBoxFieldProps> = (
    {
        label,
        className,
        name,
    }) => {
    const blockName = "checkBoxField"
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className={cn(styles.default[`${blockName}__container`], styles.default[className])}>
            <div className={styles.default[`${blockName}__wrapper`]}>
                <input type={"hidden"} value={Number(isChecked)} name={name} />
                <div className={styles.default[`${blockName}__field`]}
                     onClick={e => setIsChecked(!isChecked)}>
                    {isChecked ? <img src={CheckBoxDone} alt={'done'} /> : <img src={CheckBox} alt={'none'} />}
                </div>
            </div>
            <label className={styles.default[`${blockName}__label`]}>
                {label}
            </label>
        </div>
    )
}

export default CheckBoxField
