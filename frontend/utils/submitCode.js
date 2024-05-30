import axios from "axios";

export default async function submitCode(
  code,
  problemID,
  language,
  title,
  type,
  difficulty
) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/submit/${problemID}`,
      {
        code: code,
        language: language,
        title: title,
        type: type,
        difficulty: difficulty,
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
