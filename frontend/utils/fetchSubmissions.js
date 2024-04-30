import axios from "axios";

export const fetchSubmissions = async ({ isAccepted, problemID }) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:8080/api/submission", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        isAccepted: isAccepted,
        problemID: problemID,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
