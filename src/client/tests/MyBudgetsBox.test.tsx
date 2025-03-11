import React from "react";
import { render, screen } from "@testing-library/react-native";
import MyBudgetsBox from "../components/common/MyBudgetsBox";
import { wrapText } from "../utils/util";
import { ICON_CATEGORY_MAPPING } from "../constants";

// Mock the necessary services and utilities
jest.mock("../utils/util", () => ({
  wrapText: jest.fn((text) => text), // Mock wrapText to return the text unchanged
}));

jest.mock("../services/budgetService");
jest.mock("react-native-gesture-handler", () => ({
  Swipeable: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("MyBudgetsBox", () => {
  const mockBudgets = [
    {
      id: 1,
      title: "Salary",
      amount: 1000,
      category: "income",
      created_at: "2025-03-10T12:00:00Z",
      email: "user@example.com",
      frequency: "monthly",
      recurring: true,
    },
    {
      id: 2,
      title: "Freelance",
      amount: 500,
      category: "freelance",
      created_at: "2025-03-05T12:00:00Z",
      email: "user2@example.com",
      frequency: "weekly",
      recurring: false,
    },
  ];

  it("matches the snapshot of a personal budget box", () => {
    const { toJSON } = render(
      <MyBudgetsBox
        budgets={mockBudgets}
        addBudget={jest.fn()}
        setBudgets={jest.fn()}
      />,
    );

    // Take a snapshot of the component's rendered output
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render the budget list correctly", () => {
    render(
      <MyBudgetsBox
        budgets={mockBudgets}
        addBudget={jest.fn()}
        setBudgets={jest.fn()}
      />,
    );

    // Check if the budgets are rendered
    expect(screen.getByText("Budget - income")).toBeTruthy();
    expect(screen.getByText("Budget - freelance")).toBeTruthy();

    // Check if amounts are rendered correctly
    expect(screen.getByText("$1,000")).toBeTruthy();
    expect(screen.getByText("$500")).toBeTruthy();
  });

  it("should call wrapText with the correct arguments", () => {
    render(
      <MyBudgetsBox
        budgets={mockBudgets}
        addBudget={jest.fn()}
        setBudgets={jest.fn()}
      />,
    );

    // Verify that wrapText is called with the correct arguments
    expect(wrapText).toHaveBeenCalledWith("Budget - income", 25);
    expect(wrapText).toHaveBeenCalledWith("Budget - freelance", 25);
  });

  it("should render the correct amount format for each budget", () => {
    render(
      <MyBudgetsBox
        budgets={mockBudgets}
        addBudget={jest.fn()}
        setBudgets={jest.fn()}
      />,
    );

    // Verify that the amount is displayed correctly for each budget
    expect(screen.getByText("$1,000")).toBeTruthy();
    expect(screen.getByText("$500")).toBeTruthy();
  });

  it("should render the correct category text for each budget", () => {
    render(
      <MyBudgetsBox
        budgets={mockBudgets}
        addBudget={jest.fn()}
        setBudgets={jest.fn()}
      />,
    );

    // Verify that the category text for each budget is rendered correctly
    expect(screen.getByText("Budget - income")).toBeTruthy();
    expect(screen.getByText("Budget - freelance")).toBeTruthy();
  });
});
