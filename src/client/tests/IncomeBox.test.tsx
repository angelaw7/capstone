import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import IncomeBox from "../components/common/IncomeBox";

// Mock the services and utilities
jest.mock("../services/incomeService");
jest.mock("../utils/util", () => ({
  wrapText: jest.fn((text) => text),
}));

// Mock react-native-gesture-handler's Swipeable component
jest.mock("react-native-gesture-handler", () => {
  return {
    Swipeable: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe("IncomeBox", () => {
  const mockAddIncome = jest.fn();
  const mockSetIncomes = jest.fn();

  const mockIncomes = [
    {
      id: 1,
      title: "Salary",
      amount: 1000,
      created_at: "2025-03-10T12:00:00Z",
      email: "user@example.com",
      frequency: "monthly",
      recurring: true,
    },
    {
      id: 2,
      title: "Freelance",
      amount: 500,
      created_at: "2025-03-05T12:00:00Z",
      email: "user2@example.com",
      frequency: "weekly",
      recurring: false,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should match the snapshot", () => {
    const { toJSON } = render(
      <IncomeBox
        incomes={mockIncomes}
        addIncome={mockAddIncome}
        setIncomes={mockSetIncomes}
      />,
    );

    // Use Jest's snapshot feature to match the rendered component with the saved snapshot
    expect(toJSON()).toMatchSnapshot();
  });

  it("should render the IncomeBox correctly", () => {
    render(
      <IncomeBox
        incomes={mockIncomes}
        addIncome={mockAddIncome}
        setIncomes={mockSetIncomes}
      />,
    );

    // Verify that the title is displayed
    expect(screen.getByText("Income")).toBeTruthy();

    // Verify that the incomes are displayed
    expect(screen.getByText("Income - Salary")).toBeTruthy();
    expect(screen.getByText("Income - Freelance")).toBeTruthy();
    expect(screen.getByText("$1,000")).toBeTruthy();
    expect(screen.getByText("$500")).toBeTruthy();
  });

  it("should call addIncome when the 'Add income' button is pressed", () => {
    render(
      <IncomeBox
        incomes={mockIncomes}
        addIncome={mockAddIncome}
        setIncomes={mockSetIncomes}
      />,
    );

    const addIncomeButton = screen.getByText("Add income");
    fireEvent.press(addIncomeButton);

    expect(mockAddIncome).toHaveBeenCalledTimes(1);
  });
});
