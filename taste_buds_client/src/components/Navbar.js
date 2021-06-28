import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ currentUser, destroySession }) {

  function handleSignOut(){
    destroySession()}
  return (
    <nav
      style={{
        padding: "10px",
        display: "flex",
      }}
    >
      <NavLink style={{ marginRight: "20px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/recipes">
        Recipes
      </NavLink>
      <NavLink style={{ marginRight: "20px" }} to="/recipes/new">
        New Recipe
      </NavLink>
      {currentUser ? (
        <React.Fragment>
          <span style={{ marginRight: "20px" }} >Welcome, {currentUser.first_name}</span>
          <button style={{ marginRight: "20px" }}  onClick={handleSignOut}>Sign Out</button>
        </React.Fragment>
      ) : (
        <>
          <NavLink style={{ marginRight: "20px" }} to="/sign_in">
            Sign In
          </NavLink>

          <NavLink style={{ marginRight: "20px" }} to="/sign_up">
            Sign Up
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
