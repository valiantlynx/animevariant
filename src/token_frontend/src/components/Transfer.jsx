import React, {useState} from "react";
import {Principal} from "@dfinity/principal";
import {canisterId, createActor} from "../../../declarations/token_backend";
import { AuthClient } from '@dfinity/auth-client';

function Transfer() {
  
  const [isDisabled, setDisable] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [recipientId, setRecipient] = useState("");
  const [isHidden, setHidden] = useState(true);
  const [amount, setAmount] = useState(0);
  
  async function handleClick() {
    setHidden(false);
    setDisable(true);

    const authClient = await AuthClient.create();

    //is already logged in within 8 days
    if (authClient.isAuthenticated()){
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
    };

    async function handleAuthenticated(authClient){
      const identity = await authClient.getIdentity();
      const authenticatedCanister = createActor(canisterId, {
        agentOptions: {
          identity,
        },
      });

      const recipient = Principal.fromText(recipientId);
      const amountToTramsfer = Number(amount);
      const result = await authenticatedCanister.transfer(recipient, amountToTramsfer);
      setFeedback(result);
    };

    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
          Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
