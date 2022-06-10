import { observable} from 'mobx';
import {ReactFlowInstance} from "react-flow-renderer/dist/esm/types/instance";
import {Node} from "react-flow-renderer";

class FlowStore {
    @observable reactFlowInstance: ReactFlowInstance | null;

    constructor() {
        this.reactFlowInstance = null;
    }

    initFlow(flowInstance: ReactFlowInstance) {
        this.reactFlowInstance = flowInstance
    }

    removeEdge(id: string) {
        if (this.reactFlowInstance) {
            this.reactFlowInstance.setEdges(this.reactFlowInstance.getEdges().filter((edge) => {
                return edge.id !== id
            }))
        }
    }

    removeNode(id: string) {
        if (this.reactFlowInstance) {
            this.reactFlowInstance.setEdges(this.reactFlowInstance.getEdges().filter((edge) => {
                return edge.id.match(RegExp(`reactflow__edge-${id}-.`, 'g')) ||
                    edge.id.match(RegExp(`reactflow__edge-.-${id}`, 'g'))
            }))
            this.reactFlowInstance.setNodes(this.reactFlowInstance.getNodes().filter((item) => {
                return item.id !== id
            }))
        }
    }

    getNode(nodeId: string | null) {
        const voidNode: Node = {
            position: {
                x: 0,
                y: 0
            },
            data: undefined,
            dragging: false,
            selected: false,
            zIndex: 0,
            id: '',
            type: ''

        }
        if (this.reactFlowInstance) {
            if (!nodeId) {
                let allNodes = this.reactFlowInstance.getNodes();
                return allNodes.length ? allNodes[0] : voidNode
            }

            return this.reactFlowInstance.getNode(nodeId) || voidNode
        }
        return voidNode
    }
}

const flowStore = new FlowStore();

export default flowStore;
export { FlowStore };
