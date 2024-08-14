import React from 'react';
import questionmarkimg from "../Asset/question.png";
import "./Discover.css";

function Discover() {
  return (
    <div className='container-fluid bgdiscover'>
      <div className='row'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
      <h1 className='discovertext'>Let Us Help You <br/>Discover</h1>
      <img src={questionmarkimg} className='qimg ms-3 mt-5' alt='Question Mark' draggable="false"/>
      </div>
      <div className='row'>
     <div className='d-flex'>
        <div className='teambox d-flex flex-column justify-content-start align-items-start p-2 mb-5'>
          <p className='auto-typing'>Do you have the right team?</p>
        </div>
        <div className='dotbox mt-5 mx-1'></div>
        <div className='dotbox mt-5'></div>
        <div className='dotbox mt-5 mx-1'></div>
        </div>
      </div>
      </div>
     
    </div>
    </div>
  )
}

export default Discover;
