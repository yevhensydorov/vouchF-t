import React, { Component } from "react";
import CardHeader from "./CardHeader";
import "./EconomyCard.css";

class EconomyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMoney: [],
      loaded: false,
      likeMessageDisplay: false,
      dislikeMessageDisplay: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userMoney !== prevState.userMoney) {
      return { userMoney: nextProps.userMoney };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userMoney !== this.props.userMoney) {
      this.setState({
        userMoney: [...this.state.userMoney, this.props.userMoney],
        loaded: true
      });
    }
  }

  handleChange(event) {
    let spends = this.state.userMoney;
    const value = event.target.value;
    const name = event.target.name;
    spends.forEach(item => {
      if (item.name === name) {
        item.amount = value;
        this.setState({
          userMoney: [...this.state.userMoney, spends]
        });
      }
    });
  }

  handleClick(event) {
    event.preventDefault();
    if (event.target.classList[0] === "like-btn") {
      this.setState({
        likeMessageDisplay: true
      });
    } else if (event.target.classList[0] === "dislike-btn") {
      this.setState({
        dislikeMessageDisplay: true
      });
    }
  }

  render() {
    let userSpending, spendingItems;
    if (this.state.loaded) {
      userSpending = this.state.userMoney;
      spendingItems = userSpending.map((spendingItem, index) => {
        return (
          <div className="slidecontainer" key={index}>
            <div className="input-container">
              <label htmlFor={spendingItem.name}>{spendingItem.name}</label>
              <input
                type="range"
                min="0"
                max={spendingItem.amount}
                value={spendingItem.amount}
                className="slider"
                id={index}
                onChange={this.handleChange}
                name={spendingItem.name}
              />
            </div>
            <div className="amount-container">
              <span>£{spendingItem.amount}</span>
            </div>
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
        <p className="saving-amount">This means you're saving £ per month!</p>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button-economy"
        >
          Find ways to save
        </a>
        <ul className="review-list">
          <li>
            <p className="review-question">Was this helpful?</p>
          </li>
          <li className="review-icon">
            {this.state.likeMessageDisplay ? (
              <p className="review-message">Thank you for your time!</p>
            ) : (
              <a href="/" onClick={this.handleClick}>
                <span className="like-btn" aria-label="Like-emoji" role="img">
                  👍
                </span>
              </a>
            )}
          </li>
          <li className="review-icon">
            {this.state.dislikeMessageDisplay ? (
              <p className="review-message">
                Sorry for your experience! We will contact you soon!
              </p>
            ) : (
              <a href="/" onClick={this.handleClick}>
                <span
                  className="dislike-btn"
                  aria-label="Dislike-emoji"
                  role="img"
                >
                  👎
                </span>
              </a>
            )}
          </li>
        </ul>
      </article>
    );
  }
}

export default EconomyCard;
