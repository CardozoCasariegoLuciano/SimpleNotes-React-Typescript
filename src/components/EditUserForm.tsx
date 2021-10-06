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

        <p> Para esta sección cometí un error de diseño en el backend</p>
        <p>Este formulario no tiene funcionalidad</p>
      </div>
    </div>
  );
};

export default EditUserForm;
