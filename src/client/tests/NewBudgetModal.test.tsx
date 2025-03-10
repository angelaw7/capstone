import { render, fireEvent, waitFor } from "@testing-library/react-native";
import NewBudgetModal from "../components/common/NewBudgetModal";

describe("NewBudgetModal component", () => {
  it("should match snapshot for new budget page", () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const tree = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should display all default visible UI elements", () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const page = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    );

    const { getByText, getByPlaceholderText } = page;

    const header = getByText("New Budget");
    const addBudget = getByText("Add Budget");
    const category = getByText("Category:");
    const amount = getByPlaceholderText("Amount ($):");
    const categorySelect = getByText("Select item");

    expect(header).toBeTruthy();
    expect(addBudget).toBeTruthy();
    expect(category).toBeTruthy();
    expect(amount).toBeTruthy();
    expect(categorySelect).toBeTruthy();
  });

  it("should update text fields when user inputs amount", () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const page = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    );

    const { getByPlaceholderText } = page;

    const amount = getByPlaceholderText("Amount ($):");
    fireEvent.changeText(amount, "1000");
    expect(amount.props.value).toBe("1000");
    expect(typeof amount.props.value).toBe("string");
  });

  it("should not display category options when category dropdown is not clicked", () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const page = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    );

    const { getByText, queryByText } = page;

    // Initially, check that no categories are shown
    const categorySelect = getByText("Select item");

    // Without pressing the dropdown, category options should not be visible
    const groceries = queryByText("Groceries");
    const rent = queryByText("Rent");
    const utilities = queryByText("Utilities");

    expect(groceries).toBeFalsy();
    expect(rent).toBeFalsy();
    expect(utilities).toBeFalsy();
  });

  it("should display a placeholder in the amount input field", () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const page = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    );

    const { getByPlaceholderText } = page;

    // Verify that the placeholder text is displayed correctly in the amount input field
    const amountInput = getByPlaceholderText("Amount ($):");
    expect(amountInput.props.placeholder).toBe("Amount ($):");
  });

  it("should display the selected category in the input field when a category is selected", async () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const page = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    );

    const { getByText, getByPlaceholderText, queryByText } = page;

    // Ensure 'Select item' text is present initially
    const selectItem = getByText("Select item");
    expect(selectItem).toBeTruthy();

    // Press the category dropdown to show options
    fireEvent.press(selectItem);

    // Wait for category options to appear after pressing
    await waitFor(() => {
      // Look for category options, like 'Groceries'
      const groceries = queryByText("Groceries");
      expect(groceries).toBeTruthy(); // Expect the option to appear
    });

    // Now, select a category, e.g., 'Groceries'
    const groceries = queryByText("Groceries");
    fireEvent.press(groceries);

    // Check that 'Select item' text is no longer in the dropdown
    const selectedCategoryInput = getByPlaceholderText("Category");

    // Ensure that the selected category (Groceries) is now displayed in the input field
    expect(selectedCategoryInput.props.value).toBe("Groceries");
  });

  it("should display the correct amount type when text is input", () => {
    const onCloseMock = jest.fn();
    const setBudgetsMock = jest.fn();

    const page = render(
      <NewBudgetModal
        visible={true}
        onClose={onCloseMock}
        setBudgets={setBudgetsMock}
      />,
    );

    const { getByPlaceholderText } = page;

    // Get the amount input field and change text to a number
    const amountInput = getByPlaceholderText("Amount ($):");
    fireEvent.changeText(amountInput, "500");

    // Ensure the value entered is treated as a string (for consistency in input handling)
    expect(amountInput.props.value).toBe("500");
    expect(typeof amountInput.props.value).toBe("string");
  });
});
