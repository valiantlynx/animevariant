import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Principal } from "@dfinity/principal";


//const CURRENT_USER_ID = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"); //principal


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
