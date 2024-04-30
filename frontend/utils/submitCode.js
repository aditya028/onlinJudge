import axios from "axios";

export default async function submitCode(code, problemID , language , title) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `http://localhost:8080/api/submit/${problemID}`,
      {
        code: code,
        language: language,
        title: title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}
