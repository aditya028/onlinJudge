import axios from "axios";


export default async function fetchProblems() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/api/problems");
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}

export async function fetchProblemDescription(id) {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/api/problem/" + id);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}

