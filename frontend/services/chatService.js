import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export const askMemora =
  async (question) => {

    const response =
      await axios.post(
        `${API}/documents/ask`,
        {
          question
        }
      );

    return response.data;
  };