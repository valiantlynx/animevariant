import React from 'react'

function CreateNftGuide() {
  return (
    
  <div className="create-nft">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <div className="section-heading">
          <div className="line-dec"></div>
          <h2>Create Your NFT & Put It On The Market.</h2>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="main-button">
          <a href="create.html">Create Your NFT Now</a>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item first-item">
          <div className="number">
            <h6>1</h6>
          </div>
          <div className="icon">
            <img src="images/icon-02.png" alt=""/>
          </div>
          <h4>Set Up Your Wallet</h4>
          <p>Please visit <a  href="https://52nbc-syaaa-aaaak-acxcq-cai.ic0.app/" >our wallet page</a> to make a wallet. This will give you a wallet ID. This wallet id is unique and will be assigned your tokens. There will be faucet giveaway of 500 000 tokens, 1000 to each user.</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item second-item">
          <div className="number">
            <h6>2</h6>
          </div>
          <div className="icon">
            <img src="images/icon-04.png" alt=""/>
          </div>
          <h4>Add Your Digital NFT</h4>
          <p>You can choose to sell or hold your Art after minting. Minting is the process where Art gets turned into an nft. You can mint <a href='/minting'>here</a>. For a deeper dive on how it works <a href='https://internetcomputer.org/docs/current/concepts/what-is-IC'>check this out</a></p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="item">
          <div className="icon">
            <img src="images/icon-06.png" alt=""/>
          </div>
          <h4>Sell Your NFT &amp; Make Profit</h4>
          <p>After Listing the Art it can be bought by anyone. The ownership will then be transfered along with all the perks. You can check the perks out <a href='/docs'>here</a> .</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CreateNftGuide