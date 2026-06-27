"use client";

import { Card } from "@/components/ui/card";

import {

    Network,

    Link2

} from "lucide-react";

export default function GraphSidebar({

    selectedNode,

    edges

}) {

    if (!selectedNode) {

        return (

            <Card
                className="
                    rounded-2xl
                    p-6
                "
            >

                <div
                    className="
                        py-10
                        flex
                        flex-col
                        items-center
                        text-center
                    "
                >

                    <Network
                        size={55}
                        className="
                            text-slate-400
                            mb-4
                        "
                    />

                    <h2
                        className="
                            text-xl
                            font-semibold
                        "
                    >

                        Select a Node

                    </h2>

                    <p
                        className="
                            text-slate-500
                            mt-2
                        "
                    >

                        Click any concept to inspect its
                        relationships.

                    </p>

                </div>

            </Card>

        );

    }

    const connected =

        edges.filter(

            edge =>

                edge.source === selectedNode.id ||

                edge.target === selectedNode.id

        );

    return (

        <Card
            className="
                rounded-2xl
                p-6
            "
        >

            <h2
                className="
                    text-2xl
                    font-bold
                "
            >

                {selectedNode.data.label}

            </h2>

            <p
                className="
                    text-slate-500
                    mt-2
                "
            >

                Connected Concepts

            </p>

            <div
                className="
                    mt-6
                    space-y-3
                "
            >

                {

                    connected.length ?

                        connected.map((edge) => {

                            const label =

                                edge.source === selectedNode.id

                                    ?

                                    edge.target

                                    :

                                    edge.source;

                            return (

                                <div
                                    key={edge.id}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <Link2
                                        size={16}
                                    />

                                    {label}

                                </div>

                            );

                        })

                        :

                        <p
                            className="
                                text-slate-400
                            "
                        >

                            No connected nodes

                        </p>

                }

            </div>

        </Card>

    );

}