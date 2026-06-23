"use client";

import {
    useEffect,
    useState
} from "react";

import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

import {
    getGraph
} from "@/services/graphService";

import {
    getLayoutedElements
} from "@/lib/graphLayout";

import {
    Controls,
    MiniMap,
    Background,
} from "reactflow";

export default function GraphPage() {

    const [nodes, setNodes] =
        useState([]);

    const [edges, setEdges] =
        useState([]);

    useEffect(() => {

        loadGraph();

    }, []);

    const loadGraph = async () => {

        const documentId =
            "6a37949c8f64df5049aeeeb9";

        const data =
            await getGraph(
                documentId
            );

        console.log(data);

        const flowNodes =
            data.nodes.map(
                (node, index) => ({
                    id: node.id,

                    position: {
                        x:
                            Math.random() * 800,

                        y:
                            Math.random() * 600
                    },

                    data: {
                        label: node.id
                    }
                })
            );

        const flowEdges =
            data.edges.map(
                (
                    edge,
                    index
                ) => ({
                    id: `e${index}`,

                    source:
                        edge.source,

                    target:
                        edge.target
                })
            );

        const layouted =
            getLayoutedElements(
                flowNodes,
                flowEdges
            );

        setNodes(
            layouted.nodes
        );

        setEdges(
            layouted.edges
        );
    };

    return (
        <div
            className="
    w-full
    h-[85vh]
    bg-white
    rounded-xl
    shadow-lg
  "
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
            >

                <MiniMap />

                <Controls />

                <Background />

            </ReactFlow>
        </div>
    );
}