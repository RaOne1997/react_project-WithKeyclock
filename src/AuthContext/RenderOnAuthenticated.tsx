import React from 'react';
import UserService from '../keyclock/KeyclockConfig';

const RenderOnAuthenticated = ({ children }: { children: React.ReactNode }) => {
  return UserService.isLoggedIn() ? <>{children}</> : null;
};

const RenderOnAnonymous = ({ children }: { children: React.ReactNode }) => {
  return !UserService.isLoggedIn() ? <>{children}</> : null;
};

const AuthContext = { RenderOnAnonymous, RenderOnAuthenticated };

export default AuthContext;