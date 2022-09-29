import ReactDOM from 'react-dom/client'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from "@dfinity/agent";

const init = async () => { 
  const authClient = await AuthClient.create();

  // //must remove before deploying live
  // const localHost = "http://localhost:8081/";
  // const agent = new HttpAgent({host: localHost});
  // agent.fetchRootKey();

  // handleAuthenticated(authClient);

  //is already logged in within 8 days
  if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false )){
    console.log("logged in");
    handleAuthenticated(authClient);
    
  } else {
    //log in
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess : () => {
        handleAuthenticated(authClient);
      }
    });
  }
}

async function handleAuthenticated(authClient){
  console.log(authClient.getIdentity());
  const identity = await authClient.getIdentity();
  const userPrincipal = identity.getPrincipal().toString();
  console.log(userPrincipal);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App loggedInPrincipal={userPrincipal}/>);
}

init();


