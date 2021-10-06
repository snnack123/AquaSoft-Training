import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "./EmployeeData.json";
import ReadOnlyRow from "./Employee_ReadOnlyRow";
import EditableRow from "./Employee_EditableRow";

const Employees = () => {
  const [contacts, setContacts] = useState(data);
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

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

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
      Name: addFormData.Name,
      Adress: addFormData.Adress,
      Email: addFormData.Email,
      Hire_date: addFormData.Hire_date,
      Salary: addFormData.Salary,
      Job_Title: addFormData.Job_Title,
      projectId: addFormData.projectId,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
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

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

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
