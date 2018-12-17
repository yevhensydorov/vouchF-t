import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; //Slider default styles
import CardHeader from "./CardHeader";
import "./EconomyCard.css";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);

class EconomyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMoney: [],
      min: 0,
      loaded: false,
      likeMessageDisplay: false,
      dislikeMessageDisplay: false,
      value: 0
    };

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

  onSliderChange = value => {
    this.setState({
      value: value
    });
  };
  onMinChange = e => {
    this.setState({
      min: +e.target.value || 0
    });
  };
  onMaxChange = e => {
    this.setState({
      max: +e.target.value || 100
    });
  };

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
            <div className="slider-label">{spendingItem.name}</div>
            <SliderWithTooltip
              defaultValue={spendingItem.amount}
              min={this.state.min}
              max={spendingItem.amount}
              onChange={this.onSliderChange}
              tipFormatter={value => `\£${value}`}
              tipProps={{ visible: true }}
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
        <div className="card-content">
          <p className="action-message">
            Try reducing your monthly spending to see how your forecast could
            improve!
          </p>
          {spendingItems}
          <p className="saving-amount">
            This means you're saving £<span>{this.state.value}</span> per month!
          </p>
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
        </div>
      </article>
    );
  }
}

export default EconomyCard;
