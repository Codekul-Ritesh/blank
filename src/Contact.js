import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
    return (

        <div>
            <Header />
            <div class="main-layout">
                <div class="back_re">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact">
                    <div className="container">
                       
                        <div className="row">
                            <div className="col-md-6">
                                <form id="request" className="main_form">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <input className="contactus" placeholder="Name" type="type" name="Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Email" type="type" name="Email" />
                                        </div>
                                        <div className="col-md-12">
                                            <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="send_btn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="map_main">
                                    <div className="map-responsive">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.0670966457187!2d73.68084337518849!3d18.389797182678556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDIzJzIzLjMiTiA3M8KwNDEnMDAuMyJF!5e0!3m2!1sen!2sin!4v1704776581146!5m2!1sen!2sin" width="600" height="400" style={{ border: '0px', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0" style={{ border: '0px', width: '100%' }} allowfullscreen=""></iframe> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
}

export default Contact;