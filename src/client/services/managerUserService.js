import api from "../api/api";

const ManageUserService = {
  // CREATE
  createUser: async (userData) => {
    try {
      const response = await api.post("/users/", userData);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  },

  // READ
  getUser: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  },

  // READ
  getUserByEmail: async (email) => {
    try {
      const response = await api.get(`/users/${email}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  },

  // UPDATE
  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error("Error updating user info:", error.message);
      throw error;
    }
  },

  // DELETE
  deleteUser: async (userId) => {
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error.message);
      throw error;
    }
  },
};

export default ManageUserService;
