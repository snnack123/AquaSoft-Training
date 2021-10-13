import React from "react";
import "./App.css";
const NavbarTables = () => {
  const deconectare = (event) => {
    localStorage.clear();
    console.log("GATA");
  };
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li>
              <a href="/Home">Acasa</a>
            </li>
            <li>
              <a href="/Employee">Angajati</a>
            </li>
            <li>
              <a href="/Project">Proiecte</a>
            </li>
            <li>
              <a href="/Login" onClick={deconectare}>
                Log out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavbarTables;
