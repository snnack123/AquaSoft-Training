import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "../App.css";
//import data from "./ProjectData.json";
import ReadOnlyRow from "./Project_ReadOnlyRow";
import EditableRow from "./Project_EditableRow";
import Axios from "axios";

const Projects = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Project_name: "",
    Start_date: "",
    Planned_end_date: "",
    Description: "",
    Project_code: "",
  });

  const [editFormData, setEditFormData] = useState({
    Project_name: "",
    Start_date: "",
    Planned_end_date: "",
    Description: "",
    Project_code: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:5000/projects").then((res) => {
      setContacts(res.data);
    });
  }, []);

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
      project_name: addFormData.Project_name,
      start_date: addFormData.Start_date,
      planned_end_date: addFormData.Planned_end_date,
      description: addFormData.Description,
      project_code: addFormData.Project_code,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    Axios.post("http://localhost:5000/projects/add", newContact).then(() => {
      alert("Succesful insert!");
    });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Project_name: editFormData.Project_name,
      Start_date: editFormData.Start_date,
      Planned_end_date: editFormData.Planned_end_date,
      Description: editFormData.Description,
      Project_code: editFormData.Project_code,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);

    Axios.put(
      `http://localhost:5000/projects/update/${editContactId}`,
      editedContact
    ).then(() => {
      alert("Succesful edit!");
    });
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Project_name: contact.Project_name,
      Start_date: contact.Start_date,
      Planned_end_date: contact.Planned_end_date,
      Description: contact.Description,
      Project_code: contact.Project_code,
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

    Axios.delete(`http://localhost:5000/projects/delete/${contactId}`).then(
      () => {
        alert("Succesful delete!");
      }
    );
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nume Proiect</th>
              <th>Data Inceput</th>
              <th>Data Sfarsit</th>
              <th>Descriere</th>
              <th>Cod Proiect</th>
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
      <h1>Adaugare Proiect</h1>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Project_name"
          required="required"
          placeholder="Nume Proiect"
          onChange={handleAddFormChange}
        />
        <div className="tooltip">
          <input
            type="date"
            name="Start_date"
            required="required"
            onChange={handleAddFormChange}
          />
          <span className="tooltiptext">Data Inceput</span>
        </div>

        <div className="tooltip">
          <input
            type="date"
            name="Planned_end_date"
            required="required"
            onChange={handleAddFormChange}
          />
          <span className="tooltiptext">Data Sfarsit</span>
        </div>
        <input
          type="text"
          name="Description"
          placeholder="Descriere"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Project_code"
          required="required"
          placeholder="Cod Proiect"
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Projects;
