import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";

function App(props) {
  const [currentUser, setCurrentUser] = useState();

  async function handleCurrentUser() {
    const currentUser = await props.userPrincipal;
    if (currentUser) {
      setCurrentUser(currentUser);
      console.log("App user Principal; " + currentUser);
    } else {
      console.log("Fetch error");
      // handle error
    }
  }
  handleCurrentUser()

  // const NFTID = "rrkah-fqaaa-aaaaa-aaaaq-cai";

  return (
    <div>
       {/* 
      <Minter />
      <Item id={NFTID}/> 
      <Footer /> */}
      <Loader />
      <Header userPrincipal={currentUser}/>

      
    </div>
  );
}

export default App;
