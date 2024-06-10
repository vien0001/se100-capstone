import "./App.css";
import StockInput from "./components/StockInput.jsx";
import StockList from "./components/StockList";
import { StockProvider } from "./StockContext";

function App() {
  return (
    <StockProvider>
      <div>
        <h1>Finance Dashboard</h1>
        <StockInput />
        <h2>Stock List</h2>
        <StockList />
      </div>
    </StockProvider>
  );
}

export default App;
