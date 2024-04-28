import axios from "axios";

export default async function fetchProblems() {
  try {
    const response = await axios.get("http://localhost:8080/api/problems");
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}

export async function fetchProblemDescription(id) {
  try {
    const response = await axios.get(`http://localhost:8080/api/problem/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
}

