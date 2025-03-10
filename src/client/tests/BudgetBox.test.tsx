import { render } from "@testing-library/react-native";
import BudgetBox from "../components/common/BudgetBox";
import { Expense, Income, Budget } from "../types";

describe("BudgetBox component", () => {
  const expenses: Expense[] = [
    {
      id: 1,
      name: "Food",
      cost: 50,
      category: "food",
      email: "test@example.com",
      created_at: "2025-03-10T12:00:00Z",
      transaction_date: "2025-03-10T12:00:00Z",
      raw_name: "Food",
    },
    {
      id: 2,
      name: "Rent",
      cost: 500,
      category: "rent",
      email: "test@example.com",
      created_at: "2025-03-10T12:00:00Z",
      transaction_date: "2025-03-10T12:00:00Z",
      raw_name: "Rent",
    },
  ];

  const incomes: Income[] = [
    {
      id: 1,
      amount: 1000,
      email: "test@example.com",
      created_at: "2025-03-10T12:00:00Z",
      frequency: "monthly",
      recurring: true,
      title: "Salary",
    },
    {
      id: 2,
      amount: 200,
      email: "test@example.com",
      created_at: "2025-03-10T12:00:00Z",
      frequency: "monthly",
      recurring: false,
      title: "Freelance",
    },
  ];

  const budgets: Budget[] = [
    {
      id: 1,
      category: "groceries",
      amount: 100,
      email: "test@example.com",
      created_at: "2025-03-10T12:00:00Z",
    },
    {
      id: 2,
      category: "rent",
      amount: 400,
      email: "test@example.com",
      created_at: "2025-03-10T12:00:00Z",
    },
  ];

  it("should render the chart and total expenses correctly", () => {
    const { getByText } = render(
      <BudgetBox incomes={incomes} expenses={expenses} budgets={budgets} />,
    );
    expect(getByText("TOTAL EXPENSES")).toBeTruthy();
    expect(getByText("$550")).toBeTruthy();
    expect(getByText("$650 left to budget")).toBeTruthy();
  });

  it("should render 'over budget' text if total expenses exceed income", () => {
    const expensesOverBudget: Expense[] = [
      {
        id: 1,
        name: "Food",
        cost: 50,
        category: "food",
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        transaction_date: "2025-03-10T12:00:00Z",
        raw_name: "Food",
      },
      {
        id: 2,
        name: "Rent",
        cost: 500,
        category: "rent",
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        transaction_date: "2025-03-10T12:00:00Z",
        raw_name: "Rent",
      },
      {
        id: 3,
        name: "Utilities",
        cost: 300,
        category: "utilities",
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        transaction_date: "2025-03-10T12:00:00Z",
        raw_name: "Utilities",
      },
    ];

    const incomesUnderBudget: Income[] = [
      {
        id: 1,
        amount: 700, // Less than expenses
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        frequency: "monthly",
        recurring: true,
        title: "Salary",
      },
    ];

    const { getByText } = render(
      <BudgetBox
        incomes={incomesUnderBudget}
        expenses={expensesOverBudget}
        budgets={budgets}
      />,
    );
    expect(getByText("TOTAL EXPENSES")).toBeTruthy();
    expect(getByText(/over budget/i)).toBeTruthy();
  });

  it("should include 'Left to budget' in the pie chart if there is remaining money", () => {
    const { getByText } = render(
      <BudgetBox incomes={incomes} expenses={expenses} budgets={budgets} />,
    );
    expect(getByText(/left to budget/i)).toBeTruthy();
  });

  it("should not include 'Left to budget' if there is no remaining income", () => {
    const expensesOverBudget: Expense[] = [
      {
        id: 1,
        name: "Food",
        cost: 50,
        category: "food",
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        transaction_date: "2025-03-10T12:00:00Z",
        raw_name: "Food",
      },
      {
        id: 2,
        name: "Rent",
        cost: 500,
        category: "rent",
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        transaction_date: "2025-03-10T12:00:00Z",
        raw_name: "Rent",
      },
      {
        id: 3,
        name: "Utilities",
        cost: 300,
        category: "utilities",
        email: "test@example.com",
        created_at: "2025-03-10T12:00:00Z",
        transaction_date: "2025-03-10T12:00:00Z",
        raw_name: "Utilities",
      },
    ];

    const { queryByText } = render(
      <BudgetBox
        incomes={incomes}
        expenses={expensesOverBudget}
        budgets={budgets}
      />,
    );
    expect(queryByText("Left to budget")).toBeFalsy();
  });
});
