import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Nume Proiect"
          name="Project_name"
          value={editFormData.Project_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Data Inceput"
          name="Start_date"
          value={editFormData.Start_date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Data Sfarsit"
          name="Planned_end_date"
          value={editFormData.Planned_end_date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Description"
          placeholder="Descriere"
          value={editFormData.Description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Cod Proiect"
          name="Project_code"
          value={editFormData.Project_code}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="btn save">
          Save
        </button>
        <button
          type="button"
          className="btn cancel"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
