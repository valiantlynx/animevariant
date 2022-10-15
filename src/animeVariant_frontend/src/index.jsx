import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';
import { Principal } from "@dfinity/principal";


//const CURRENT_USER_ID = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"); //principal


const init = async () => {
  const authClient = await AuthClient.create();
  const userPrincipal = authClient.getIdentity().getPrincipal().toString()
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <React.StrictMode>
        <App userPrincipal={userPrincipal}/>
      </React.StrictMode>
    </div>
  );
  
};


init();
