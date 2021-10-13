import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.Project_name}</td>
      <td>{contact.Start_date}</td>
      <td>{contact.Planned_end_date}</td>
      <td>{contact.Description}</td>
      <td>{contact.Project_code}</td>
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
