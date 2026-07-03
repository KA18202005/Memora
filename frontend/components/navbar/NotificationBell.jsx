"use client";

import {

    Bell

} from "lucide-react";

import {

    useEffect,

    useRef,

    useState

} from "react";

import {

    getNotifications

} from "@/services/notificationService";

import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {

    const [open, setOpen] =
        useState(false);

    const [data, setData] =
        useState(null);

    const wrapperRef =
        useRef(null);

    useEffect(() => {

        const handleClick = (

            event

        ) => {

            if (

                wrapperRef.current &&

                !wrapperRef.current.contains(

                    event.target

                )

            ) {

                setOpen(false);

            }

        };

        document.addEventListener(

            "mousedown",

            handleClick

        );

        return () =>

            document.removeEventListener(

                "mousedown",

                handleClick

            );

    }, []);

    const toggleDropdown = async () => {

        if (!open) {

            try {

                const result =

                    await getNotifications();

                setData(result);

            }

            catch (error) {

                console.error(error);

            }

        }

        setOpen(!open);

    };

    return (

        <div

            ref={wrapperRef}

            className="relative"

        >

            <button

                onClick={toggleDropdown}

                className="
w-11
h-11
rounded-full
bg-card
border
border-border
flex
items-center
justify-center
transition
hover:bg-accent
"

            >

                <Bell

                    size={20}

                    className="text-foreground"

                />

                {

                    data?.weak_topics?.length > 0 && (

                        <span
                            className="
                                absolute
                                -top-1
                                -right-1
                                w-5
                                h-5
                                rounded-full
                                bg-red-500
                                text-white
                                text-xs
                                flex
                                items-center
                                justify-center
                            "
                        >

                            {

                                Math.min(

                                    data.weak_topics.length,

                                    9

                                )

                            }

                        </span>

                    )

                }

            </button>

            {

                open &&

                <NotificationDropdown

                    data={data}

                />

            }

        </div>

    );

}