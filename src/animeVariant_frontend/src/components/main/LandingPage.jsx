import React from "react";
import CategoriesAndCollection from "./CategoriesAndCollection";
import CreateNftGuide from "./CreateNftGuide";
import CurrentMarket from "./CurrentMarket";
import MainBanner from "./MainBanner";

function LandingPage() {
    return (
        <main>
            <MainBanner />
            <CategoriesAndCollection />
            <CreateNftGuide />
            <CurrentMarket/>
        </main>

    );
}

export default LandingPage;

