import React, { Component } from "react";
import UserMoneyCard from "./UserMoneyCard";
import EconomyCard from "./EconomyCard";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSpending: null
    };

    this.getProps = this.getProps.bind(this);
  }
  getProps(data) {
    this.setState({
      userSpending: data
    });
  }

  render() {
    return (
      <section className="main-wrapper">
        <UserMoneyCard getPropsFromChild={this.getProps} />
        <EconomyCard userMoney={this.state.userSpending} />
      </section>
    );
  }
}

export default Main;
