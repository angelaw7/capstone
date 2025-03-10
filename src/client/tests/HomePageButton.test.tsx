import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import HomePageButton from "../components/common/HomePageButton";

describe("HomePageButton", () => {
  it("should render the button with correct title", () => {
    const routingHandler = jest.fn();
    const { getByTestId } = render(
      <HomePageButton
        title="Click Me"
        color="blue"
        routingHandler={routingHandler}
      >
        <Text>Test Icon</Text>
      </HomePageButton>,
    );

    const buttonText = getByTestId("button-text");
    expect(buttonText).toHaveTextContent("Click Me");
  });

  it("should trigger routingHandler when button is pressed", () => {
    const routingHandler = jest.fn();
    const { getByTestId } = render(
      <HomePageButton
        title="Click Me"
        color="blue"
        routingHandler={routingHandler}
      >
        <Text>Test Icon</Text>
      </HomePageButton>,
    );

    const button = getByTestId("home-page-button");
    fireEvent.press(button);
    expect(routingHandler).toHaveBeenCalledTimes(1);
  });
});
