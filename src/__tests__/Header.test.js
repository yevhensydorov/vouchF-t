import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import Navbar from "../Navbar";

describe("Header Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Header />)
        .find(".App-header")
        .exists()
    ).toBe(true);
  });

  it("renders a logo", () => {
    expect(shallow(<Header />).find(".logo").length).toEqual(1);
  });

  it("should render a child Navbar component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<Navbar />)).toBe(true);
  });

  it("renders a Log out button", () => {
    expect(shallow(<Header />).find("button").length).toEqual(1);
  });
});
