import React from "react";
import "./App.css";
const NavbarRegister = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li>
              <a href="/Register">Inregistrare</a>
            </li>
            <li>
              <a href="/Login">Autentificare</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarRegister;
