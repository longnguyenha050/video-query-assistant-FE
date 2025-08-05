const API_BASE_URL = 'localhost:3000/api'; 

const apiRequest = async (endpoint, method = 'GET', data = null) => {
      const url = `${API_BASE_URL}${endpoint}`;
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Add any authorization headers if needed, e.g., 'Authorization': `Bearer ${token}`
        },
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Something went wrong!');
        }
        return await response.json();
      } catch (error) {
        console.error('API Request Error:', error);
        throw error; // Re-throw to be handled by the calling component
      }
    };


export const getUsers = () => apiRequest('/users');