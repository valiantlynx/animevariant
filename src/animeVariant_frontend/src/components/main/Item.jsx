import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { createActor as NFTCreateActor } from "../../../../declarations/nft";
import { createActor as variantCreateActor } from "../../../../declarations/variant_backend";
import Button from "./Button";
import { animeVariant_backend, canisterId, createActor } from "../../../../declarations/animeVariant_backend";
import { AuthClient } from '@dfinity/auth-client';
import { Principal } from "@dfinity/principal";
import PriceLabel from "./PriceLabel";



function Item(props) {


  const [name, setName] = useState();//x
  const [owner, setOwner] = useState();//x
  const [image, setImage] = useState();//x
  const [button, setButton] = useState();//x
  const [priceInput, setPrice] = useState();//x
  const [loaderHidden, setLoaderHidden] = useState(true);//o
  const [blur, setBlur] = useState();//x
  const [sellStatus, setSellStatus] = useState("");//o
  const [priceLabel, setPriceLabel] = useState();//x
  const [shouldDisplay, setDisplay] = useState(true);//o

  const id = props.id; //is a principal id

  //the nft.mo canister is its own canister så instead of simply simply importing it and using its function, we have to send an http request to  it.
  // remember our main.mo(animeVariant_backend) is our canister that we can just import
  const localHost = "https://ic0.app";
  const agent = new HttpAgent({ host: localHost });

  // //for working locally: TODO: when deploy live, remove the following line agent is configured to work with a hardcodded live rootkey.
  //agent.fetchRootKey();
  let NFTActor;

  //load the nft from data to human visible image.
  async function loadNft() {

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    //console.log("item Identity: " + identity);
    const identityPrincipal = identity.getPrincipal();
    //console.log("item Principal: " + identityPrincipal);
    const currentIdentity = identityPrincipal.toString();
    //console.log("item Principal Text: " + currentIdentity);

    //access the nft
    // NFTActor = await Actor.createActor(idlFactory, {
    //   agent,
    //   canisterId: id
    // });

    NFTActor = NFTCreateActor(id, {
      agentOptions: {
        identity,
      },
    });
    //console.log(NFTActor);

    //set name
    const name = await NFTActor.getName();
    //console.log(name);
    setName(name);

    //set owner
    const owner = await NFTActor.getOwner();
    //console.log("owner of nft: " + owner);
    setOwner(owner.toText());


    //set image
    const imageData = await NFTActor.getAsset();
    const imageContent = new Uint8Array(imageData);
    const image = URL.createObjectURL(
      new Blob([imageContent.buffer], { type: "image/png" })
    );
    setImage(image);

    //if the nft is a collection or discover
    if (props.role == "collection") {
      //if nft is listed

      const nftIsListed = await animeVariant_backend.isListed(props.id);
      if (nftIsListed) {
        setOwner("animeVariant");
        setBlur({ filter: "blur(4px" })
        setSellStatus("Listed");
      } else {
        setButton(<Button handleClick={handleSell} text={"Sell"} />);
      }
    } else if (props.role == "discover") {
      const originalOwner = await animeVariant_backend.getOriginalOwner(props.id);
      setOwner(originalOwner.toText());

      if (originalOwner.toText() != currentIdentity) {
        setButton(<Button handleClick={handleBuy} text={"Buy"} />);
      }

      //check price of the nft
      const price = await animeVariant_backend.getListedNFTPrice(props.id);
      //console.log(price)
      setPriceLabel(<PriceLabel sellPrice={price.toString()} />);
    }

  }
  //to define where and how many  times we call the function we use the useEffect hook. the second parameter is for how many times to call the fuction.
  //leaving it empty mean it will be called once.
  useEffect(() => {
    loadNft();
  }, []);


  //handle sell on click cormfirm sell button  
  let price;
  function handleSell() {
    //console.log("sell");
    setPrice(<input
      placeholder="Price in DANG"
      type="number"
      className="price-input"
      value={price}
      onChange={(e) => price = e.target.value}
    />);
    setButton(<Button handleClick={sellItem} text={"Cormfirm"} />);

  }

  //list item for sale on the animeVariant canister
  async function sellItem() {
    setBlur({ filter: "blur(4px" })
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    //console.log("identity; " + JSON.stringify(identity, null, 2));

    const authenticatedCanister = createActor(canisterId, { //fordi vi skal listeItem fra den som logger in.
      agentOptions: {
        identity,
      },
    });
    //console.log(authenticatedCanister);

    setLoaderHidden(false);

    //console.log("Sold at set price = " + price)

    // authenticatedCanister is empty. it is supposed to be full with all the functions of animeVariant_backend

    const listingResult = await authenticatedCanister.listItem(props.id, Number(price));
    //console.log("Listing: " + listingResult);
    if (listingResult == "success") {
      const animeVariantId = await animeVariant_backend.getanimeVariantCanisterID();
      const transferResults = await NFTActor.transferOwnership(animeVariantId);
      //console.log("transfer: " + transferResults);
      if (transferResults == "Success") {
        setLoaderHidden(true);
        setButton();
        setPrice();
        setOwner("animeVariant");
        setSellStatus("Listed");
      }
    }
  }
  //handle buying tranfer procedure
  async function handleBuy() {
    //console.log("Buy triggered");
    setLoaderHidden(false);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    //console.log("item Identity: " + identity);
    const identityPrincipal = identity.getPrincipal();
    //console.log("item Principal: " + identityPrincipal);

    //authenticated Variant
    const variantPrincipal = Principal.fromText("5pkqp-tqaaa-aaaak-acxba-cai");
    const authenticatedVariantCanister = variantCreateActor(variantPrincipal, { //fordi vi skal transfer fra den som logger in.
      agentOptions: {
        identity,
      },
    });
    //console.log(authenticatedVariantCanister);
    //console.log("variantCanisterId; "+variantPrincipal);

    //authenticated animeVariandCanister
    const authenticatedAnimeVariandCanister = createActor(canisterId, { //fordi vi skal listeItem fra den som logger in.
      agentOptions: {
        identity,
      },
    });
    //console.log(authenticatedAnimeVariandCanister);

    //get hold of the sellers Pincipal id
    const sellerId = await animeVariant_backend.getOriginalOwner(props.id);
    //console.log("sellerID; " + sellerId);
    const itemPrice = await animeVariant_backend.getListedNFTPrice(props.id);
    //transter variant tokens for the nft
    const result = await authenticatedVariantCanister.transfer(sellerId, itemPrice);
    //console.log("money transfer; " + result);
    if (result == "success") {
      //Transfer ownership of nft
      const transferResult = await authenticatedAnimeVariandCanister.completePurchase(
        props.id,
        sellerId,
        identityPrincipal
      );
      if (transferResult == "Success") {
        //console.log("Purchase " + transferResult);
        setLoaderHidden(true);
        setDisplay(false);
      } else {
        console.log("Purchase " + transferResult);
      }

    }


  }

  return (
  <div style={{ display: shouldDisplay ? "inline" : "none" }} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5  disGrid-item">


     <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded ">
       <img
         className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
         src={image}
         style={blur}
       />
       <div hidden={loaderHidden} className="lds-ellipsis">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
       </div>
       <div className="disCardContent-root">
         {priceLabel}
         <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
           {name}<span className="purple-text"> {sellStatus}</span>
         </h2>
         <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
           Owner: {owner}
         </p>
         {priceInput}
         {button}
       </div>
     </div>
   </div>

  );
}

export default Item;

