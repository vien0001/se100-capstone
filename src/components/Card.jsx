import React from "react";
import "./Card.css";

const Card = ({ newStock, stockPrice }) => {
  const difference =
    newStock.quantity * stockPrice - newStock.quantity * newStock.purchasePrice;
  const color = difference >= 0 ? "green" : "red";
  return (
    <div className="card">
      <p className="stockSymbol">Stock Symbol: {newStock.symbol}</p>
      <p>Stock Quantity: {newStock.quantity}</p>
      <p>Stock Purchase Price: {newStock.purchasePrice}</p>
      <p>Current Price: {stockPrice}</p>

      <p style={{ color }}>Profit / Loss: {difference}</p>
    </div>
  );
};

export default Card;
