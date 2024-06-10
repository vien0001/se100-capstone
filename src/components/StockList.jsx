import React, { useEffect } from "react";
import { useStockContext } from "../StockContext";
import Card from "./Card";

function StockList() {
  const { stocks, stockPrices, setStockPrices } = useStockContext();

  useEffect(() => {
    const fetchStockPrices = () => {
      stocks.forEach((stock) => {
        fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=MGYGUNUM5AA5N3PR`
        )
          .then((response) => response.json())
          .then((data) => {
            const globalQuote = data["Global Quote"];
            if (globalQuote) {
              const price = globalQuote["05. price"];
              if (price) {
                setStockPrices((prevPrices) => ({
                  ...prevPrices,
                  [stock.symbol]: price,
                }));
              } else {
                console.error(`Error: Price not found for ${stock.symbol}`);
              }
            } else {
              console.error(
                `Error: Global Quote not found in response for ${stock.symbol}`
              );
            }
          })
          .catch((error) => {
            console.error(
              `Error fetching stock price for ${stock.symbol}:`,
              error
            );
          });
      });
    };

    fetchStockPrices();
  }, [stocks, setStockPrices]);

  return (
    <div>
      {stocks.map((stock, index) => (
        <Card
          key={index}
          newStock={stock}
          stockPrice={stockPrices[stock.symbol]}
        />
      ))}
    </div>
  );
}

export default StockList;
