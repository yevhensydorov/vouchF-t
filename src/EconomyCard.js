import React, { Component } from "react";
import CardHeader from "./CardHeader";
import "./EconomyCard.css";

class EconomyCard extends Component {
  render() {
    return (
      <article className="card-container">
        <CardHeader title="spend less" />
        <p className="action-message">
          Try reducing your monthly spending to see how your forecast could
          improve!
        </p>
        <form className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="slider"
            id="myRange"
          />
        </form>
      </article>
    );
  }
}

export default EconomyCard;
