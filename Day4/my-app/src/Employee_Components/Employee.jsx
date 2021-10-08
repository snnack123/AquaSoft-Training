import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import ReadOnlyRow from "./Employee_ReadOnlyRow";
import EditableRow from "./Employee_EditableRow";
import Axios from "axios";

const Employees = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Adress: "",
    Email: "",
    Hire_date: "",
    Salary: "",
    Job_Title: "",
    projectId: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Adress: "",
    Email: "",
    Hire_date: "",
    Salary: "",
    Job_Title: "",
    projectId: "",
  });
  //useEffect: permite să efectuez efecte secundare în componentele funcției
  //update la DOM folosing API
  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:5000/employees").then((res) => {
      setContacts(res.data);
    });
  }, []);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    //.preventDefault(): metoda anulează evenimentul dacă este anulabil, ceea ce înseamnă că acțiunea implicită care aparține evenimentului nu va avea loc.
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.Name,
      adress: addFormData.Adress,
      email: addFormData.Email,
      hire_date: addFormData.Hire_date,
      salary: addFormData.Salary,
      job_title: addFormData.Job_Title,
      projectId: addFormData.projectId,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    Axios.post("http://localhost:5000/employees/add", newContact).then(() => {
      alert("Succesful insert!");
    });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Adress: editFormData.Adress,
      Email: editFormData.Email,
      Hire_date: editFormData.Hire_date,
      Salary: editFormData.Salary,
      Job_Title: editFormData.Job_Title,
      projectId: editFormData.projectId,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);

    Axios.put(
      `http://localhost:5000/employees/update/${editContactId}`,
      editedContact
    ).then(() => {
      alert("Succesful edit!");
    });
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: contact.Name,
      Adress: contact.Adress,
      Email: contact.Email,
      Hire_date: contact.Hire_date,
      Salary: contact.Salary,
      Job_Title: contact.Job_Title,
      projectId: contact.projectId,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);
    //findIndex: imi returneaza primul element dintr-o lista care indeplineste conditia
    newContacts.splice(index, 1);
    //splice: metoda modifică conținutul unui tablou prin eliminarea sau înlocuirea elementelor existente și / sau adăugarea de elemente noi în loc
    setContacts(newContacts);

    Axios.delete(`http://localhost:5000/employees/delete/${contactId}`).then(
      () => {
        alert("Succesful delete!");
      }
    );
  };
  //map: creează o nouă matrice populată cu rezultatele apelării unei funcții furnizate pe fiecare element din matricea de apelare.
  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nume</th>
              <th>Adresa</th>
              <th>Email</th>
              <th>Data Angajare</th>
              <th>Salariu</th>
              <th>Job</th>
              <th>Id Proiect</th>
              <th>Actiuni</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h1>Adaugare Angajat</h1>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Nume Angajat"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Adress"
          required="required"
          placeholder="Adresa"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="Email"
          required="required"
          placeholder="Email"
          onChange={handleAddFormChange}
        />
        <div className="tooltip">
          <input
            type="date"
            name="Hire_date"
            required="required"
            onChange={handleAddFormChange}
          />
          <span className="tooltiptext">Data Angajare</span>
        </div>
        <input
          type="text"
          name="Salary"
          required="required"
          placeholder="Salariu"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Job_Title"
          required="required"
          placeholder="Job"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="projectId"
          required="required"
          placeholder="Id Proiect"
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Employees;
