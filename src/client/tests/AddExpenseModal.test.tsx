import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AddExpenseModal from "../components/view/AddExpenseModal";
import { TextInput, Text, View } from "react-native";

describe("AddExpenseModal", () => {
  it("calls onSave with correct data when save button is pressed", () => {
    const mockOnSave = jest.fn();
    const mockOnClose = jest.fn();

    const { getByText, getByLabelText } = render(
      <AddExpenseModal
        visible={true}
        onClose={mockOnClose}
        onSave={mockOnSave}
      />,
    );

    const rawNameInput = getByLabelText("Raw Name:");
    fireEvent.changeText(rawNameInput, "Test Raw Name");

    const nameInput = getByLabelText("Name:");
    fireEvent.changeText(nameInput, "Test Name");

    const costInput = getByLabelText("Cost:");
    fireEvent.changeText(costInput, "100");

    fireEvent.press(getByText("Save"));

    expect(mockOnSave).toHaveBeenCalledWith({
      id: expect.any(String),
      category: "Groceries",
      raw_name: "Test Raw Name",
      name: "Test Name",
      cost: 100,
    });

    expect(mockOnClose).toHaveBeenCalled();
  });
});
