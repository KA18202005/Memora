"use client";

import ReactFlow, {
    Background,
    Controls,
    MiniMap
} from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";

const nodeTypes = {
    custom: CustomNode
};

export default function GraphCanvas({
    
    nodes,
    
    edges,
    
    onNodeClick
    
}) {
    
    return (

        <div
            className="
                h-175
                rounded-2xl
                overflow-hidden
                border
                bg-background
            "
        >

            <ReactFlow

                nodeTypes={nodeTypes}

                nodes={nodes}

                edges={edges}

                fitView

                onNodeClick={onNodeClick}

            >

                <MiniMap />

                <Controls />

                <Background />

            </ReactFlow>

        </div>

    );

}