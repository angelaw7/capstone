import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import BudgetBoxDetails from "../components/common/BudgetBoxDetails";
import { useRoute } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  useRoute: jest.fn(),
}));

jest.mock("../assets/icons/BackArrow", () => "BackArrow");
jest.mock("../assets/icons/CancelIcon", () => "CancelIcon");

// Mock Expenses and Budgets
const mockBudgets = [
  { id: 1, category: "Food", amount: 500 },
  { id: 2, category: "Rent", amount: 1200 },
];

const mockExpenses = [
  { id: 1, category: "Food", cost: 200 },
  { id: 2, category: "Rent", cost: 1300 },
];

describe("BudgetBoxDetails component", () => {
  it("should render the budget items correctly", () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        budgets: mockBudgets,
        expenses: mockExpenses,
      },
    });

    const page = render(
      // @ts-ignore
      <BudgetBoxDetails navigation={navigation} route={route} />,
    );

    const { getByText } = page;

    expect(getByText("Food")).toBeTruthy();
    expect(getByText("Rent")).toBeTruthy();
  });

  it('should render the "left to budget" text correctly', () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        budgets: mockBudgets,
        expenses: mockExpenses,
      },
    });

    const page = render(
      // @ts-ignore
      <BudgetBoxDetails navigation={navigation} route={route} />,
    );

    const { getByText } = page;

    expect(getByText("$300 left")).toBeTruthy();
    expect(getByText("$100 over limit")).toBeTruthy();
  });

  it("should open the budget details modal when a budget is pressed", async () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        budgets: mockBudgets,
        expenses: mockExpenses,
      },
    });

    const page = render(
      // @ts-ignore
      <BudgetBoxDetails navigation={navigation} route={route} />,
    );

    const { getByText } = page;

    fireEvent.press(getByText("Food"));

    await waitFor(() => {
      expect(getByText("Expenses")).toBeTruthy();
      expect(getByText("Rent")).toBeTruthy();
    });
  });
});
