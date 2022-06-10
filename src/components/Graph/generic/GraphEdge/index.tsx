import React, {FC, useState} from 'react';
import cn from "classnames"
import * as styles from './style.module.scss'
import {Handle, Position, EdgeProps, getBezierPath, getEdgeCenter, updateEdge} from 'react-flow-renderer';
import EditIcon from '../../../../icons/edit.svg'
import DoneIcon from '../../../../icons/done.svg'
import AddIcon from '../../../../icons/add.svg'
import flowStore from "../../../../stores/flowStore";


const GraphEdge: FC<EdgeProps> = ({
                                      id,
                                      sourceX,
                                      sourceY,
                                      targetX,
                                      targetY,
                                      sourcePosition,
                                      targetPosition,
                                      selected,
                                      style = {},
                                      data,
                                      markerEnd,
                                  }) => {
    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });
    const [edgeCenterX, edgeCenterY] = getEdgeCenter({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    const blockName = 'edge'
    const [weight, setWeight] = useState(data.weight)
    const foreignObjectSize = 40

    const onEdgeClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        evt.stopPropagation();
        flowStore.removeEdge(id)

    }
    return (
        <>
            <path
                id={id}
                style={style}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
                onClick={() => {
                    setTimeout(() => {
                        data.weight = weight
                    }, 10000)

                }}
            />
            {selected
                ?
                <foreignObject
                    width={foreignObjectSize}
                    height={foreignObjectSize}
                    x={edgeCenterX - foreignObjectSize / 2}
                    y={edgeCenterY - foreignObjectSize / 2}
                    className={styles.default[blockName]}
                    requiredExtensions="http://www.w3.org/1999/xhtml"
                >
                    <body>
                    <button className={styles.default[`${blockName}__button`]}
                            onClick={(event) => onEdgeClick(event, id)}>
                        ×
                    </button>
                    <input type={'number'}
                           className={styles.default[`${blockName}__input`]}
                           defaultValue={weight}
                           min="0.0"
                           max="1.0"
                           onChange={(e) => {
                               if (e.target.value) {
                                   let number = Number(e.target.value)
                                   if (number < 0 || number > 1) {
                                       setWeight(1)
                                       e.target.value = '1'
                                   } else
                                       setWeight(e.target.value)
                               }
                           }}/>
                    </body>
                </foreignObject>
                :
                <text>
                    <textPath
                        href={`#${id}`}
                        style={{fontSize: '12px'}}
                        startOffset="50%"
                        textAnchor="middle"
                    >
                        {weight}
                    </textPath>
                </text>}

        </>
    );
}

export default GraphEdge

