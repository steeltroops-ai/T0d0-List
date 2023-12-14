import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import App from "./Calculator";



const App = () => {
  const [showApp, setShowApp] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const handleButtonClick = (component) => {
    if (component === "App") {
      setShowApp(true);
      setShowCalculator(false);
    } else if (component === "Calculator") {
      setShowApp(false);
      setShowCalculator(true);
    }
  };

  return (
    <React.StrictMode>
      <button onClick={() => handleButtonClick("App")}>Show App</button>
      <button onClick={() => handleButtonClick("Calculator")}>Show Calculator</button>
      {showApp && <App />}
      {showCalculator && <Calculator />}
    </React.StrictMode>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

