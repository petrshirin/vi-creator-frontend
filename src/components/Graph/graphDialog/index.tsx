import React, {FC, useState} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import {useNavigate} from "react-router-dom";
import flowStore from "../../../stores/flowStore";
import dialogStore from "../../../stores/dialogStore";import {Node} from "react-flow-renderer";
import ReloadIcon from '../../../icons/reload.svg'
import SendIcon from '../../../icons/send.svg'


export type GraphDialogProps = object

const GraphDialog: FC<GraphDialogProps> = (
    ) => {
    const blockName = "graphDialog"
    const [renderedNodes, setRenderedNodes] = useState<Node[]>([])
    const [lastNode, setLastNode] = useState<Node>()
    const [isShowVariants, setIsShowVariants] = useState(false)

    const sendMessage = (node: Node) => {
        setRenderedNodes(renderedNodes.concat([node]))
        let data = [node];

        const findRandomAnswerPath = (answers: Node[]) => {
            // TODO: Сделать рандомный выбор
            if (!answers.length)
                return
            setLastNode(answers[0])
            data.push(answers[0])
            findRandomAnswerPath(dialogStore.findAllAnswers(answers[0], 'botnode'))
        }

        findRandomAnswerPath(dialogStore.findAllAnswers(node, 'botnode'))
        setRenderedNodes(renderedNodes.concat(data))
        setIsShowVariants(false)

    }

    const renderVariants = () => {
        return dialogStore.findAllAnswers(lastNode, 'usernode').map((node) => (
            <div className={styles.default[`${blockName}__variant-item`]} onClick={() => {
                sendMessage(flowStore.getNode(node.id ? node.id : null))
            }}>
                {node.data.text}
            </div>
        ))
    }

    const clearDialog = () => {
        setRenderedNodes([])
        setLastNode(undefined)
        setIsShowVariants(false)
    }


    return (
        <div className={styles.default[blockName]}>
            <div className={styles.default[`${blockName}__header`]}>
                <img alt={'reload-dialog'} src={ReloadIcon} onClick={() => clearDialog()}/>
            </div>
            <div className={styles.default[`${blockName}__message-container`]}
                 onClick={() => setIsShowVariants(false)}>
                {renderedNodes.map((renderedNode, index) => {
                    if (renderedNode.type === 'botnode' && renderedNode.data.emotion) {
                        return (
                            <div className={styles.default[`${blockName}__message-with-emotion`]}>
                                <img src={renderedNode.data.emotion?.src || ''} alt={'emotion'}/>
                                <div className={cn(styles.default[`${blockName}__message`],
                                    styles.default[`${blockName}__bot`])}>
                                    {renderedNode.data.text}
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className={styles.default[`${blockName}__message-row-${renderedNode.type}`]}>
                                <div className={cn(
                                    styles.default[`${blockName}__message`],
                                    renderedNode.type == 'botnode' ?
                                        styles.default[`${blockName}__bot`] :
                                        styles.default[`${blockName}__user`]
                                )}>
                                    {renderedNode.data.text}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={styles.default[`${blockName}__send-container`]}>
                <div className={cn(styles.default[`${blockName}__variants-container`],
                    !isShowVariants ? styles.default['hidden'] : '')}>
                    {isShowVariants ? renderVariants() : null}
                </div>
                <input type={"text"} className={styles.default[`${blockName}__input`]}
                       onClick={() => {
                           setIsShowVariants(true)
                       }}
                       />
                <img className={styles.default[`${blockName}__button`]}
                     alt={'send'}
                     src={SendIcon}
                     />
            </div>
        </div>
    )
}

export default GraphDialog
