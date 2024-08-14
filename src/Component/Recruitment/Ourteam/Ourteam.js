// import React from 'react'
// import "./Ourteam.css";
// import teamimg1 from "../../Asset/Team1.png";
// import teamimg2 from "../../Asset/Team2.png";
// import teamimg3 from "../../Asset/Team3.png";

// function Ourteam() {
//   return (
// <div className='container-fluid teambg text-center text-light mt-5 bg-info'>
// <h1 className='pt-5'>Build Your Best Team With Us</h1>
// <p>Unlock your organization's potential with our personalized staffing solutions.<br/>
// We bring a human touch to hiring, ensuring you find the perfect fit for every role</p>

// <div className='row p-5 mt-5 '>
//    <div className='col-sm-12 col-md-4'>
// <div className="card curvedpart bg-light h-100 " >
//   <img src={teamimg1} className="card-img-top " alt="Card Image" />
//   <div className="card-body bg-dark ">
//     <h5 className="card-title text-light bordertext">Blue-collar professionals</h5>
//     <ul className="card-text listtext text-start">
//       <li>Skilled Roles</li>
//     </ul>
//   </div>
// </div>
// </div>
// <div className='col-sm-12  col-md-4'>
// <div className="card curvedpart bg-light h-100" >
//   <img src={teamimg2} className="card-img-top " alt="Card Image" />
//   <div className="card-body bg-dark ">
//     <h5 className="card-title text-light" style={{ borderBottom: "2px solid #fff", paddingBottom: "5px" }}>Healthcare professionals</h5>
//     <ul className="card-text listtext text-start">
//       <li>Nursing</li>
//       <li>Physiotherapy</li>
//       <li>White-collar professionals</li>
//     </ul>
//   </div>
// </div>
// </div>

// <div className='col-sm-12 col-md-4'>
// <div className="card curvedpart bg-light h-100" >
//   <img src={teamimg3} className="card-img-top " alt="Card Image" />
//   <div className="card-body bg-dark ">
  
//     <h5 className="card-title text-light">White-collar professionals</h5>
    
//     <ul className="card-text listtext text-start">
//       <li>IT Roles</li>
//       <li>Non-IT Roles</li>
//     </ul>
//   </div>
// </div>
// </div>
// </div>
// </div>
//   )
// }

// export default Ourteam




import React from 'react';
import "./Ourteam.css";
import teamimg1 from "../../Asset/Team1.png";
import teamimg2 from "../../Asset/Team2.png";
import teamimg3 from "../../Asset/Team3.png";

function Ourteam() {
  return (
    <div className='container-fluid teambg text-center text-light mt-5 bg-info'>
      <h1 className='pt-sm-0 pt-lg-5'>Build Your Best Team With Us</h1>
      <p>
        Unlock your organization's potential with our personalized staffing solutions.<br />
        We bring a human touch to hiring, ensuring you find the perfect fit for every role
      </p>

      <div className='row p-sm-0 mt-5 teambasicpart'>
        <div className='col-sm-12 col-md-4'>
          <div className="card curvedpart bg-light h-100 teambox">
            <img src={teamimg1} className="card-img-top" alt="Card Image" />
            <div className="card-body bg-dark teambody">
              <h5 className="card-title text-light bordertext">Blue-collar professionals</h5>
              <ul className="card-text listtext text-start text-light">
                <li>Skilled Roles</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4'>
          <div className="card curvedpart bg-light h-100 teambox">
            <img src={teamimg2} className="card-img-top" alt="Card Image" />
            <div className="card-body bg-dark teambody">
              <h5 className="card-title text-light" style={{ borderBottom: "2px solid #fff", paddingBottom: "5px" }}>Healthcare professionals</h5>
              <ul className="card-text listtext text-start">
                <li>Nursing</li>
                <li>Physiotherapy</li>
                <li>White-collar professionals</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4'>
          <div className="card curvedpart bg-light h-100 teambox">
            <img src={teamimg3} className="card-img-top" alt="Card Image" />
            <div className="card-body bg-dark teambody">
              <h5 className="card-title text-light">White-collar professionals</h5>
              <ul className="card-text listtext text-start">
                <li>IT Roles</li>
                <li>Non-IT Roles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourteam;
