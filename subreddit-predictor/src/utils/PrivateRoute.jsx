import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) =>
  localStorage.getItem("token") ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
