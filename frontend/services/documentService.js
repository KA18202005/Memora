import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export const uploadDocument =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await axios.post(
        `${API}/documents/upload`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };