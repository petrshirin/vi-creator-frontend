import React, {FC, memo, useState} from 'react';
import cn from "classnames"
import * as styles from './style.module.scss'
import { Handle, Position } from 'react-flow-renderer';
import EditIcon from '../../../../icons/edit.svg'
import DoneIcon from '../../../../icons/done.svg'

type UserNodeProps = {
    data: {
        text: string
    }
    isConnectable: boolean
}


const UserNode: FC<UserNodeProps> = ({ data, isConnectable }) => {
    const blockName = "userNode"
    const [isEditable, setIsEditable] = useState(false)
    const [text, setText] = useState(data.text)
    return (
        <div className={styles.default[blockName]}>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555', width: '15px', height: '15px' }}
                isConnectable={isConnectable}
            />
            <div className={cn(styles.default[`${blockName}__text`], isEditable ? styles.default['hidden'] : '')}>
                {data.text}
            </div>
            <input
                className={styles.default[`${blockName}__text-input`]}
                type={isEditable ? 'text' : 'hidden'}
                onChange={(e) => {
                    setText(e.target.value)
                }}
                defaultValue={data.text}
            />
            <img className={cn(styles.default[`${blockName}__icon`],
                isEditable ? styles.default['hidden'] : '')}
                 src={EditIcon}
                 alt={'edit'}
                 onClick={() => {setIsEditable(!isEditable)}}/>
            <img className={cn(styles.default[`${blockName}__icon`],
                !isEditable ? styles.default['hidden'] : '')}
                 src={DoneIcon}
                 alt={'done'}
                 onClick={() => {
                     setIsEditable(!isEditable)
                     data.text = text
                 }}/>
            <Handle
                type="source"
                position={Position.Right}
                style={{ background: '#555', width: '15px', height: '15px' }}
                isConnectable={isConnectable}
            />
        </div>
    )
}

export default memo(UserNode)

