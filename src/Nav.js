import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";


const Nav = () => {

    return (
      <nav>
        <h2>
          <Link to="/" className="HeroLink">
            Nosotros
          </Link>
        </h2>
        <ul className="header-nav-list">
          <li>
            <Link to="/posts" className="HeroLink">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="HeroLink">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Nav;
