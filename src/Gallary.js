import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Gallary() {
  return (
    <div>
        <Header/>
        
        <div class="back_re">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                    <h2>Gallery</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div  class="Gallary">
         <div class="container">
           
            <div class="row">
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/Gallary1.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/Gallary2.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/Gallary3.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/Gallary4.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/room1.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/room2.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/room3.jpeg" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Gallary_img">
                     <figure><img src="images/room4.jpeg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    

        <Footer/>
    </div>
  )
}

export default Gallary