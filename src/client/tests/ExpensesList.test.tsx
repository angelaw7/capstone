import { render } from "@testing-library/react-native";
import ExpensesList from "../components/common/ExpensesList";

// Define mock transactions with the expected shape
const transactions = [
  {
    id: "1",
    transaction_date: "2025-03-10",
    category: "Food",
    cost: 12.5,
    name: "Burger",
  },
  {
    id: "2",
    transaction_date: "2025-03-10",
    category: "Food",
    cost: 7.3,
    name: "Fries",
  },
  {
    id: "3",
    transaction_date: "2025-03-09",
    category: "Transportation",
    cost: 5,
    name: "Bus Fare",
  },
  {
    id: "4",
    transaction_date: "2025-03-09",
    category: "Transportation",
    cost: 3.25,
    name: "Train Ticket",
  },
];

const mockTransactions = transactions as never[];

describe("ExpensesList component", () => {
  it("should render expenses correctly", () => {
    const { getByText } = render(
      <ExpensesList transactions={mockTransactions} />,
    );

    // Verify if the data is rendered correctly
    expect(getByText("Food - $19.80")).toBeTruthy();
    expect(getByText("Burger")).toBeTruthy();
    expect(getByText("Fries")).toBeTruthy();
    expect(getByText("Transportation - $8.25")).toBeTruthy();
    expect(getByText("Bus Fare")).toBeTruthy();
    expect(getByText("Train Ticket")).toBeTruthy();
  });
});
