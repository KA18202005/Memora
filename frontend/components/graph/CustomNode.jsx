"use client";

import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {

    return (

        <>

            <Handle
                type="target"
                position={Position.Left}
            />

            <div
                className="
                    px-5
                    py-3
                    rounded-xl
                    border
                    bg-background
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-300
                    font-medium
                    text-slate-700
                    min-w-35
                    text-center
                "
            >

                {data.label}

            </div>

            <Handle
                type="source"
                position={Position.Right}
            />

        </>

    );

}