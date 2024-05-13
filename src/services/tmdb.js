const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "9484a5a4d7bd301e0a2abcb44a96c66d";

export const getMovies = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ERROR! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: , error");
    return [];
  }
};
