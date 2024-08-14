import React from 'react';
import './Banner.css';
import arrowim from "../../Asset/arrow.png"
import { Link as Sclink } from 'react-scroll';

function Banner() {
  return (
    <div className='container-fluid bannerbackground' id='hrbanner'>
      <div className='d-flex flex-column justify-content-center align-items-start'>
        <h1 className='text-light paratext'>
          We're <span style={{fontWeight: "bold"}}>The Human</span> In <br />
          Your <span style={{fontWeight: "bold"}}>Human Resources</span>
        </h1>
       
        <Sclink activeClass="active" to="contact" spy={true} smooth={true} duration={100} className="nav-link active " aria-current="page"><button className="bannerbutton px-3 py-1 rounded-5"> <img src={arrowim} className='pb-1' alt='->'/>Get Started </button></Sclink>
      </div>
    </div>
  );
}

export default Banner;
