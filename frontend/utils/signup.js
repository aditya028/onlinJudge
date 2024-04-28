import axios from "axios";

export default async function signUP(params) {
  try {
    const response = await axios.post("http://localhost:8080/api/signup", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  } catch (error) {
    console.error(`Error: ${error}`);
    return error;
  }
}
