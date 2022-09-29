import React, { useState } from "react";
import {canisterId, createActor} from "../../../declarations/token_backend";
import { AuthClient } from '@dfinity/auth-client';

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Get Free Money");

  async function handleClick(event) {
    setDisable(true);
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.payOut();
    setText(result);
    setDisable(false);
    
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Valiant tokens here! Claim 1,000 VAL tokens to your account ( {props.userPrincipal} ).</label>
      <p className="trade-buttons">
        <button
        id="btn-payout" 
        onClick={handleClick}
        disabled={isDisabled}
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
