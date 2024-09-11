// src/api/dessertsApi.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your API base URL

export interface Users {
  _id?: string; // Assuming each dessert has a unique ID from the API
  name?: string;
  role?: string;
  age?: number;
  date?: Date;
}
class UserService{
    static fetchUsers = async (): Promise<Users> => {
        const response = await axios.get(`${API_BASE_URL}`);
        return response?.data;
      };
      static addUsers = async (users: Users): Promise<Users> => {
        const response = await axios.post(`${API_BASE_URL}/createTodo`, users);
        return response?.data;
      };
      static getSingleUser = async (users: Users): Promise<Users> => {
        const response = await axios.put(`${API_BASE_URL}/getUser/${users._id}`, users);
        return response?.data;
      };
      static updateUsers = async (id: string, users: Partial<Users>): Promise<Users> => {
        try {
          const response = await axios.post(`${API_BASE_URL}/updateUser/${id}`, users);
          return response.data;
        } catch (error) {
          console.error("Error updating user", error);
          throw error; // Rethrow to handle in the component
        }
      };
     static deleteUsers = async (id: string): Promise<{ id: string }> => {
        await axios.delete(`${API_BASE_URL}/deleteUser/${id}`);
        return { id };
      };
}
export default UserService;