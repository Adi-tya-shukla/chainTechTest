import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const ProtectedRoute = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
