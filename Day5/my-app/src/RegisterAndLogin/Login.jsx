import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavbarRegister from "../NavbarRegister";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [addFormData, setAddFormData] = useState({
    username: "",
    password: "",
  });
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      history.push("/Home");
    }
  });
  const getUser = (username, password) => {
    Axios.get(`http://localhost:5000/accounts/login/${username}&${password}`)
      .then((res) => {
        if (res.data) {
          alert("Te-ai autentificat!");
          localStorage.setItem("loggedIn", "true");
          history.push("/Home");
        } else {
          alert("Nume sau parola gresita!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();
    //.preventDefault(): oprima pagina sa dea refresh dupa ce am apasat pe butonul de submit
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    //am copiatt array-ul fara sa ii iau referinta. Shallow copy. Copie doar a continutului
    //nu si a obiectului in sine
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
    //modifici state-ul componentei si isi da din nou render
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    //.preventDefault(): metoda anulează evenimentul dacă este anulabil, ceea ce înseamnă că acțiunea implicită care aparține evenimentului nu va avea loc.
    const newContact = {
      username: addFormData.username,
      password: addFormData.password,
    };

    getUser(newContact.username, newContact.password);
    //modifici state-ul componentei si isi da din nou render
  };
  return (
    <div>
      <NavbarRegister />
      <div className="loginForm">
        <form onSubmit={handleAddFormSubmit}>
          <div className="container">
            <h1 className="form_title">Autentificare</h1>
            <hr />
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <label for="password">Parola</label>
            <input
              type="password"
              placeholder="Scrie parola"
              name="password"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <button type="submit" className="loginbtn">
              Autentificare
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
