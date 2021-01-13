import { capitalize } from "./index";

describe("Functions", () => {
  it("capitalize", () => {
    expect(capitalize("ryan potter")).toBe("Ryan Potter");
  });
});
