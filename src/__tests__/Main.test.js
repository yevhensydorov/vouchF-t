import React from "react";
import { shallow } from "enzyme";
import Main from "../Main";
import UserMoneyCard from "../UserMoneyCard";
import EconomyCard from "../EconomyCard";

describe("Main Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Main />)
        .find(".main-wrapper")
        .exists()
    ).toBe(true);
  });

  it("should render a child UserMoneyCard component", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.contains(<UserMoneyCard />)).toBe(true);
  });

  it("should render a child EconomyCard component", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.contains(<EconomyCard />)).toBe(true);
  });
});
