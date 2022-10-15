import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { animeVariant_backend, canisterId, createActor } from "../../../declarations/animeVariant_backend";
import { AuthClient } from '@dfinity/auth-client';
import Item from "./Item";
import Button from '../components/Button';


function Minter() {

  const { register, handleSubmit } = useForm();
  const [nftPrincipal, setNFTPrincipal] = useState("");
  const [loaderHidden, setLoaderHidden] = useState(true);

  async function onSubmit(data) {
    const authClient = await AuthClient.create();

    //is already logged in within 8 days
    if (authClient.isAuthenticated() && ((await authClient.getIdentity().getPrincipal().isAnonymous()) === false)) {

      handleAuthenticated(authClient);
    } else {
      //log in
      await authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: () => {
          handleAuthenticated(authClient);
        }
      });
    };


    async function handleAuthenticated(authClient) {
      setLoaderHidden(false);
      const identity = await authClient.getIdentity();

      const authenticatedCanister = createActor(canisterId, {
        agentOptions: {
          identity,
        },
      });
      //console.log(authenticatedCanister);

      const name = data.name;
      const image = data.image[0];
      const imageArray = await image.arrayBuffer();
      const imageByteData = [...new Uint8Array(imageArray)];

      const newNFTID = await authenticatedCanister.mint(imageByteData, name);
      //console.log("created nft with ID: " + newNFTID.toText());
      setNFTPrincipal(newNFTID)
      setLoaderHidden(true);

    }

  }

  if (nftPrincipal == "") {

    return (
      <div >
        <center>
          <div hidden={loaderHidden} className=" lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <header>
            <h1>Create<strong>NFT</strong>.</h1>
          </header>

          <h6 >
            Upload Image
          </h6>
          <form noValidate="" autoComplete="off"className="container">
            <div className="">
              <input
                {...register("image", { required: true })}
                className="form-control"
                type="file"
                accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
              />
            </div>
            <h6 className="">
              Collection Name
            </h6>
            <div className="">
              <div className="">
                <input
                  {...register("name", { required: true })}  //trippledot notation is to add to the stuff that are already registered on register(added at the end).
                  placeholder="e.g. CryptoDunks"
                  type="text"
                  className="form-control"
                />
                <fieldset className=""></fieldset>
              </div>
            </div>
            <div className="">
              <Button handleClick={handleSubmit(onSubmit)} text="Mint NFT"></Button>
            </div>
          </form>
        </center>

      </div>
    );

  } else {
    return (
      <div className="">
        <h3 className="">
          Minted!
        </h3>
        <div className="">
          <Item id={nftPrincipal.toText()} />
        </div>
      </div>
    )
  }

}

export default Minter;
