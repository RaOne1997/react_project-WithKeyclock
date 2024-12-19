import React, { useEffect, useState } from 'react';
import './topheader.css';
import { loginUserDetails } from '../../Component/login/AuthResult';
import { useAuth } from '../../AuthContext/AuthContext';
import Profileinfodropdown from '../ProfileInfo-dropdown/Profile-info-dropdown';
import { GeCurretUser } from '../../Service Proxey/loginAppservice';
import App from '../../App';
import { AppConst, userInfo } from '../AppConst';


type topbarheaderProps = {
  isSidebarCollapsed: boolean;
};

function TopbarheaderComponent(props: topbarheaderProps) {
  const { logout } = useAuth();
  const [userDetails, setUserDetails] = useState(AppConst.CurrentUserDetails);

  useEffect(() => {
    if (!userDetails) {
      GeCurretUser().then((response) => {
        var abc = new userInfo(response.result.user.emailAddress, response.result.user.id, response.result.user.name, response.result.user.surname, response.result.user.userName, response.result.user.userRole, response.result.user.profilePictureId);
        AppConst.CurrentUserDetails = abc;
        setUserDetails(AppConst.CurrentUserDetails)
        console.log(AppConst.CurrentUserDetails);
      });
    }
    else {
      console.log("User is null");
      console.log(AppConst.CurrentUserDetails);
    }
  }, [userDetails]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div className={`topbar ${props.isSidebarCollapsed ? 'collapsedtopbar' : ''}`}>
      <div className="breadcrumb">
        <span>Home</span> / <span>{props.isSidebarCollapsed}</span> / <span>Analytics</span>
      </div>
      <Profileinfodropdown logout={logout} userbasicdetails={AppConst.CurrentUserDetails} />
    </div>
  );
}

export default TopbarheaderComponent;