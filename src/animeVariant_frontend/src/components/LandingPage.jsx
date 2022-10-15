import React from "react";

function LandingPage() {
    return (
        <main>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                    <img alt="main page image of anime variant" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" width="100%" height="auto"className="bd-placeholder-img" src="https://picsum.photos/540/1080" ></img>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Anime and Manga Marketplace</h1>
                                <p>Upload your art as an NFT and watch it grow i price.</p>
                                <p><a className="carousel-button btn btn-lg btn-primary" href="https://5ilw3-6iaaa-aaaak-acxbq-cai.ic0.app/">Join and Create</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img alt="main page image of anime variant" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" width="100%" height="auto"className="bd-placeholder-img" src="https://picsum.photos/540/1080" ></img>

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Private and Secure.</h1>
                                <p>We never ask for any personal information. The Internet Identity ensures that.</p>
                                <p><a className="btn btn-lg btn-primary" href="/docs">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img alt="main page image of anime variant" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" width="100%" height="auto"className="bd-placeholder-img" src="https://picsum.photos/540/1080" ></img>

                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Own your Anime and Manga.</h1>
                                <p>Grow your art to become the next monalisa, worth millions.</p>
                                <p><a className="btn btn-lg btn-primary" href="/discover">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container marketing">

                <div className="row">
                    <div className="col-lg-4">
                    <img alt="main page image of anime variant" aria-label="Placeholder: 140x140" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"className="bd-placeholder-img rounded-circle" src="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D153957947W10000H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/anime-and-chill-manga-chill-gift-japan-tokyo-sticker.jpg" ></img>
                  

                        <h2 className="fw-normal">Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                    <img alt="main page image of anime variant" aria-label="Placeholder: 140x140" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"className="bd-placeholder-img rounded-circle" src="https://i.pinimg.com/564x/80/29/53/8029531c433b7d0e2bf48ca6429ef325.jpg" ></img>

                        <h2 className="fw-normal">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                    <div className="col-lg-4">
                    <img alt="main page image of anime variant" aria-label="Placeholder: 140x140" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"className="bd-placeholder-img rounded-circle" src="https://i.pinimg.com/564x/53/2f/41/532f41a3dbcc31c7c0efc2bb546464fe.jpg" ></img>

                        <h2 className="fw-normal">Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                    </div>
                </div>


                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                    <img alt="main page image of anime variant" aria-label="Placeholder: 500x500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500" className="bd-placeholder-img  bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="https://i.pinimg.com/564x/3b/59/5d/3b595dd4a382006c3c8a383551e65df5.jpg" ></img>
                       
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                    <img alt="main page image of anime variant" aria-label="Placeholder: 500x500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500" className="bd-placeholder-img  bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="https://i.pinimg.com/564x/14/da/fc/14dafcb6265f227c358bcae0bfcb31ef.jpg" ></img>
                       
                    </div>
                </div>

                <hr className="featurette-divider"/>

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                        </div>
                        <div className="col-md-5">
                        <img alt="main page image of anime variant" aria-label="Placeholder: 500x500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500" className="bd-placeholder-img  bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="https://i.pinimg.com/564x/44/78/e3/4478e3fdeaf3551fb60d63ed1442e4c8.jpg" ></img>
                       
                        </div>
                    </div>

                    <hr className="featurette-divider"/>


                </div>
            </main>

                );
}

                export default LandingPage;

