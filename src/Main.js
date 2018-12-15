import React from "react";
import UserMoneyCard from "./UserMoneyCard";
import EconomyCard from "./EconomyCard";
import "./Main.css";

const Main = () => {
  return (
    <section className="main-wrapper">
      <UserMoneyCard />
      <EconomyCard />
    </section>
  );
};

export default Main;
