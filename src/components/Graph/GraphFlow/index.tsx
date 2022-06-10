import React, {FC, useRef, useCallback, useState, useMemo, useEffect} from "react"
import cn from "classnames"
import * as styles from './style.module.scss'
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Connection,
    Edge,
    MiniMap,
    MarkerType,
    Background
} from 'react-flow-renderer';
import GraphBlocks from "../graphBlocks";
import BotNode from "../generic/BotNode";
import UserNode from "../generic/UserNode";
import GraphEdge from "../generic/GraphEdge";
import {observer} from "mobx-react";
import flowStore from "../../../stores/flowStore";
import {ReactFlowInstance} from "react-flow-renderer/dist/esm/types/instance";
import dialogStore from "../../../stores/dialogStore";

type GraphFlowProps = object

const nodeTypes = {
    usernode: UserNode,
    botnode: BotNode,
}

const edgeTypes = {
    customedge: GraphEdge
}

const defaultEdgeOptions = {
    type: 'customedge',
    data: {weight: ''},
    markerEnd: { type: MarkerType.Arrow}
}

const GraphFlow: FC<GraphFlowProps> = observer(() => {
    const blockName = "graphFlow"

    const reactFlowWrapper = useRef<any>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

    const getId = () => {
        let nodes = reactFlowInstance.getNodes()
        if (!nodes.length)
            return '0'

        let lastId = nodes.sort((first: { id: string; }, second: { id: string; }) => {
            return Number(second.id) - Number(first.id)
        })[0].id
        return String(Number(lastId) + 1)
    }

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    const onDragOver = useCallback((event: { preventDefault: () => void; dataTransfer: { dropEffect: string; }; }) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: { preventDefault: () => void;
            dataTransfer: { getData: (arg0: string) => any; };
            clientX: number;
            clientY: number; }) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { text: type == 'botnode' ? 'Фраза бота' : 'Фраза человека' },
            };
            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );
    useEffect(() => {
        // @ts-ignore
        document.querySelector('.react-flow__attribution').style.display = 'none'
    });

    return (
        <div className={styles.default[blockName]}>
            <ReactFlowProvider>
                <div className={styles.default[`${blockName}__wrapper`]} ref={reactFlowWrapper}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={(value: ReactFlowInstance) => {
                            setReactFlowInstance(value)
                            flowStore.initFlow(value)
                            dialogStore.initStore(value)
                        }}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        defaultEdgeOptions={defaultEdgeOptions}
                        fitView
                    >
                        <Controls />
                        <MiniMap />
                        <Background />
                    </ReactFlow>
                </div>

                <GraphBlocks />
            </ReactFlowProvider>
        </div>
    )
})

export default GraphFlow
