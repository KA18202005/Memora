import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export const getTopic =
  async (topic) => {

    const response =
      await axios.get(
        `${API}/revision/recommendation/${topic}`
      );

    return response.data;
  };