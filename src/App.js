import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';



function App() {
  return (
    <div>
     
     <div className="main-layout">

        <Header />

        <section className="banner_main">
          <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="first-slide" src="images/Gallary2.jpeg" alt="First slide" />
                <div className="container">
                </div>
              </div>
              <div className="carousel-item">
                <img className="second-slide" src="images/banner22.jpeg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="third-slide" src="images/banner33.jpeg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </section>

        <div className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="titlepage">
                  <h2>About Us</h2>
                  <h3>Welcome to Hotel Ranjai: A Vision by Shrikant Lohkare</h3>
                  <p>                                        August 2023 marks the inception of Hotel Ranjai, a chapter in the realm of hospitality that promises an unparalleled experience. From the moment our doors opened, we embarked on a journey to provide a haven where comfort, elegance, and personalized service converge seamlessly.
 </p>
                  <a className="read_more" href="About"> Read More</a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="about_img">
                  <figure><img src="images/about.jpeg" alt="#" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>gallery</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary1.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary2.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary3.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/Gallary4.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/banner11.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/banner22.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/banner33.jpeg" alt="#" /></figure>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="gallery_img">
                  <figure><img src="images/about.jpeg" alt="#" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h1>रानजाई</h1>
                  <h1 style={{ color: 'white' }}>फॅमिली गार्डन ॲण्ड रिसॉर्ट </h1>
                  <h3 style={{ color: 'whitesmoke' }}>चुलीवरची अस्सल गावराण चव</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure><img src="images/blog1.jpeg" alt="#" /></figure>
                  </div>
                  <div className="blog_room">
                    <h3>Food</h3>
                    <span>चुलीवरची अस्सल गावराण चव </span>
                    <p>It was a very satisfying meal. </p>
                    <p>That was a delicious meal.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure><img src="images/room6.jpg" alt="#" /></figure>
                  </div>
                  <div className="blog_room">
                    <h3>Bed Room</h3>
                    <span>Perfect for one-day-night stay!</span>
                    <p>A couple-friendly property (couples who are unmarried and/or have local IDs are welcome)  </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="blog_img">
                    <figure><img src="images/parking.jpeg" alt="#" /></figure>
                  </div>
                  <div className="blog_room">
                    <h3>Parking</h3>
                    <span>Smooth parking experience for smoother journey ahead.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3786.0670966457187!2d73.68084337518849!3d18.389797182678556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDIzJzIzLjMiTiA3M8KwNDEnMDAuMyJF!5e0!3m2!1sen!2sin!4v1704776581146!5m2!1sen!2sin" width="400" height="300" style={{ border: '0px', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default App;
