"use client";

import { Badge } from "@/components/ui/badge";

export default function StatusBadge({

    value

}) {

    let color =
        "bg-blue-500";

    if (
        value === "LOW"
    )
        color = "bg-green-500";

    if (
        value === "MEDIUM"
    )
        color = "bg-yellow-500";

    if (
        value === "HIGH"
    )
        color = "bg-orange-500";

    if (
        value === "CRITICAL"
    )
        color = "bg-red-500";

    return (

        <Badge
            className={color}
        >

            {value}

        </Badge>

    );

}