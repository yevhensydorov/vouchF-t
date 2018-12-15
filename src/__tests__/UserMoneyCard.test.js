import React from "react";
import { shallow } from "enzyme";
import UserMoneyCard from "../UserMoneyCard";

describe("UserMoneyCard component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<UserMoneyCard />)
        .find(".card-container")
        .exists()
    ).toBe(true);
  });

  it("should render a child CardHeader component", () => {
    console.log("TO DO!!!");
  });
});
