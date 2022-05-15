import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import { logout, selectUser, selectUsername } from "redux/reducers/authReducer";
import { deleteCookie } from "util/cookies";

const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    deleteCookie("token");
    return <Navigate to="/" />;
  };

  return (
    <div>
      {username ? (
        <Link to={`/charlist/${username}`}>charlist</Link>
      ) : (
        <Link to={"/"}>sign in</Link>
      )}
      {/* <Link to={"/char"}>char</Link> */}

      {location.pathname !== "/" && (
        <button onClick={handleLogout}>logout</button>
      )}
    </div>
  );
};

export default Navbar;
