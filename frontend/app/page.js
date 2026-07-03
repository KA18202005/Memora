"use client";

import Link from "next/link";

import {

    BrainCircuit,

    FileText,

    MessageSquare,

    Network,

    BookOpen,

    BarChart3,

    ArrowRight,

    Sparkles

} from "lucide-react";

export default function Home() {

    const features = [

        {
            title: "Smart Document Processing",
            icon: FileText,
            description:
                "Upload PDFs and automatically extract structured knowledge."
        },

        {
            title: "AI Chat",
            icon: MessageSquare,
            description:
                "Ask questions and receive contextual answers using RAG."
        },

        {
            title: "Knowledge Graph",
            icon: Network,
            description:
                "Visualize how concepts are connected across your documents."
        },

        {
            title: "Revision Engine",
            icon: BrainCircuit,
            description:
                "Generate AI-powered revision questions and evaluate answers."
        },

        {
            title: "Topic Explorer",
            icon: BookOpen,
            description:
                "Browse every extracted topic and track your learning."
        },

        {
            title: "Retention Analytics",
            icon: BarChart3,
            description:
                "Understand weak areas and improve long-term retention."
        }

    ];

    return (

        <main>

            {/* HERO */}

            <section
                className="
                    min-h-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                    bg-linear-to-br
                    from-violet-50
                    via-background
                    to-blue-50
                    text-center
                    px-6
                "
            >

                <div
                    className="
                        w-24
                        h-24
                        rounded-3xl
                        bg-background
                        flex
                        items-center
                        justify-center
                        mb-8
                    "
                >

                    <BrainCircuit

                        size={50}

                        className="text-violet-600"

                    />

                </div>

                <h1
                    className="
                        text-6xl
                        md:text-7xl
                        font-black
                    "
                >

                    Memora

                </h1>

                <p
                    className="
                        mt-6
                        text-2xl
                        font-medium
                        text-slate-700
                    "
                >

                    Your AI-Powered Second Brain

                </p>

                <p
                    className="
                        mt-6
                        max-w-3xl
                        text-slate-500
                        text-lg
                        leading-8
                    "
                >

                    Upload documents, chat with your knowledge,
                    visualize relationships, revise intelligently,
                    and track your learning journey with AI.

                </p>

                <div
                    className="
                        mt-10
                        flex
                        flex-wrap
                        gap-5
                        justify-center
                    "
                >

                    <Link href="/signup">

                        <button
                            className="
                                bg-violet-600
                                hover:bg-violet-700
                                text-white
                                px-8
                                py-4
                                rounded-2xl
                                flex
                                items-center
                                gap-2
                                transition
                            "
                        >

                            Get Started

                            <ArrowRight size={18}/>

                        </button>

                    </Link>

                    <Link href="/login">

                        <button
                            className="
                                border
                                px-8
                                py-4
                                rounded-2xl
                                hover:bg-accent
                                hover:text-accent-foreground
                                transition
                            "
                        >

                            Login

                        </button>

                    </Link>

                </div>

            </section>

            {/* FEATURES */}

            <section
                className="
                    max-w-7xl
                    mx-auto
                    py-28
                    px-6
                "
            >

                <div className="text-center">

                    <Sparkles
                        className="mx-auto text-violet-600"
                    />

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mt-5
                        "
                    >

                        Everything You Need To Learn Better

                    </h2>

                </div>

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                        mt-16
                    "
                >

                    {

                        features.map(

                            (feature,index)=>{

                                const Icon =
                                    feature.icon;

                                return(

                                    <div

                                        key={index}

                                        className="
                                            rounded-3xl
                                            border
                                            p-8
                                            hover:shadow-xl
                                            transition
                                        "

                                    >

                                        <Icon
                                            size={36}
                                            className="text-violet-600"
                                        />

                                        <h3
                                            className="
                                                text-xl
                                                font-bold
                                                mt-6
                                            "
                                        >

                                            {feature.title}

                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                text-slate-500
                                                leading-7
                                            "
                                        >

                                            {feature.description}

                                        </p>

                                    </div>

                                )

                            }

                        )

                    }

                </div>

            </section>

            {/* HOW IT WORKS */}

            <section
                className="
                    bg-background
                    py-28
                "
            >

                <h2
                    className="
                        text-center
                        text-4xl
                        font-bold
                    "
                >

                    How Memora Works

                </h2>

                <div
                    className="
                        max-w-6xl
                        mx-auto
                        mt-16
                        grid
                        md:grid-cols-6
                        gap-6
                        text-center
                        px-6
                    "
                >

                    {

                        [

                            "Upload",

                            "Extract",

                            "Knowledge Graph",

                            "AI Chat",

                            "Revision",

                            "Retention"

                        ].map(

                            (step,index)=>(

                                <div

                                    key={index}

                                    className="
                                        rounded-2xl
                                        bg-background
                                        p-6
                                        shadow
                                    "

                                >

                                    <div
                                        className="
                                            text-violet-600
                                            text-3xl
                                            font-bold
                                        "
                                    >

                                        {index+1}

                                    </div>

                                    <p
                                        className="
                                            mt-4
                                            font-semibold
                                        "
                                    >

                                        {step}

                                    </p>

                                </div>

                            )

                        )

                    }

                </div>

            </section>

            {/* CTA */}

            <section
                className="
                    py-28
                    text-center
                    px-6
                "
            >

                <h2
                    className="
                        text-5xl
                        font-bold
                    "
                >

                    Build Your Second Brain Today

                </h2>

                <p
                    className="
                        mt-6
                        text-slate-500
                        text-lg
                    "
                >

                    Learn faster, remember longer, and connect knowledge with AI.

                </p>

                <Link href="/signup">

                    <button
                        className="
                            mt-10
                            bg-violet-600
                            hover:bg-violet-700
                            text-white
                            px-10
                            py-4
                            rounded-2xl
                            transition
                        "
                    >

                        Start Learning

                    </button>

                </Link>

            </section>

        </main>

    );

}