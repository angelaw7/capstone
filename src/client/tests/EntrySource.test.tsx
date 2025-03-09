import { render } from "@testing-library/react-native";
import EntrySource from "../components/common/EntrySource";

describe("EntrySource component", () => {
  it("should match snapshot for entry source component", () => {
    const page = render(
      <EntrySource
        description="description test"
        additionalInfo="additionalInfo test"
      />,
    );

    const { getByText } = page;
    const descriptionText = getByText("description test");
    const additionalInfoText = getByText("additionalInfo test");

    expect(descriptionText).toBeTruthy();
    expect(additionalInfoText).toBeTruthy();

    const tree = page.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
