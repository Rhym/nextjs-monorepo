import * as React from "react";
import { mount } from "enzyme";
import { Button } from "../Button";

describe("Button", () => {
  it("renders text", () => {
    const WRAPPER = mount(<Button>Lorum</Button>);
    expect(WRAPPER.text()).toEqual("Lorum");
  });

  it("can be disabled", () => {
    const WRAPPER = mount(<Button disabled />);
    expect(WRAPPER.getDOMNode()).toBeDisabled();
  });
});
