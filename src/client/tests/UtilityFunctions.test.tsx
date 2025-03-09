import { capitalizeFirstLetter, formatDate, nameCase } from "../utils/util";

describe("capitalizeFirstLetter function", () => {
  it("should correctly capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("yomomma")).toBe("Yomomma");
    expect(capitalizeFirstLetter("pls get me a job")).toBe("Pls get me a job");
    expect(capitalizeFirstLetter("i hate tests")).toBe("I hate tests");
    expect(capitalizeFirstLetter("why am i here")).toBe("Why am i here");
  });
});

describe("nameCase function", () => {
  it("should correctly name case a string", () => {
    expect(nameCase("nvidia to the moon")).toBe("Nvidia To The Moon");
    expect(nameCase("pls make me rich jensen huang")).toBe(
      "Pls Make Me Rich Jensen Huang",
    );
    expect(nameCase("advanced money destroyer")).toBe(
      "Advanced Money Destroyer",
    );
    expect(nameCase("a million down")).toBe("A Million Down");
  });
});
