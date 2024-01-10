import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About() {
    return (
        <div>
            <Header />
            <div class="main-layout">
                <div class="back_re">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="about_img">
                                    <figure><img src="images/owner.jpeg" style={{ width: "100%" }} alt="#" /></figure>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="titlepage">
                                    <h1>Welcome to Hotel Ranjai: A Vision by Shrikant Lohkare</h1>
                                    <p class="margin_0">Our Founder:
                                        Shrikant Lohkare, a name synonymous with innovation and hospitality, envisioned Hotel Ranjai as a testament to his unwavering commitment to creating spaces that redefine luxury. His foresight and dedication are woven into the very fabric of Ranjai, ensuring a stay that transcends expectations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="titlepage">
                                    <h3>Inception:</h3>
                                    <p class="margin_0">
                                        August 2023 marks the inception of Hotel Ranjai, a chapter in the realm of hospitality that promises an unparalleled experience. From the moment our doors opened, we embarked on a journey to provide a haven where comfort, elegance, and personalized service converge seamlessly.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="titlepage">
                                    <h3>A Culinary Journey:</h3>
                                    <p class="margin_0">Savor the culinary delights at Hotel Ranjai, where our chefs transform every meal into a gastronomic masterpiece. From local flavors to international cuisine, our dining experiences are crafted to tantalize your taste buds and elevate your stay.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="titlepage">
                                    <h3>Our Promise to Sustainability:</h3>
                                    <p class="margin_0">
                                    Hotel Ranjai is dedicated to environmental responsibility. We integrate sustainable practices, from energy-efficient systems to waste reduction initiatives, to minimize our ecological impact. Embracing a commitment to the planet, we strive to make your stay eco-conscious without compromising on luxury.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="titlepage">
                                    <h3>Your Experience Awaits:</h3>
                                    <p class="margin_0"> Step into a world of refined elegance and warm hospitality at Hotel Ranjai. Whether you're here for business or leisure, our commitment is to provide an experience that exceeds expectations. Embrace the essence of Ranjai, where every detail reflects our dedication to creating memories that linger long after your stay.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default About;