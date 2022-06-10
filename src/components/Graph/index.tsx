import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import LeftBar from "../LeftBar";
import LeftBarItem from "../LeftBar/leftBarItem";
import GraphIcon from '../../icons/graph.svg'
import GraphBlocks from "./graphBlocks";
import GraphFlow from "./GraphFlow";
import GraphDialog from "./graphDialog";

type GraphProps = object

type GraphList = {
    id: number
    title: string
}

const Graph: FC<GraphProps> = (
    ) => {
    const blockName = "graph"

    const [graphList, setGraphList] = useState(Array<GraphList>({
        id: 1,
        title: 'Граф 1'
    },
        {
            id: 2,
            title: 'Граф 2'
        },
        {
            id: 3,
            title: 'Граф 3'
        }))
    const [currentGraph, setCurrentGraph] = useState(0)


    return (
        <div className={styles.default[blockName]}>
            <LeftBar>
                {graphList.map((item) => (
                    <LeftBarItem
                        number={item.id} title={item.title}
                        icon={GraphIcon} action={() => {setCurrentGraph(item.id)}} />
                ))}
            </LeftBar>
            <div className={styles.default[`${blockName}__content`]}>
                <div className={styles.default[`${blockName}__graph-editor`]}>
                    <div className={styles.default[`${blockName}__graph-flow`]}>

                    </div>
                    <div className={styles.default[`${blockName}__graph-settings`]}>
                        <GraphFlow />
                    </div>
                </div>
                <div className={styles.default[`${blockName}__emotion-editor`]}>
                    <GraphDialog />
                </div>

            </div>
        </div>
    )
}

export default Graph
