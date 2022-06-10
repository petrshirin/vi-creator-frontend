import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import flowStore from "../../../stores/flowStore";

type GraphMarkProps = object

type MarksType = {
    depth?: number
    emotion?: number
    wordCount?: number
    totalMark?: number
}


const GraphMark: FC<GraphMarkProps> = (
    ) => {
    const blockName = "graphMark"
    const [marks, setMarks] = useState<MarksType>({})
    const checkGraph = () => {
        let nodes = flowStore.reactFlowInstance?.getNodes()
        let edges = flowStore.reactFlowInstance?.getEdges()
        setTimeout(() => {setMarks({
            depth: 3,
            emotion: 2,
            wordCount: 23,
            totalMark:  3.22 // 3 * 0.3 + 2 * 0.7 + 23 * 0.04
        })}, 1000)

    }

    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__header`]}>
                <div className={styles.default[`${blockName}__button`]}
                     onClick={() => checkGraph()}>
                    Проверить граф
                </div>
                <div className={styles.default[`${blockName}__title`]}>Оценка:</div>
            </div>
            <div className={styles.default[`${blockName}__container`]}>
                <div className={styles.default[`${blockName}__mark-col`]}>
                    <div className={styles.default[`${blockName}__mark-item`]}>
                        <div className={styles.default[`${blockName}__mark-title`]}>Глубина Графа:</div>
                        <div className={styles.default[`${blockName}__mark-value`]}>{marks.depth}</div>
                    </div>
                    <div className={styles.default[`${blockName}__mark-item`]}>
                        <div className={styles.default[`${blockName}__mark-title`]}>Подсчет эмоций:</div>
                        <div className={styles.default[`${blockName}__mark-value`]}>{marks.emotion}</div>
                    </div>
                </div>
                <div className={styles.default[`${blockName}__mark-col`]}>
                    <div className={styles.default[`${blockName}__mark-item`]}>
                        <div className={styles.default[`${blockName}__mark-title`]}>Подсчет словарного запаса:</div>
                        <div className={styles.default[`${blockName}__mark-value`]}>{marks.wordCount}</div>
                    </div>
                    <div className={styles.default[`${blockName}__mark-item`]}>
                        <div className={styles.default[`${blockName}__mark-title`]}>Итоговая оценка:</div>
                        <div className={styles.default[`${blockName}__mark-value`]}>{marks.totalMark}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphMark
