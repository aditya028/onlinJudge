import axios from "axios";

export const fetchSubmissions = async ( isAccepted = "" , problemID = "") => {
  const token = localStorage.getItem("token");
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/submission?isAccepted=${isAccepted}&problemID=${problemID}`
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
