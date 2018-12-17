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
    expect(
      shallow(<Main />)
        .find("UserMoneyCard")
        .exists()
    ).toBeTruthy();
  });

  it("should render a child EconomyCard component", () => {
    expect(
      shallow(<Main />)
        .find("EconomyCard")
        .exists()
    ).toBeTruthy();
  });
});
