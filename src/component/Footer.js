import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./Loader";

export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="footer_main_conatiner">
      <div className="cursor"></div>
      <div className="footer_container">
        <div
          className="footer_Location"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <h1>LOcation</h1>
          <p>
            <i class="fas fa-map-marker-alt"></i> Kerala
          </p>
        </div>
        <div
          className="footer_aroundweb"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3500"
        >
          <h1>around the web</h1>
          <div className="footer_icons">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
        <div
          className="footer_about"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <h1>ABOUT</h1>
          <p>Deliciousness jumping into the mouth</p>
        </div>
      </div>
      <div className="footer_loader">
      </div>
      <div className="loader_footer">

        <Loader />
      
       
      </div>
    </div>
  );
}
