import React, { useState } from 'react';

function Docs(props) {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };
    return (
        <header>
            <div className="blue window" id="logo">
                <header>
                    <h1>Your<strong>Profile</strong>account</h1>
                </header>

                <center>
                    <h6>Your acount's Principal ID:</h6>
                    <span
                        className="principal "
                        onClick={() => copyToClipBoard(props.currentPrincipalID)}
                        type="text">
                        {props.currentPrincipalID}
                        <i className="fa-solid fa-copy"></i>
                    </span>
                    {copySuccess}
                </center>


            </div>

        </header>
    );
}

export default Docs;