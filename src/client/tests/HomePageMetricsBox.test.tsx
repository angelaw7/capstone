import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomePageMetricsBox from "../components/common/HomePageMetricsBox";
import { MONTHS } from "../constants";
import { Budget, Expense, NavigationProps, RouteProps } from "../types";

describe("HomePageMetricsBox", () => {
  // Mock navigation and route props
  const navigation = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
  } as unknown as NavigationProps;

  const route = { params: {} } as RouteProps;

  it("should render the HomePageMetricsBox component with default props", () => {
    // @ts-ignore
    const { getByText } = render(
      <HomePageMetricsBox
        navigation={navigation}
        route={route}
        budgets={[
          {
            id: 1,
            amount: 1000,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Food",
          },
          {
            id: 2,
            amount: 500,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Transport",
          },
          {
            id: 3,
            amount: 300,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Entertainment",
          },
        ]}
        expenses={[
          {
            id: 1,
            cost: 100,
            name: "Groceries",
            category: "Food",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Groceries",
          },
          {
            id: 2,
            cost: 150,
            name: "Uber",
            category: "Transport",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Uber",
          },
          {
            id: 3,
            cost: 200,
            name: "Movie",
            category: "Entertainment",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Movie",
          },
        ]}
      />,
    );

    // Check if the current month is displayed
    const currentMonth = MONTHS[new Date().getMonth()];
    expect(getByText(`${currentMonth}'s Budget`)).toBeTruthy();

    // Check if the budget and expenses values are correct
    expect(getByText("$1,800")).toBeTruthy();
    expect(getByText("$450")).toBeTruthy();

    // Check if the progress bar is rendered
    const progressBar = getByText("›");
    expect(progressBar).toBeTruthy();

    // Check if the progress percentage is calculated correctly
    expect(getByText("25%")).toBeTruthy(); // (450 / 1800) * 100 = 25%
  });

  it("should navigate to BudgetBoxDetails when the box is pressed", () => {
    // @ts-ignore
    const { getByText } = render(
      <HomePageMetricsBox
        navigation={navigation}
        route={route}
        budgets={[
          {
            id: 1,
            amount: 1000,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Food",
          },
          {
            id: 2,
            amount: 500,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Transport",
          },
          {
            id: 3,
            amount: 300,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Entertainment",
          },
        ]}
        expenses={[
          {
            id: 1,
            cost: 100,
            name: "Groceries",
            category: "Food",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Groceries",
          },
          {
            id: 2,
            cost: 150,
            name: "Uber",
            category: "Transport",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Uber",
          },
          {
            id: 3,
            cost: 200,
            name: "Movie",
            category: "Entertainment",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Movie",
          },
        ]}
      />,
    );

    const pressable = getByText("›"); // Placeholder for clickable area
    fireEvent.press(pressable);

    // Ensure navigation was triggered with correct params
    expect(navigation.navigate).toHaveBeenCalledWith("BudgetBoxDetails", {
      budgets: [
        {
          id: 1,
          amount: 1000,
          created_at: "2025-03-10",
          email: "user@example.com",
          category: "Food",
        },
        {
          id: 2,
          amount: 500,
          created_at: "2025-03-10",
          email: "user@example.com",
          category: "Transport",
        },
        {
          id: 3,
          amount: 300,
          created_at: "2025-03-10",
          email: "user@example.com",
          category: "Entertainment",
        },
      ],
      expenses: [
        {
          id: 1,
          cost: 100,
          name: "Groceries",
          category: "Food",
          email: "user@example.com",
          created_at: "2025-03-10",
          transaction_date: "2025-03-10",
          raw_name: "Groceries",
        },
        {
          id: 2,
          cost: 150,
          name: "Uber",
          category: "Transport",
          email: "user@example.com",
          created_at: "2025-03-10",
          transaction_date: "2025-03-10",
          raw_name: "Uber",
        },
        {
          id: 3,
          cost: 200,
          name: "Movie",
          category: "Entertainment",
          email: "user@example.com",
          created_at: "2025-03-10",
          transaction_date: "2025-03-10",
          raw_name: "Movie",
        },
      ],
    });
  });

  it("should render the progress bar correctly based on total budget and expenses", () => {
    // @ts-ignore
    const { getByText } = render(
      <HomePageMetricsBox
        navigation={navigation}
        route={route}
        budgets={[
          {
            id: 1,
            amount: 1000,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Food",
          },
          {
            id: 2,
            amount: 500,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Transport",
          },
          {
            id: 3,
            amount: 300,
            created_at: "2025-03-10",
            email: "user@example.com",
            category: "Entertainment",
          },
        ]}
        expenses={[
          {
            id: 1,
            cost: 100,
            name: "Groceries",
            category: "Food",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Groceries",
          },
          {
            id: 2,
            cost: 150,
            name: "Uber",
            category: "Transport",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Uber",
          },
          {
            id: 3,
            cost: 200,
            name: "Movie",
            category: "Entertainment",
            email: "user@example.com",
            created_at: "2025-03-10",
            transaction_date: "2025-03-10",
            raw_name: "Movie",
          },
        ]}
      />,
    );

    const progressText = getByText(/%/);
    expect(progressText.props.children).toMatch(/25%/);
  });
});
