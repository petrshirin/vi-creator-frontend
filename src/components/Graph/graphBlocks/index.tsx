import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import GraphMark from "../GraphMark";

type GraphBlocksProps = object


const GraphBlocks: FC<GraphBlocksProps> = (
    ) => {
    const blockName = "graphBlocks"
    const onDragStart = (event: { dataTransfer: { setData: (arg0: string, arg1: any) => void; effectAllowed: string; }; }, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__mark-container`]}>
                <GraphMark />
            </div>
            <aside className={styles.default[`${blockName}__node-container`]}>
                <div className={cn(styles.default['node'], styles.default['user-node'])}
                     onDragStart={(event) => onDragStart(event, 'usernode')}
                     draggable>
                    Фраза человека
                </div>
                <div className={cn(styles.default['node'], styles.default['bot-node'])}
                     onDragStart={(event) => onDragStart(event, 'botnode')}
                     draggable>
                    Фраза бота
                </div>
            </aside>
        </div>
    )
}

export default GraphBlocks
