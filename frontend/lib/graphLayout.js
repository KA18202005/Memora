import dagre from "dagre";

const dagreGraph = new dagre.graphlib.Graph();

dagreGraph.setDefaultEdgeLabel(
    () => ({})
);

export function getLayoutedElements(
    nodes,
    edges
) {

    dagreGraph.setGraph({
        rankdir: "LR",
    });

    nodes.forEach((node) => {
        dagreGraph.setNode(
            node.id,
            {
                width: 180,
                height: 50,
            }
        );
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(
            edge.source,
            edge.target
        );
    });

    dagre.layout(
        dagreGraph
    );

    const layoutedNodes =
        nodes.map((node) => {

            const nodeWithPosition =
                dagreGraph.node(
                    node.id
                );

            return {
                ...node,

                position: {
                    x:
                        nodeWithPosition.x -
                        90,

                    y:
                        nodeWithPosition.y -
                        25,
                },
            };
        });

    return {
        nodes: layoutedNodes,
        edges,
    };
}