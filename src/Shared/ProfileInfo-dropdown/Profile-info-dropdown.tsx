
import { useEffect, useRef, useState } from "react";
import "./Profileinfodropdown.css"; // Import CSS for styling
import { loginUserDetails } from "../../Component/login/AuthResult";
import { userInfo } from "../AppConst";

type ProfileinfodropdownProps = {
    logout: () => void;
    userbasicdetails :  userInfo | null;
};

function Profileinfodropdown(props: ProfileinfodropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
  
    // Toggles the dropdown
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    };
  
    // Close dropdown when clicking outside
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);
  
    return (
      <div className="dropdown-self" ref={dropdownRef}>
        <button className="dropdown-toggle-self" onClick={toggleDropdown}>
          <img
            src={props.userbasicdetails?.profilePictureId ?? "default-profile-picture.jpg"} // Replace with your profile picture URL
            alt="Profile"
            className="profile-pic"
          />
          <span>{props.userbasicdetails?.fullName}</span>
        </button>
        {isOpen && (
          <div className="dropdown-menu-self">
            <div className="profile-header">
              <img
               src={props.userbasicdetails?.profilePictureId ?? "default-profile-picture.jpg"}  // Replace with your profile picture URL
                alt="Profile"
                className="profile-pic-large"
              />
              <h4>{props.userbasicdetails?.fullName}</h4>
              <p>1328 | {props.userbasicdetails?.userRole}</p>
              <p>{props.userbasicdetails?.emailAddress}</p>
            </div>
            <div className="profile-options">
              <a href="#profile" className="dropdown-item-self">
                <i className="icon-profile"></i> My Profile
              </a>
              <button onClick={props.logout} className="dropdown-item-self logout">
                <i className="icon-logout"></i> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Profileinfodropdown;
