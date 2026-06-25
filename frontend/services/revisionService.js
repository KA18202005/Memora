import api from "./api";

export const getRevision = async (topic) => {

    const response = await api.get(
        `/revision/recommendation/${topic}`
    );

    return response.data;
};