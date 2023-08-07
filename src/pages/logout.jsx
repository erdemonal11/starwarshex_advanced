import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../components/userSlice";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="text">
      <button onClick={handleLogout} className=" butx but">Logout</button>
    </div>
  );
};

export default Logout;