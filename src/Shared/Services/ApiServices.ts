// apiService.ts
import axios from 'axios';

const API_URL = 'https://api.newsdatahub.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/sandbox/news`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};