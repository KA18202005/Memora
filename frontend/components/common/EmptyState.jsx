"use client";

export default function EmptyState({

    icon: Icon,
    title,
    description

}) {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                py-16
                text-center
            "
        >

            {

                Icon &&

                <Icon
                    size={48}
                    className="
                        text-slate-400
                        mb-4
                    "
                />

            }

            <h3
                className="
                    text-xl
                    font-semibold
                "
            >
                {title}
            </h3>

            <p
                className="
                    text-slate-500
                    mt-2
                    max-w-sm
                "
            >
                {description}
            </p>

        </div>

    );

}