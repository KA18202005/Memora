import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export const getGraph = async () => {

  const response =
    await axios.get(
      `${API}/documents/graph/all`
    );

  return response.data;
};