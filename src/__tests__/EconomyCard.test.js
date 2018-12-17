import React from "react";
import { shallow } from "enzyme";
import EconomyCard from "../EconomyCard";
import CardHeader from "../CardHeader";

describe("EconomyCard component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<EconomyCard />)
        .find(".card-container")
        .exists()
    ).toBe(true);
  });

  it("should render a child CardHeader component", () => {
    const wrapper = shallow(<EconomyCard />);
    expect(wrapper.find("CardHeader").exists()).toBeTruthy();
  });
});
