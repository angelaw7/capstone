import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import DisplayExpenseItems from "../components/view/DisplayExpenseItem";

describe("DisplayExpenseItems", () => {
  const mockOnExpenseDelete = jest.fn();

  const items = [
    { id: 1, category: "Food", name: "Apple", cost: 1.5 },
    { id: 2, category: "Transport", name: "Bus Ticket", cost: 3 },
  ];

  it("should display a loading indicator when loading is true", () => {
    const { getByTestId } = render(
      <DisplayExpenseItems
        items={[]}
        loading={true}
        onExpenseDelete={mockOnExpenseDelete}
      />,
    );

    expect(getByTestId("activity-indicator")).toBeTruthy();
  });

  it("should display a message when there are no items", () => {
    const { getByText } = render(
      <DisplayExpenseItems
        items={[]}
        loading={false}
        onExpenseDelete={mockOnExpenseDelete}
      />,
    );

    expect(getByText("No items added yet!")).toBeTruthy();
  });

  it("should render expense items correctly", () => {
    const { getByText } = render(
      <DisplayExpenseItems
        items={items}
        loading={false}
        onExpenseDelete={mockOnExpenseDelete}
      />,
    );

    expect(getByText(/Apple/)).toBeTruthy();
    expect(getByText(/Cost: \$1.5/)).toBeTruthy();
    expect(getByText(/Bus Ticket/)).toBeTruthy();
    expect(getByText(/Cost: \$3/)).toBeTruthy();
  });

  it("should call onExpenseDelete when the delete button is pressed", () => {
    const { getAllByText } = render(
      <DisplayExpenseItems
        items={items}
        loading={false}
        onExpenseDelete={mockOnExpenseDelete}
      />,
    );

    const deleteButtons = getAllByText("Delete");
    fireEvent.press(deleteButtons[0]);

    expect(mockOnExpenseDelete).toHaveBeenCalledWith(1);
  });

  it("should call onExpenseDelete with correct id for the second item", () => {
    const { getAllByText } = render(
      <DisplayExpenseItems
        items={items}
        loading={false}
        onExpenseDelete={mockOnExpenseDelete}
      />,
    );

    const deleteButtons = getAllByText("Delete");
    fireEvent.press(deleteButtons[0]);

    expect(mockOnExpenseDelete).toHaveBeenCalledWith(1);

    fireEvent.press(deleteButtons[1]);

    expect(mockOnExpenseDelete).toHaveBeenCalledWith(2);
  });
});
