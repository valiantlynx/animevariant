import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/main/App";
import { AuthClient } from '@dfinity/auth-client';
import WelcomeAnimasjon from "./components/main/WelcomeAnimasjon";
import Particle from "./components/main/Particle";
import Button from './components/main/Button';
import FileNotFound from "./components/main/FileNotFound";

//const CURRENT_USER_ID = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"); //principal


const init = async () => {

  const authClient = await AuthClient.create();
  const identity = await authClient.getIdentity();
    const userPrincipal = identity.getPrincipal().toString();
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div>

        <React.StrictMode>
          <App userPrincipal={userPrincipal} />
        </React.StrictMode>

      </div>
    );

  // //if user is already logged in within 8 days
  // if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {
  //   console.log("logged in");
  //   handleAuthenticated(authClient);

  // } else {
  //   // handleAuthenticated(authClient);
  //   const root = ReactDOM.createRoot(document.getElementById("root"));
  //   root.render(
  //     <div>
  //       <WelcomeAnimasjon />
  //       <h3 className="text-info w-100">You need an Internet identity to see the website.</h3>
  //       <h5 className="text-info w-100" >Dont worry no personal information is required. Make one by cliking LOGIN</h5>
  //       <Button handleClick={login} text="login" />
        
  //     </div>

  //     //<Particle />
 

  //   );
  // }

  // //logging in
  // async function login() {
  //   await authClient.login({
  //     identityProvider: "https://identity.ic0.app/#authorize",
  //     onSuccess: () => {
  //       handleAuthenticated(authClient);
  //     },

  //   });

  // }

  // async function handleAuthenticated(authClient) {
  //   const identity = await authClient.getIdentity();
  //   const userPrincipal = identity.getPrincipal().toString();
  //   const root = ReactDOM.createRoot(document.getElementById("root"));
  //   root.render(
  //     <div>

  //       <React.StrictMode>
  //         <App userPrincipal={userPrincipal} />
  //       </React.StrictMode>

  //     </div>
  //   );
  // }



};


init();
