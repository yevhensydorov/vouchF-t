import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";
import Header from "../Header";
import Main from "../Main";

describe("App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render a child Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header").exists()).toBeTruthy();
  });

  it("should render a child Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Main").exists()).toBeTruthy();
  });
});
