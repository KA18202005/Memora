"use client";

export default function NotificationItem({

    icon,

    title,

    subtitle,

    color

}) {

    return (

        <div
            className="
                flex
                items-start
                gap-3
                px-4
                py-3
                border-b
                last:border-none
                transition-colors
        hover:bg-accent
        hover:text-accent-foreground
            "
        >

            <div
                className={`
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    ${color}
                `}
            >

                {icon}

            </div>

            <div className="flex-1">

                <h3
                    className="
                        font-medium
                        text-sm
                    "
                >

                    {title}

                </h3>

                <p
                    className="
                        text-xs
                        text-slate-500
                        mt-1
                    "
                >

                    {subtitle}

                </p>

            </div>

        </div>

    );

}