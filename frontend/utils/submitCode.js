import axios from "axios";

export default async function submitCode(code, problemID) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `http://localhost:8080/api/submit/${problemID}`,
      {
        code: code,
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
