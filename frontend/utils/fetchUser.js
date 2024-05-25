import axios from "axios";

export default async function fetchUser() {
  const token = localStorage.getItem("token");

  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"/api/myaccount", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}
