import React from "react";
import { shallow, mount, render } from "enzyme";
import Header from "../Header";

describe("Header Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Header />)
        .find(".App-header")
        .exists()
    ).toBe(true);
  });
});
