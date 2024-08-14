
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faFacebook,faInstagram,faYoutube,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import kgisllogo from '../../Asset/kgisl-logo.png';
import { Link as Sclink } from "react-scroll";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
export function FooterIT(){
    return(
        <>
            <div className="container-fluid footerbg text-white" id="footerforit">
                <div className="row">
                    <div className="col-lg-3 pt-5 oldfooter">
                        <h3>Quick View</h3>
                        <p> <Sclink activeClass="active" to="hrbanner" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Home</Sclink></p>
                        <p><Sclink to="aboutpart" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">About Us</Sclink></p>
                        <p> <Sclink to="sectorspart" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Sectors</Sclink></p>
                        <p> <Sclink to="clientus" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Why Us</Sclink></p>
                        <p> <Sclink to="corevalue" spy={true} smooth={true} duration={500} className="active text-white ft text-decoration-none" aria-current="page">Core Values</Sclink></p>
                        <p> <Sclink to="contact" spy={true} smooth={true} duration={500} className="text-white ft text-decoration-none">Contact Us</Sclink></p>
                    </div>
                    <div className="col-lg-5 pt-5 mt-4">
                        <h3>Contact Us</h3>
                        <div className="container-fluid">
                            <div className="row">
                                <div>
                                </div>
                                <div>                                  
                                </div>
                                <p className="col-lg-6">
                                    <p>
                                        <span class="city">
                                            <b>Coimbatore</b>                          
                                        </span>
                                        <br/>
                                            KGISL Campus, <br/>
                                            365 Thudiyalur Road,<br/>
                                            Saravanampatti,<br/>
                                            Coimbatore – 641035, <br/>
                                            Tamil Nadu, India.
                                    </p>
                                </p>
                                <p className="col-lg-6">
                                    <p>
                                            <span class="city">
                                            <b>Dubai</b>     
                                            </span>
                                        <br/>
                                            Ideaspace Business Center, <br/>
                                            Millennium Executive Tower,<br/>
                                            Sheikh Zayed Road,<br/>
                                            Dubai-United Arab Emirates
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className=" d-flex justify-content-between col-lg-6 mt-5 text-light">
                        <a href="tel:9363466093"><FontAwesomeIcon icon={faPhone} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="mailto:info@kggeniuslabs.com"><FontAwesomeIcon icon={faEnvelope} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/kggeniuslabs/"><FontAwesomeIcon icon={faInstagram} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.linkedin.com/in/kg-genius-labs-3a73152a8/"><FontAwesomeIcon icon={faLinkedin} className="hoverani text-white"></FontAwesomeIcon></a>
                        <a href="https://www.facebook.com/people/KG-Geniuslabs/pfbid02QCbE8JcAes9juSSiChZ9NevWgGuUAhWjch68nJ8XSUCsSEfJBcadSXZ44EirVJY4l/"><FontAwesomeIcon icon={faFacebook} className="hoverani text-white"></FontAwesomeIcon></a>
                        </div>
                        <p>A Division of</p>
                        <a href="https://www.kgisl.com/"><img src={kgisllogo}  className="col-lg-6 col-6 "/></a>     
                    </div>
                </div>
                <hr/>
                <p className="text-center">Copyright © 2024  KGGL. All Right Reserved.</p>
            </div>
        </>
    );
}