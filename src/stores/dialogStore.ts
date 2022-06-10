import {Node} from "react-flow-renderer";
import { observable} from 'mobx';
import {ReactFlowInstance} from "react-flow-renderer/dist/esm/types/instance";
import {FlowStore} from "./flowStore";

class DialogStore {
    @observable reactFlowInstance: ReactFlowInstance | null;

    constructor() {
        this.reactFlowInstance = null;
    }

    initStore(flowInstance: ReactFlowInstance) {
        this.reactFlowInstance = flowInstance
    }

    findAllAnswers(node: Node | undefined, nodeType: string) {
        if (!node)
            return this.reactFlowInstance?.getNodes().filter((node) => node.type == 'usernode') || []
        return this._findChildren(node, [], nodeType)
    }

    private _findChildren = (node: Node, children: Node[] = [], nodeType: string) => {
        this.reactFlowInstance?.getEdges().forEach((item) => {
            if (item.source == node.id) {
                const targetNode = this.reactFlowInstance?.getNode(item.target)
                if (!targetNode)
                    return
                if (targetNode?.type === nodeType) {
                    children.push(targetNode)
                    this._findChildren(targetNode, children, nodeType)
                }
            }
        })
        return children
    }

}




const dialogStore = new DialogStore();

export default dialogStore;
export { DialogStore };
