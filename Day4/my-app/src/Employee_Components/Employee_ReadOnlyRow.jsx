import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Name}</td>
      <td>{contact.Adress}</td>
      <td>{contact.Email}</td>
      <td>{contact.Hire_date}</td>
      <td>{contact.Salary}</td>
      <td>{contact.Job_Title}</td>
      <td>{contact.projectId}</td>
      <td>
        <button
          type="button"
          className="btn edit"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn delete"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
