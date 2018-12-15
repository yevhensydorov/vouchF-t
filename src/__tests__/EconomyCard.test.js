import React from "react";
import { shallow } from "enzyme";
import EconomyCard from "../EconomyCard";

describe("EconomyCard component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<EconomyCard />)
        .find(".card-container")
        .exists()
    ).toBe(true);
  });

  it("should render a child CardHeader component", () => {
    console.log("TO DO!!!");
  });
});
