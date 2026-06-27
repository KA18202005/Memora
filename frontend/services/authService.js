import axios from "axios";
import api from "./api";

const API = process.env.NEXT_PUBLIC_API_URL;

export const signup = async (data) => {

    const response = await axios.post(
        `${API}/auth/signup`,
        data
    );

    return response.data;

};

export const login = async (data) => {

    const response = await axios.post(
        `${API}/auth/login`,
        data
    );

    return response.data;

};

export const getProfile = async () => {

    const response = await api.get(
        "/auth/me"
    );

    return response.data;

};