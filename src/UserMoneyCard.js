import React, { Component } from "react";
import "./UserMoneyCard.css";
import userData from "./finance-info";
import CardHeader from "./CardHeader";

class UserMoneyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.props.getPropsFromChild(userData.expenditures);
  }

  getData() {
    this.setState({
      data: [...this.state.data, userData]
    });
  }

  render() {
    let incomeData, expendituresData, incomeForm, expendituresForm;
    if (this.state.data.length > 0) {
      incomeData = this.state.data[0].incomes;
      expendituresData = this.state.data[0].expenditures;
      incomeForm = incomeData.map((incomeItem, index) => {
        return (
          <form key={index}>
            <div>
              <label htmlFor="annual-salary">{incomeItem.name}</label>
              <input
                type="text"
                name="annual-salary"
                id="annual-salary"
                value={incomeItem.amount}
              />
            </div>
            <div>
              <label htmlFor="from-age">From age</label>
              <input
                type="text"
                name="from-age"
                id="from-age"
                value={incomeItem.from_age}
              />
            </div>
            <div>
              <label htmlFor="to-age">To age</label>
              <input
                type="text"
                name="to-age"
                id="to-age"
                value={incomeItem.to_age}
              />
            </div>
          </form>
        );
      });
      expendituresForm = expendituresData.map((spendingItem, index) => {
        return (
          <form key={index}>
            <div>
              <label htmlFor="mortgage-spending">{spendingItem.name}</label>
              <input
                type="text"
                name="mortgage-spending"
                id="mortgage-spending"
                value={spendingItem.amount}
              />
            </div>
            <div>
              <label htmlFor="mortgage-spending">From age</label>
              <input
                type="text"
                name="from-age"
                id="from-age"
                value={spendingItem.from_age}
              />
            </div>
            <div>
              <label htmlFor="mortgage-spending">To age</label>
              <input
                type="text"
                name="to-age"
                id="to-age"
                value={spendingItem.to_age}
              />
            </div>
          </form>
        );
      });
    }
    return (
      <article className="card-container">
        <CardHeader title="your income & spend" />
        <h3>Annual income</h3>
        <div>{incomeForm}</div>
        <h3>Monthly spending</h3>
        <div>{expendituresForm}</div>
      </article>
    );
  }
}

export default UserMoneyCard;
