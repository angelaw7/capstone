import api from "../api/api";

const ManageUserService = {
  // CREATE
  createUser: async (userData) => {
    try {
      const response = await api.post("/user/", userData);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  },

  // READ
  getUser: async (userId) => {
    try {
      const response = await api.get(`/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  },

  // UPDATE
  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/user/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error("Error updating user info:", error.message);
      throw error;
    }
  },

  // DELETE
  deleteUser: async (userId) => {
    try {
      const response = await api.delete(`/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error.message);
      throw error;
    }
  },
};

export default ManageUserService;
