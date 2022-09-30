import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { animeVariant_backend, canisterId, createActor } from "../../../declarations/animeVariant_backend";
import { AuthClient } from '@dfinity/auth-client';
import Item from "./Item";

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
    }

    async function handleAuthenticated(authClient) {
      setLoaderHidden(false);
      const identity = await authClient.getIdentity();

      const authenticatedCanister = createActor(canisterId, {
        agentOptions: {
          identity,
        },
      });
      console.log(authenticatedCanister);
   
      const name = data.name;
      const image = data.image[0];
      const imageArray = await image.arrayBuffer();
      const imageByteData = [...new Uint8Array(imageArray)];

      const newNFTID = await authenticatedCanister.mint(imageByteData, name);
      console.log("created nft with ID: " + newNFTID.toText());
      setNFTPrincipal(newNFTID)
      setLoaderHidden(true);

    }

  }

  if (nftPrincipal == "") {

    return (
      <div className="minter-container">
        <div hidden={loaderHidden} className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Create NFT
        </h3>
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Upload Image
        </h6>
        <form className="makeStyles-form-109" noValidate="" autoComplete="off">
          <div className="upload-container">
            <input
              {...register("image", { required: true })}
              className="upload"
              type="file"
              accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
            />
          </div>
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
            Collection Name
          </h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
              <input
                {...register("name", { required: true })}  //trippledot notation is to add to the stuff that are already registered on register(added at the end).
                placeholder="e.g. CryptoDunks"
                type="text"
                className="form-InputBase-input form-OutlinedInput-input"
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>
          <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
            <span onClick={handleSubmit(onSubmit)} className="form-Chip-label">Mint NFT</span>
          </div>
        </form>
      </div>
    );

  } else {
    return (
      <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Minted!
        </h3>
        <div className="horizontal-center">
          <Item id={nftPrincipal.toText()} />
        </div>
      </div>
    )
  }

}

export default Minter;
