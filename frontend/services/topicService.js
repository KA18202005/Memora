import api from "./api";

export const getTopic = async (topic) => {

    const response = await api.get(

        `/revision/topic/${encodeURIComponent(topic)}`

    );

    return response.data;

};