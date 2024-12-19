// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import DashBoardComponent from './Dashboard-Component/DashBoard-COmponent';
// import NotFoundComponent from '../common/NotFoundComponent';

// type RoutesProps = {
//   onNotFound: () => void;
// };

// const Routescomponent: React.FC<RoutesProps> = (props) => {
//   return (
//     <Routes>
//       <Route path="/dashboard" element={<DashBoardComponent />} />
//       <Route path="/" element={<DashBoardComponent />} />
//       <Route path="*" element={<NotFoundComponent onRender={props.onNotFound} />} />
//     </Routes>
//   );
// };

// export default Routescomponent;



import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashBoardComponent from './Dashboard-Component/DashBoard-COmponent';
import NotFoundComponent from '../common/NotFoundComponent';

import AuthGuard from '../AuthContext/AuthGuard';
import { useAuth } from '../AuthContext/AuthContext';
import LoginPage from './login/Login-component';

type RoutesProps = {
  onNotFound: () => void;
};

const Routescomponent: React.FC<RoutesProps> = (props) => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage/>} />
      <Route path="/dashboard" element={<AuthGuard><DashBoardComponent /></AuthGuard>} />
      <Route path="/" element={<AuthGuard><DashBoardComponent /></AuthGuard>} />
      <Route path="*" element={<NotFoundComponent onRender={props.onNotFound} />} />
    </Routes>
  );
};

export default Routescomponent;