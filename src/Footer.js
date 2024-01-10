import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className=" col-md-4">
                  <h3>Contact US</h3>
                  <ul className="conta">
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address: At post osade phata <br/> pune - panshet road</li>
                    <li><i className="fa fa-mobile" aria-hidden="true"></i> +91 7264867476</li>
                    <li><i className="fa fa-mobile" aria-hidden="true"></i> +91 9850222987</li>
                    <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#">lohakareshree3191@gmail.com</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3>Menu Link</h3>
                  <ul className="link_menu">
                    <li className="active"><a href="/">Home</a></li>
                    <li><a href="About"> about</a></li>
                    {/* <li><a href="room.html">Our Room</a></li> */}
                    <li><a href="Gallary">Gallery</a></li>
                    {/* <li><a href="blog.html">Blog</a></li> */}
                    <li><a href="Contact">Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3>News letter</h3>
                  <form className="bottom_form">
                    <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                    <button className="sub_btn">subscribe</button>
                  </form>
                  <ul className="social_icon">
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="http://wa.me/+917264867479"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                      <p>
                      © 2024 All Rights Reserved. Design by <a href="https://html.design/"> Ritesh Tagunde </a>
                      <br></br>
                        Distributed by <a href="https://themewagon.com/" target="_blank">RBT</a>
                      </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </footer>

    </div>
  )
}

export default Footer