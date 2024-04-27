import axios from "axios";

export default async function signIN(params) {
  try {
    const response = await axios.post("http://localhost:8080/api/signin", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}
