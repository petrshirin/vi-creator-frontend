import React, {FC, memo, useState} from 'react';
import cn from "classnames"
import * as styles from './style.module.scss'
import { Handle, Position } from 'react-flow-renderer';
import EditIcon from '../../../../icons/edit.svg'
import DoneIcon from '../../../../icons/done.svg'
import AddIcon from '../../../../icons/add.svg'
import flowStore from "../../../../stores/flowStore";

import SadEmotion from '../../../../defaultEmotion/sad.png'
import FunEmotion from '../../../../defaultEmotion/fun.png'

type BotNodeProps = {
    id: string
    data: {
        text: string
        emotion: {
            src: string
            name: string
            id: number
        }
    }
    isConnectable: boolean
}


const BotNode: FC<BotNodeProps> = ({ id, data, isConnectable }) => {
    const blockName = "botNode"

    const [isEditable, setIsEditable] = useState(false)
    const [emotion, setEmotion] = useState(data.emotion)
    const [isSetEmotion, setIsSetEmotion] = useState(false)
    const [emotions, setEmotions] = useState([
        {
            id: 1,
            name: 'Смех',
            src: FunEmotion
        },
        {
            id: 2,
            name: 'Грусть',
            src: SadEmotion
        }
    ])

    const [text, setText] = useState(data.text)

    const onNodeDoubleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.stopPropagation();
    }

    const onRemoveClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        evt.stopPropagation();
        flowStore.removeNode(id)
    }

    return (
        <div className={styles.default[blockName]}
             onDoubleClick={(e) => onNodeDoubleClick(e)}>
            <button className={cn(styles.default[`${blockName}__button`], isEditable ? '' : styles.default['hidden'])}
                    onClick={(event) => onRemoveClick(event, id)}>
                ×
            </button>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555', width: '15px', height: '15px' }}
                isConnectable={isConnectable}
            />
            <div className={styles.default[`${blockName}__text-container`]}>
                <div className={cn(styles.default[`${blockName}__text`], isEditable ? styles.default['hidden'] : '')}>
                    {text}
                </div>
                <input
                    className={styles.default[`${blockName}__text-input`]}
                    type={isEditable ? 'text' : 'hidden'}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    defaultValue={text}
                />
                <img className={cn(styles.default[`${blockName}__icon`], isEditable ? styles.default['hidden'] : '')}
                     src={EditIcon}
                     alt={'edit'}
                     onClick={() => {setIsEditable(!isEditable)}}/>
                <img className={cn(styles.default[`${blockName}__icon`], !isEditable ? styles.default['hidden'] : '')}
                     src={DoneIcon}
                     alt={'done'}
                     onClick={() => {
                         setIsEditable(!isEditable)
                         data.text = text
                     }}/>
            </div>
            {isSetEmotion ?
                <div className={styles.default[`${blockName}__emotion-container`]}>
                    <select onChange={(e) => {
                        setIsSetEmotion(false)
                        let selectedEmotion = emotions.filter((item) => e.target.value === String(item.id))

                        if (selectedEmotion) {
                            setEmotion(selectedEmotion[0])
                            data.emotion = selectedEmotion[0]
                        }

                    }}>
                        {emotions.map((item) =>
                            <option value={item.id} selected={emotion && emotion.id === item.id}>{item.name}</option>
                        )}
                    </select>
                </div>
                : emotion ?
                    <div className={styles.default[`${blockName}__emotion-container`]}
                         onClick={() => {
                             setIsSetEmotion(true)
                         }}>
                    <span className={styles.default[`${blockName}__emotion-container__text`]}>
                        {emotion.name}
                    </span>
                    </div>
                    :
                    <div className={styles.default[`${blockName}__emotion-container`]}
                         onClick={() => {
                             setIsSetEmotion(true)
                         }}>
                        <img className={styles.default[`${blockName}__icon`]}
                             src={AddIcon} alt={'add'}/>
                        <span className={styles.default[`${blockName}__emotion-container__text`]}
                              onClick={() => {
                                  setIsSetEmotion(true)
                              }}>
                        Добавить эмоцию
                    </span>
                    </div>
            }

            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#555', width: '15px', height: '15px' }}
                isConnectable={isConnectable}
            />
        </div>
    )
}

export default memo(BotNode)

