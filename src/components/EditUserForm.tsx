import "../styles/editUserForm.scss";

const EditUserForm = () => {
  return (
    <div className="editUserForm">
      <div className="editUserForm_content">
        <h3>Change your data</h3>

        <label htmlFor="">UserName</label>
        <input type="text" />

        <label htmlFor="">Password</label>
        <input type="password" />

        <p>On this section i have made a design mistake on the backend</p>
        <p>This form has no functionality</p>
      </div>
    </div>
  );
};

export default EditUserForm;
