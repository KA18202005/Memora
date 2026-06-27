"use client";

import { useEffect, useMemo, useState } from "react";

import {
    GraphHeader,
    GraphSearch,
    GraphCanvas,
    GraphSidebar,
    EmptyGraph
} from "@/components/graph";

import {
    getGraph
} from "@/services/graphService";

import {
    getLayoutedElements
} from "@/lib/graphLayout";

import GraphStats from "@/components/graph/GraphStats";
import GraphLegend from "@/components/graph/GraphLegend";

export default function GraphPage() {

    const [nodes, setNodes] =
        useState([]);

    const [edges, setEdges] =
        useState([]);

    const [selectedNode, setSelectedNode] =
        useState(null);

    const [search, setSearch] =
        useState("");

    useEffect(() => {

        loadGraph();

    }, []);

    const loadGraph = async () => {

        try {

            const data =
                await getGraph();

            const flowNodes =
                data.nodes.map((node) => ({

                    id: node.id,

                    position: {

                        x: Math.random() * 600,

                        y: Math.random() * 500

                    },
                    type: "custom",

                    data: {

                        label: node.id

                    }

                }));

            const flowEdges =
                data.edges.map((edge, index) => ({

                    id: `e${index}`,

                    source: edge.source,

                    target: edge.target,

                    animated: true,

                    style: {

                        strokeWidth: 2

                    }

                }));

            const layouted =
                getLayoutedElements(

                    flowNodes,

                    flowEdges

                );

            setNodes(layouted.nodes);

            setEdges(layouted.edges);

        }

        catch (error) {

            console.error(error);

        }

    };

    const filteredNodes =
        useMemo(() => {

            if (!search.trim()) {

                return nodes;

            }

            return nodes.filter((node) =>

                node.data.label

                    .toLowerCase()

                    .includes(

                        search.toLowerCase()

                    )

            );

        }, [nodes, search]);

    const filteredEdges = useMemo(() => {

        if (!search.trim()) {

            return edges;

        }

        const visibleIds = new Set(

            filteredNodes.map(node => node.id)

        );

        return edges.filter(

            edge =>

                visibleIds.has(edge.source) &&

                visibleIds.has(edge.target)

        );

    }, [edges, filteredNodes, search]);

    if (!nodes.length) {

        return (

            <div className="space-y-8">

                <GraphHeader />

                <EmptyGraph />

            </div>

        );

    }

    return (

        <div className="space-y-8">

            <GraphHeader />

            <GraphSearch

                search={search}

                setSearch={setSearch}

            />
            <GraphStats

                nodes={nodes}

                edges={edges}

            />
            <div
                className="
                    grid
                    xl:grid-cols-4
                    gap-6
                "
            >

                <div
                    className="
                        xl:col-span-3
                    "
                >

                    <GraphCanvas

                        nodes={filteredNodes}

                        edges={filteredEdges}

                        onNodeClick={(_, node) =>

                            setSelectedNode(node)

                        }

                    />

                </div>

                <div
                    className="
        space-y-6
    "
                >

                    <GraphSidebar

                        selectedNode={selectedNode}

                        edges={edges}

                    />

                    <GraphLegend />

                </div>

            </div>

        </div>

    );

}