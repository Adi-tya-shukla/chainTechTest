import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../config/firebase";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth).then(() => {
      toast.success("Logout successful");
      navigate("/login");
    });
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
