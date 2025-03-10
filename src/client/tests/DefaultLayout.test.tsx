import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import DefaultLayout from "../components/common/DefaultLayout";

describe("DefaultLayout", () => {
  it("should render children inside the layout", () => {
    const { getByText } = render(
      <DefaultLayout>
        <Text>Test Child</Text>
      </DefaultLayout>,
    );
    expect(getByText("Test Child")).toBeTruthy();
  });

  it("should have a header with the correct style", () => {
    const { getByTestId } = render(
      <DefaultLayout>
        <Text>Test Child</Text>
      </DefaultLayout>,
    );
    const header = getByTestId("header");
    expect(header).toHaveStyle({ height: "7%", backgroundColor: "white" });
  });

  it("should have a container that takes up full height", () => {
    const { getByTestId } = render(
      <DefaultLayout>
        <Text>Test Child</Text>
      </DefaultLayout>,
    );
    const container = getByTestId("container");
    expect(container).toHaveStyle({ height: "100%" });
  });

  it("should have a children container with 90% height", () => {
    const { getByTestId } = render(
      <DefaultLayout>
        <Text>Test Child</Text>
      </DefaultLayout>,
    );
    const childrenContainer = getByTestId("children");
    expect(childrenContainer).toHaveStyle({ height: "90%" });
  });
});
