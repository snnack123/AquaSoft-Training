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
          placeholder="Numele"
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Adresa"
          name="Adress"
          value={editFormData.Adress}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Email"
          name="Email"
          value={editFormData.Email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          name="Hire_date"
          value={editFormData.Hire_date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Salariu"
          name="Salary"
          value={editFormData.Salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Job"
          name="Job_Title"
          value={editFormData.Job_Title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Id Proiect"
          name="projectId"
          value={editFormData.projectId}
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
