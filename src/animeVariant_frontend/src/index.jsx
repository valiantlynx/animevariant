import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const init = async () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  );
  
};


init();
