import React, { Component } from "react";
import CardHeader from "./CardHeader";
import "./EconomyCard.css";

class EconomyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMoney: [],
      loaded: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userMoney !== prevState.userMoney) {
      return { userMoney: nextProps.userMoney };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userMoney !== this.props.userMoney) {
      this.setState({ userMoney: this.props.userMoney, loaded: true });
    }
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    let userSpending, spendingItems;
    if (this.state.loaded) {
      userSpending = this.state.userMoney;
      spendingItems = userSpending.map((spendingItem, index) => {
        return (
          <div className="slidecontainer" key={index}>
            <label htmlFor={spendingItem.name.trim()}>
              {spendingItem.name}
            </label>
            <input
              type="range"
              min="1"
              max={spendingItem.amount}
              value={spendingItem.amount}
              className="slider"
              id="myRange"
              onChange={this.handleChange}
              name={spendingItem.name.trim()}
            />
          </div>
        );
      });
    } else {
      return null;
    }
    return (
      <article className="card-container">
        <CardHeader title="spend less" />
        <p className="action-message">
          Try reducing your monthly spending to see how your forecast could
          improve!
        </p>
        {spendingItems}
      </article>
    );
  }
}

export default EconomyCard;
