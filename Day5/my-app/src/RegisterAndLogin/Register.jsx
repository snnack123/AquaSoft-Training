import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavbarRegister from "../NavbarRegister";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Username: "",
    Password: "",
    Email: "",
    Adress: "",
  });
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      history.push("/Home");
    }
  });
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
      name: addFormData.Name,
      username: addFormData.Username,
      password: addFormData.Password,
      email: addFormData.Email,
      adress: addFormData.Adress,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    //modifici state-ul componentei si isi da din nou render

    Axios.post("http://localhost:5000/accounts/add", newContact)
      .then(() => {
        alert("Succesful insert!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavbarRegister />
      <div className="loginForm">
        <form action="/action_page.php" onSubmit={handleAddFormSubmit}>
          <div className="container">
            <h1 className="form_title">Inregistrare utilizator</h1>
            <hr />
            <label for="Name">Nume</label>
            <input
              type="text"
              placeholder="Numele"
              name="Name"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <label for="Username">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <label for="Password">Parola</label>
            <input
              type="password"
              placeholder="Scrie parola"
              name="Password"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <label for="Email">Email</label>
            <input
              type="text"
              placeholder="Scrie Email"
              name="Email"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <label for="Adress">Adresa</label>
            <input
              type="text"
              placeholder="Adresa"
              name="Adress"
              required="required"
              className="loginInput"
              onChange={handleAddFormChange}
            ></input>
            <button type="submit" className="loginbtn">
              Inregistrare
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
