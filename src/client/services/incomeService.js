import api from "../api/api";

const IncomeService = {
  createIncome: async (incomeData) => {
    try {
      const response = await api.post("/incomes/", incomeData);
      return response.data;
    } catch (error) {
      console.error("Error creating income:", error.message);
      throw error;
    }
  },

  getUserIncomes: async (userEmail) => {
    try {
      const response = await api.get(`/incomes/${userEmail}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching income:", error.message);
      throw error;
    }
  },

  updateIncome: async (incomeId, updatedData) => {
    try {
      const response = await api.put(`/incomes/${incomeId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Error updating income:", error.message);
      throw error;
    }
  },

  deleteIncome: async (incomeId) => {
    try {
      const response = await api.delete(`/incomes/${incomeId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting income:", error.message);
      throw error;
    }
  },
};

export default IncomeService;
