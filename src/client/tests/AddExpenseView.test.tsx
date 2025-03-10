import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AddExpenseView from "../components/view/AddExpenseView";

// Mock expo-image-picker
jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn().mockResolvedValue({ canceled: true }),
}));

describe("AddExpenseView", () => {
  it("allows entering expense details and saving", () => {
    const mockNavigate = jest.fn();
    const { getByText, getByPlaceholderText, queryByTestId } = render(
      <AddExpenseView navigation={{ navigate: mockNavigate }} />,
    );

    fireEvent.changeText(getByPlaceholderText("Enter Date"), "2025-03-10");
    fireEvent.changeText(
      getByPlaceholderText("Enter Store Name"),
      "Test Store",
    );

    const addItemButton = queryByTestId("add-item-button");
    expect(addItemButton).not.toBeNull();

    const saveButton = queryByTestId("save-button");
    expect(saveButton).not.toBeNull();

    fireEvent.press(addItemButton);

    fireEvent.press(saveButton);
  });

  it("closes the view when Cancel is pressed", () => {
    const mockGoBack = jest.fn();
    const { getByText } = render(
      <AddExpenseView navigation={{ goBack: mockGoBack }} />,
    );

    fireEvent.press(getByText("Cancel"));
    expect(mockGoBack).toHaveBeenCalled();
  });
});
