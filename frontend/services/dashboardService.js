import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export const getDashboard = async () => {
  const response =
    await axios.get(
      `${API}/dashboard/full`
    );

  return response.data;
};