import React, { useState } from "react";
import { useStockContext } from "../StockContext";
import "./InputStyling.css";

function StockInput() {
  const { setStocks } = useStockContext();
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setInputValue3(event.target.value);
  };

  const handleAddStock = () => {
    const newStock = {
      symbol: inputValue1,
      quantity: inputValue2,
      purchasePrice: inputValue3,
    };

    setStocks((prevStocks) => [...prevStocks, newStock]);

    setInputValue1("");
    setInputValue2("");
    setInputValue3("");
  };

  return (
    <div className="stockInput">
      <input
        type="text"
        placeholder="Stock Symbol"
        value={inputValue1}
        onChange={handleChange1}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={inputValue2}
        onChange={handleChange2}
      />
      <input
        type="text"
        placeholder="Purchase Price"
        value={inputValue3}
        onChange={handleChange3}
      />
      <button onClick={handleAddStock}>Add Stock</button>
    </div>
  );
}

export default StockInput;
