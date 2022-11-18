import React from "react";
import image from "../../../assets/img/logo.png";

import ThreeFeatures from "./ThreeFeatures";
import ThreeBigFeatures from "./ThreeBigFeatures";
import TabGrid from "./TabGrid";




function LandingPage() {
    return (
        <main >
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div className="sc-bczRLJ App ">
                <div className="BackgroundAsImage__Container-sc-64ha7n-1 euAssQ">
                    <div className="BackgroundAsImage__OpacityOverlay-sc-64ha7n-2 hlOJub"></div>
                    <div className="BackgroundAsImage__HeroContainer-sc-64ha7n-3 gPdWqK " >



                        <div className="BackgroundAsImage__TwoColumn-sc-64ha7n-4 nbPzA">
                            <div className="BackgroundAsImage__LeftColumn-sc-64ha7n-5 bFdwsU"><span
                                className="BackgroundAsImage__Notification-sc-64ha7n-9 gQNwsj">We will be launching
                                soon worldwide.</span>
                                <h1 className="BackgroundAsImage__Heading-sc-64ha7n-7 bpRmqM"><span>Anime and Manga
                                </span><br /><span
                                    className="BackgroundAsImage__SlantedBackground-sc-64ha7n-8 jXSXUY">
                                        Marketplace</span></h1><button
                                            className="BackgroundAsImage__PrimaryAction-sc-64ha7n-10 jQtzpG">Get Started
                                </button>
                            </div>

                            <div className="BackgroundAsImage__RightColumn-sc-64ha7n-6 cUAVOf">
                                <div className="BackgroundAsImage__StyledResponsiveVideoEmbed-sc-64ha7n-11 bwCZec"
                                    style={{ position: "relative", background: "transparent", paddingBottom: "56.25%", paddingTop: "25px", height: "0px" }}
                                >

                                    <img
                                    className="w-100"
                                   
                                        src="https://www.quizexpo.com/wp-content/uploads/2021/02/cover-5-850x491.jpg"
                                        alt="The Best Chill Hip Hop Lo-Fi Music for Study and Relaxing"
                                        style={{ position: 'absolute', top: '0px'}}
                                        ></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ThreeFeatures />
            <ThreeBigFeatures />
            {/* <TabGrid  image={image}/> */}
           

        </main>

    );
}

export default LandingPage;

