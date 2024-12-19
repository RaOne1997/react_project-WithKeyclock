import React, { useState } from 'react';
import './userInformation.css';
function UserInformation() {
  const currentdate = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  const formattedDate = currentdate.toLocaleDateString('en-US', options);
  const formattedTime = currentdate.toLocaleTimeString('en-US', timeOptions);
  const [buttonText, setButtonText] = useState('Check in');
  const [buttonClass, setButtonClass] = useState('btn btn-primary');

  const checkInClicked = () => {
    if (buttonText === 'Check in') {
      setButtonText('Check Out');
      setButtonClass('btn btn-danger');
    } else {
      setButtonText('Check in');
      setButtonClass('btn btn-primary');
    }
  };

  return (
    <div className='container-fluid bg-white h-100 UserprofileBody'>
      <div className="row pt-3">
        <div className="col-6 ">
          <div className='d-flex  font-weight-bolder'>
            <span className='pr-2'>
              <img src="https://uat.intimepro.io/assets/common/images/photos/Dashboard_title.png" alt="" className=" image" />
            </span>
            <span className='welcoemText'> Welcome Back,</span>

          </div>
          <div className="d-flex ps-3 ">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="profilePic" />
            <span className='d-flex '> <p><h5>John Does</h5></p> <small className='ms-2 marg' >{formattedDate} | Pune</small> </span>

          </div>
          <div className="d-flex">
            <button className={`${buttonClass} desigen mb-2`} onClick={checkInClicked}>
              <div className='row'>
                <div className="col-3">
                  <img src="https://uat.intimepro.io/assets/common/images/Activities/AlarmIconDash.svg" alt="" className='clockIcon' />
                </div>
                <div className="col-6">
                  <div className='test text-white'>{buttonText}</div>
                  <div className='test '>{formattedTime}</div>
                </div>

              </div>
            </button>
            <div className='ms-5'>
              <span className='font-weight-bolder text-primary line-height-sm fs-4 '>{formattedTime}</span><br />
              <small>Active Time</small>
            </div>
          </div>
          <div className='d-flex ms-4 '>
            <div className='leftlarge-dot '>
              <i className="bi bi-dot text-danger rightdot"></i>
              <span className='startend'>6:01 PM</span>
            </div>
            <div className="progress progressbarsetting" role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-bar" style={{ width: `${50}%` }}></div>
            </div>
            <div className='leftlarge-dot '>
              <i className="bi bi-dot text-danger rightdot   "></i>
              <span className='startend mr-2'>6:01 PM</span>
            </div>
          </div>

          <div className="alert alert-primary w-75 " role="alert">
            A simple primary alert—check it out!
          </div>
        </div>

        <div className="col-6">
          <img src="https://uat.intimepro.io/assets/common/images/photos/Dashboard_CurrentProject.svg" alt="" />
        <span> Current Project</span>s
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
