import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Navbar />)
        .find(".navbar")
        .exists()
    ).toBe(true);
  });

  it("should have two menu items", () => {
    expect(shallow(<Navbar />).find(".menu-item").length).toEqual(2);
  });
});
