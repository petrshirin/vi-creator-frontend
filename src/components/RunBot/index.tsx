import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import RunBotIcon from '../../icons/runBot.svg'
import StopBotIcon from '../../icons/stopBot.svg'
import ReloadBotIcon from '../../icons/reloadBot.svg'


type RunBotProps = object
type BotInfoTypes = {
    name: string
    username: string
    isRunning: string
}

const RunBot: FC<RunBotProps> = () => {
    const blockName = "runBot"

    const [availableTime, setAvailableTime] = useState('54:45')
    const [botInfo, setBotInfo] = useState({
        name: 'ViCreator',
        username: 'ViCreatorBot'
    })

    const [isRun, setIsRun] = useState(false)

    const runBot = () => {
        if (!isRun)
        setIsRun(true)
    }
    const stopBot = () => {
        if (isRun)
            setIsRun(false)
    }

    const reloadBot = () => {
        if (isRun) {
            setIsRun(false)
            //TODO: добавить запрос на перезапуск
            setTimeout(() => setIsRun(true), 2000)
        }
    }

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__action-buttons-container`]}>
                <img src={RunBotIcon} alt={'run'}
                     className={isRun ? styles.default['disabled'] : ''}
                     onClick={() => runBot()}/>
                <img src={StopBotIcon} alt={'stop'}
                     className={!isRun ? styles.default['disabled'] : ''}
                     onClick={() => stopBot()}/>
                <img src={ReloadBotIcon} alt={'reload'}
                     className={!isRun ? styles.default['disabled'] : ''}
                     onClick={() => reloadBot()}/>
            </div>
            <div className={styles.default[`${blockName}__load-file`]}>

            </div>
            <div className={styles.default[`${blockName}__time-container`]}>
                <div className={styles.default[`${blockName}__time-title`]}>Доступное время для работы:</div>
                <div className={styles.default[`${blockName}__time-value`]}>{availableTime}</div>
            </div>
            <a className={styles.default[`${blockName}__bot-url`]}
               target={'_blank'}
               href={`https://t.me/${botInfo.username}`}>
                Переход в чат с ботом
            </a>
            <div className={styles.default[`${blockName}__console-title`]}></div>
            <div className={styles.default[`${blockName}__console-output`]}>

            </div>
        </div>
    )
}

export default RunBot
