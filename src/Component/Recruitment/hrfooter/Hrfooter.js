import React from 'react'
import "./hrfooter.css";
import { Link as Sclink } from "react-scroll";
import kgisllogo from '../../Asset/kgisl-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone,faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mailicon from "../../Asset/Mail icon.png";
function Hrfooter() {
    return (
        <div className='container-fluid hrfooterbg' id='contact'>
            <div className='row brdfooter'>
              <h1 className='text-center mt-5 mb-4'>Let's Get Started </h1>
              <div className='d-flex justify-content-center'>
              <div  className="boxforcontact">
  <input type="text" placeholder="Enter your mail ID" className='inpstyle'/>
  <img src={mailicon} alt='mailicon'  className="imgmailed pe-2"/>
</div>








</div>



  <div className='col  d-flex flex-column justify-content-center align-items-center mb-3'>
  <a href="tel:9363466093" className="text-decoration-none inpcurve1 text-center">
    <div className='iconpart my-4'>
    
      <FontAwesomeIcon icon={faPhone} />
    </div>
    <p className="centered-text">9363466093</p>
  </a>
</div>

<div className='col  d-flex flex-column justify-content-center align-items-center mb-3'>
  <a href="mailto:info@kggeniuslabs.com" className="text-decoration-none inpcurve1 text-center">
    <div className='iconpart my-4'>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
    <p className="centered-text">info@kggeniuslabs.com</p>
  </a>
</div>

<div className='col  d-flex flex-column justify-content-center align-items-center mb-3'>
  <a href="https://www.google.com/maps?q=KGISL+Campus" target="_blank" rel="noopener noreferrer" className="text-decoration-none inpcurve1 text-center">
    <div className='iconpart my-4'>
      <FontAwesomeIcon icon={faLocationDot} />
    </div>
    <p className="centered-text">KGISL Campus</p>
  </a>
</div>
</div>

            <div className='row mt-4'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h5>Quick View</h5>
                    <p> <Sclink activeClass="active" to="hrbanner" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Home</Sclink></p>
                        <p><Sclink to="aboutpart" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">About Us</Sclink></p>
                        <p> <Sclink to="sectorspart" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Sectors</Sclink></p>
                        <p> <Sclink to="clientus" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Why Us</Sclink></p>
                        <p> <Sclink to="corevalue" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Core Values</Sclink></p>
                        <p> <Sclink to="contact" spy={true} smooth={true} duration={500} className="text-white ft text-decoration-none">Contact Us</Sclink></p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h5>Coimbatore</h5>
                    <p>KGISL Campus, <br /> 365 Thudiyalur Road,<br />Saravanampatti,<br />Coimbatore – 641035, <br />Tamil Nadu, India.</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h5>Dubai</h5>
                    <p>Ideaspace Business Center, <br /> Millennium Executive Tower,<br /> Sheikh Zayed Road,<br />Dubai-United Arab Emirates</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <p className='text-light'><b>A Division of</b></p>
                    <a href="https://www.kgisl.com/"><img src={kgisllogo} className="col-lg-6 col-6 " /></a>
                    <div className='d-flex'>
                        <a href="https://www.facebook.com/people/KG-Geniuslabs/pfbid02QCbE8JcAes9juSSiChZ9NevWgGuUAhWjch68nJ8XSUCsSEfJBcadSXZ44EirVJY4l/"><FontAwesomeIcon icon={faFacebook} className="hoverani text-white mx-2"></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/kggeniuslabs/"><FontAwesomeIcon icon={faInstagram} className="hoverani text-white mx-2"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/kg-genius-labs-3a73152a8/"><FontAwesomeIcon icon={faLinkedin} className="hoverani text-white mx-2"></FontAwesomeIcon></a>
                    </div>
                </div>
                <p className="text-center">Copyright © 2024  KGGL. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Hrfooter