import api from "./api";

export const globalSearch = async (query) => {

    const response = await api.get(

        `/search/global?q=${encodeURIComponent(query)}`

    );

    return response.data;

};