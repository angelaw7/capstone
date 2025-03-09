import { render, fireEvent } from "@testing-library/react-native";
import NewIncomePage from "../components/view/NewIncomePage";

describe("NewIncomePage component", () => {
  it("should match snapshot for new income page", () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();

    const tree = render(
      // @ts-ignore
      <NewIncomePage navigation={navigation} route={route} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should display all default visible UI elements", () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();

    const page = render(
      // @ts-ignore
      <NewIncomePage navigation={navigation} route={route} />,
    );

    /* technically should replace getByPlaceholderText with getByTestId but then
	we will need to add a test-id attribute to each component we're testing
	and thats a lotta work D: */
    const { getByText, getByPlaceholderText } = page;

    const header = getByText("New Income");
    const addIncome = getByText("Add Income");
    const title = getByPlaceholderText("Title: Add a Title");
    const amount = getByPlaceholderText("Amount ($):");
    const onceButton = getByText("Once");
    const periodicallyButton = getByText("Periodically");

    expect(header).toBeTruthy();
    expect(addIncome).toBeTruthy();
    expect(title).toBeTruthy();
    expect(amount).toBeTruthy();
    expect(onceButton).toBeTruthy();
    expect(periodicallyButton).toBeTruthy();
  });

  it("should update text fields when user inputs title/amount", () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();

    const page = render(
      // @ts-ignore
      <NewIncomePage navigation={navigation} route={route} />,
    );

    const { getByPlaceholderText } = page;

    const title = getByPlaceholderText("Title: Add a Title");
    fireEvent.changeText(title, "Gambling");
    expect(title.props.value).toBe("Gambling");
    expect(typeof title.props.value).toBe("string");

    const amount = getByPlaceholderText("Amount ($):");
    fireEvent.changeText(amount, 100);
    expect(amount.props.value).toBe(100);
    expect(typeof amount.props.value).toBe("number");
  });

  it("should show no dropdown options when 'once' is pressed", () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();

    const page = render(
      // @ts-ignore
      <NewIncomePage navigation={navigation} route={route} />,
    );

    const { getByTestId, queryByText } = page;

    const onceButton = getByTestId("once");
    const periodicallyButton = getByTestId("periodically");
    expect(onceButton).toBeTruthy();
    expect(periodicallyButton).toBeTruthy();

    fireEvent.press(onceButton);

    expect(onceButton.props.accessibilityState.checked).toBeTruthy();
    expect(periodicallyButton.props.accessibilityState.checked).toBeFalsy();

    const howOftenText = queryByText("How often?:");
    expect(howOftenText).toBeFalsy();
  });

  it("should show dropdown options when 'periodically' is pressed", () => {
    /* mock the navigation and route params */
    const navigation = jest.fn();
    const route = jest.fn();

    const page = render(
      // @ts-ignore
      <NewIncomePage navigation={navigation} route={route} />,
    );

    const { getByTestId, queryByText } = page;

    const onceButton = getByTestId("once");
    const periodicallyButton = getByTestId("periodically");
    expect(onceButton).toBeTruthy();
    expect(periodicallyButton).toBeTruthy();

    expect(onceButton.props.accessibilityState.checked).toBeTruthy();
    expect(periodicallyButton.props.accessibilityState.checked).toBeFalsy();

    fireEvent.press(periodicallyButton);

    expect(onceButton.props.accessibilityState.checked).toBeFalsy();
    expect(periodicallyButton.props.accessibilityState.checked).toBeTruthy();

    const howOftenText = queryByText("How often?:");
    expect(howOftenText).toBeTruthy();

    const occurrence = [
      "Daily",
      "Weekly",
      "Bi-Weekly",
      "Monthly",
      "Quarterly",
      "Bi-annually",
      "Annually",
    ];

    /* Default state when we choose periodically is set to 'Daily' by default */
    occurrence.forEach((val) => {
      if (val === "Daily") return expect(queryByText(val)).toBeTruthy();
      expect(queryByText(val)).toBeFalsy();
    });
  });
});
