import axios from "./axios";

const fetchRandomImages = async () => {
  try {
    const response = await axios.get(`/api/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching random images:", error);
    throw error;
  }
};

export { fetchRandomImages };
