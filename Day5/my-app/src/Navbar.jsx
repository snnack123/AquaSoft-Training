import React from "react";
import "./App.css";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li>
              <a href="/Employee">Angajati</a>
            </li>
            <li>
              <a href="/Project">Proiecte</a>
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

export default Navbar;
