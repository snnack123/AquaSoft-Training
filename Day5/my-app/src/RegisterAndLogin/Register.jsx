import React, { useState } from "react";
import "../css.css";
import Axios from "axios";

const Register = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Username: "",
    Password: "",
    Email: "",
    Adress: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    //.preventDefault(): metoda anulează evenimentul dacă este anulabil, ceea ce înseamnă că acțiunea implicită care aparține evenimentului nu va avea loc.
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
    <div className="registerForm">
      <form action="/action_page.php" onSubmit={handleAddFormSubmit}>
        <div className="container">
          <h1>Inregistrare utilizator</h1>
          <hr />
          <label for="Name">
            <b>Nume</b>
          </label>
          <input
            type="text"
            placeholder="Numele"
            name="Name"
            required="required"
            onChange={handleAddFormChange}
          ></input>
          <label for="Username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Username"
            name="Username"
            required="required"
            onChange={handleAddFormChange}
          ></input>
          <label for="Password">
            <b>Parola</b>
          </label>
          <input
            type="password"
            placeholder="Scrie parola"
            name="Password"
            required="required"
            onChange={handleAddFormChange}
          ></input>
          <label for="Email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Scrie Email"
            name="Email"
            required="required"
            onChange={handleAddFormChange}
          ></input>
          <label for="Adress">
            <b>Adresa</b>
          </label>
          <input
            type="text"
            placeholder="Adresa"
            name="Adress"
            required="required"
            onChange={handleAddFormChange}
          ></input>
          <button type="submit" className="registerbtn">
            Inregistrare
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
