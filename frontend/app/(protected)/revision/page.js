"use client";

import { useState, useEffect } from "react";

import {

    RevisionHeader,
    TopicInput,
    RecommendedTopics,
    QuestionCard,
    AnswerCard,
    EvaluationCard,
    AnalyticsCard,
    RecommendationCard,
    RevisionProgress,
    RevisionComplete

} from "@/components/revision";

import {

    generateRevision,
    evaluateRevision,
    getAnalytics,
    getRecommendation,
    getTopics

} from "@/services/revisionService";

import { Button } from "@/components/ui/button";

export default function RevisionPage() {

    const [topic, setTopic] =
        useState("");

    const [questions, setQuestions] =
        useState([]);

    const [currentQuestion, setCurrentQuestion] =
        useState(0);

    const [evaluation, setEvaluation] =
        useState(null);

    const [analytics, setAnalytics] =
        useState(null);

    const [recommendation, setRecommendation] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [completed, setCompleted] =
        useState(false);

    const [topics, setTopics] =
        useState([]);

    useEffect(() => {

        loadTopics();

    }, []);

    const loadTopics = async () => {

        try {

            const data = await getTopics();

            setTopics(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    const generateQuestions =
        async (

            selectedTopic = topic

        ) => {

            if (!selectedTopic.trim()) {

                return;

            }

            try {

                setLoading(true);

                const result =
                    await generateRevision(

                        selectedTopic

                    );

                setTopic(
                    selectedTopic
                );

                setQuestions(
                    result.questions
                );

                setCurrentQuestion(0);

                setCompleted(false);

                setEvaluation(null);

                setAnalytics(null);

                setRecommendation(null);

            }

            catch (error) {

                console.error(error);

            }

            finally {

                setLoading(false);

            }

        };

    const evaluateAnswer =
        async (payload) => {

            try {

                setLoading(true);

                const result =
                    await evaluateRevision(payload);

                setEvaluation(result);

                const analyticsResult =
                    await getAnalytics(topic);

                setAnalytics(
                    analyticsResult
                );

                const recommendationResult =
                    await getRecommendation(topic);

                setRecommendation(
                    recommendationResult
                );

            }

            catch (error) {

                console.error(error);

            }

            finally {

                setLoading(false);

            }

        };

    const nextQuestion = () => {

        if (

            currentQuestion <

            questions.length - 1

        ) {

            setCurrentQuestion(

                currentQuestion + 1

            );

            setEvaluation(null);

            setAnalytics(null);

            setRecommendation(null);

        }

        else {

            setCompleted(true);

        }

    };

    const handleTopicClick =
        async (

            selectedTopic

        ) => {

            await generateQuestions(

                selectedTopic

            );

        };


    if (completed) {

        return (

            <div
                className="
                    max-w-4xl
                    mx-auto
                    space-y-8
                "
            >

                <RevisionHeader />



                <RevisionComplete

                    analytics={analytics}

                    recommendation={recommendation}

                />

            </div>

        );

    }

    return (

        <div
            className="
                max-w-6xl
                mx-auto
                space-y-8
            "
        >

            <RevisionHeader />

            <RecommendedTopics

                topics={topics}

                onSelect={handleTopicClick}

            />

            <div
                className="
        flex
        items-center
        gap-4
    "
            >

                <div className="flex-1 border-t" />

                <span className="text-slate-500 text-sm">

                    OR

                </span>

                <div className="flex-1 border-t" />

            </div>

            <TopicInput

                topic={topic}

                setTopic={setTopic}

                onGenerate={generateQuestions}

                loading={loading}

            />

            {

                questions.length > 0 && (

                    <>
                        <RevisionProgress

                            current={currentQuestion}

                            total={questions.length}

                        />

                        <QuestionCard

                            index={currentQuestion}

                            question={
                                questions[currentQuestion]
                            }

                        />

                        {

                            !evaluation && (

                                <AnswerCard

                                    topic={topic}

                                    question={
                                        questions[currentQuestion].question
                                    }

                                    onEvaluate={
                                        evaluateAnswer
                                    }

                                    loading={loading}

                                />

                            )

                        }

                    </>

                )

            }

            <EvaluationCard

                evaluation={evaluation}

            />

            <div
                className="
                    grid
grid-cols-1
lg:grid-cols-2
gap-6
                "
            >

                <AnalyticsCard

                    analytics={analytics}

                />

                <RecommendationCard

                    recommendation={recommendation}

                />

            </div>

            {

                evaluation &&

                currentQuestion <

                questions.length - 1 && (

                    <Button

                        onClick={nextQuestion}

                        className="
                            bg-blue-600
                            text-white
                            px-6
                            py-3
                            rounded-xl
                        "

                    >

                        Next Question

                    </Button>

                )

            }



        </div>


    );

}