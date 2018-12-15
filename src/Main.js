import React, { Component } from "react";
import UserMoneyCard from "./UserMoneyCard";
import EconomyCard from "./EconomyCard";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <section className="main-wrapper">
        <UserMoneyCard />
        <EconomyCard />
      </section>
    );
  }
}

export default Main;
