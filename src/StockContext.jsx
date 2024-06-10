import React, { createContext, useContext, useState } from "react";

const StockContext = createContext();

export const useStockContext = () => useContext(StockContext);

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]); // Initialize with an empty array
  const [stockPrices, setStockPrices] = useState({}); // Initialize with an empty object

  return (
    <StockContext.Provider
      value={{ stocks, setStocks, stockPrices, setStockPrices }}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockProvider;
