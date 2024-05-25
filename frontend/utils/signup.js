import axios from "axios";

export default async function signUP(params) {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/api/signup", params, {
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
