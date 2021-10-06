import "../styles/formNotes.scss";
const FormNotes = () => {
  return (
    <div className="formNotes">
      <div className="formNotes_content">
        <form action="">
          <h3>Add a new note</h3>
          <label htmlFor="title">Title</label>
          <input type="" id="title"/>

          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>

          <button>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default FormNotes;
