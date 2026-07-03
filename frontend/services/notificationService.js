import api from "./api";

export const getNotifications = async () => {

    const response = await api.get(
        "/dashboard/full"
    );

    return response.data;

};