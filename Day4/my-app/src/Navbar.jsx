import React from "react";
import "./App.css";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li>
              <a href="/Employee">Tabela Angajati</a>
            </li>
            <li>
              <a href="/Project">Tabela Proiecte</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
