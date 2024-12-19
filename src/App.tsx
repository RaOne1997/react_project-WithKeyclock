import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import SidebarComponent from './Shared/SideBarComponent/Side-bar-Component';
import TopbarheaderComponent from './Shared/Topbar/top-bar-headerComponent';
import RoutesOutlet from './Component/Routercomoponet';
import { useAuth } from './AuthContext/AuthContext';
import AuthContext from './AuthContext/RenderOnAuthenticated';
import UserService from './keyclock/KeyclockConfig';
import DashBoardComponent from './Component/Dashboard-Component/DashBoard-COmponent';

function App(store: any) {
  const { isAuthenticated, loginUserDetails } = useAuth(); // Get authentication state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  const handleNotFound = () => {
    setIsNotFound(true);
  };

  return (
    // <Router>
    //   <div className="App">
    //     {!isNotFound && isAuthenticated && ( // Show sidebar and topbar only if authenticated
    //       <>
    //         <SidebarComponent isCollapsed={isSidebarCollapsed} toggleSidebarmain={toggleSidebar} />
    //         <TopbarheaderComponent isSidebarCollapsed={isSidebarCollapsed}  />
    //       </>
    //     )}

    //     <div className={ !isNotFound && isAuthenticated  ?`content ${isSidebarCollapsed ? 'collapsedcontent' : ''}`: ''}>
    //       <RoutesOutlet onNotFound={handleNotFound} />
    //     </div>
    //   </div>
    // </Router>

    <BrowserRouter>
      <AuthContext.RenderOnAuthenticated>
        LOGIN SUCCESSFUL {UserService.getUsername()}
        <button onClick={() => { UserService.doLogout() }}>Logout</button>
        <DashBoardComponent/>
        <button className="btn btn-lg btn-success" >Delete Book</button>

      </AuthContext.RenderOnAuthenticated>
      <AuthContext.RenderOnAnonymous>
        <div className="my-5 p-5 bg-body-secondary rounded-3">
          <p>
            <button className="btn btn-lg btn-success" onClick={() => UserService.doLogin()}>Login</button>
          </p>
        </div>
      </AuthContext.RenderOnAnonymous>
    </BrowserRouter>
  );
}

export default App;