import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

const NavBar = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-commerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/shoes">Shoes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/backpack">Backpack</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <div className="buttons">
        <NavLink to="/cart">
        <a className="btn">Cart ({state.length})</a>
        </NavLink>
        </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default NavBar;
