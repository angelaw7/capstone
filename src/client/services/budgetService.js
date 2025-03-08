import api from "../api/api";

const BudgetService = {
  createBudget: async (budgetData) => {
    try {
      const response = await api.post("/budget/", JSON.stringify(budgetData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating budget:", error.message);
      throw error;
    }
  },

  getUserBudgets: async (userid) => {
    try {
      const response = await api.get(`/budget/${userid}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching budgets:", error.message);
      throw error;
    }
  },

  updateBudget: async (budgetId, updatedData) => {
    try {
      const response = await api.put(`/budget/${budgetId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Error updating budget:", error.message);
      throw error;
    }
  },

  deleteBudget: async (budgetId) => {
    try {
      const response = await api.delete(`/budget/${budgetId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting budget:", error.message);
      throw error;
    }
  },
};

export default BudgetService;
