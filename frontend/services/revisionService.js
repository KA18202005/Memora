import api from "./api";

// Generate Revision Questions
export const generateRevision = async (topic) => {

    const response = await api.post(

        "/revision/generate",

        {
            topic
        }

    );

    return response.data;

};

// Evaluate Answer
export const evaluateRevision = async (data) => {

    const response = await api.post(

        "/revision/evaluate",

        data

    );

    return response.data;

};

// Topic Details
export const getTopicDetails = async (topic) => {

    const response = await api.get(

        `/revision/topic/${topic}`

    );

    return response.data;

};

// Retention Report
export const getRetention = async (topic) => {

    const response = await api.get(

        `/revision/retention/${topic}`

    );

    return response.data;

};

// Analytics
export const getAnalytics = async (topic) => {

    const response = await api.get(

        `/revision/analytics/${topic}`

    );

    return response.data;

};

// Recommendation
export const getRecommendation = async (topic) => {

    const response = await api.get(

        `/revision/recommendation/${topic}`

    );

    return response.data;

};

export const getTopics = async () => {

    const response = await api.get(
        "/revision/topics"
    );

    return response.data;

};