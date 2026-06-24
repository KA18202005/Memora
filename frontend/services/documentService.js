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

export const getDocuments =
    async () => {

        const response =
            await axios.get(
                `${API}/documents`
            );

        return response.data;
    };

export const getDocument =
  async (id) => {

    const response =
      await axios.get(
        `${API}/documents/${id}`
      );

    return response.data;
  };

export const getTopics = async (
  documentId
) => {

  const response =
    await axios.get(
      `${API}/documents/topics/${documentId}`
    );

  return response.data;
};