import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { isValidNote } from "../helpers/functions";
import { useShowAlert } from "../hooks/useShowAlert";
import { IFormNote } from "../interfaces/note_Interfaces";
import { editNote, getOneNote, postNewNote } from "../services/notes";
import "../styles/formNotes.scss";

type handleChangeTypes =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>;

type ParamsProps = {
  id: string;
};

const FormNotes = () => {
  const params = useParams<ParamsProps>();
  const history = useHistory();
  const [showModal, modalText, isVisibleModal] = useShowAlert();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [note, setNote] = useState<IFormNote>({
    title: "",
    description: "",
  });

  const id = params.id;

  useEffect(() => {
    ifIsEditing();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ifIsEditing = async () => {
    if (id) {
      const resp = await getOneNote(id);

      if (resp) {
        setNote({
          title: resp.data.title,
          description: resp.data.description,
        });
        setIsEditing(true);
      } else {
        history.push("/");
      }
    }
  };

  const handleChange = (e: handleChangeTypes) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidNote(note)) {
      if (isEditing) {
        await editNote(id, note);
      } else {
        await postNewNote(note);
      }
      history.push("/");
    } else {
      const text = "Please complete all fields";
      showModal(text);
    }
  };

  return (
    <div className="formNotes">
      <div className="formNotes_content">
        <form onSubmit={handleSubmit}>
          {isEditing ? <h3>Edit note</h3> : <h3>Add a new note</h3>}
          <label htmlFor="title">Title</label>
          <input
            type=""
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={note.description}
            onChange={handleChange}
          ></textarea>

          <button>{isEditing ? "Editar" : "Crear"}</button>
        </form>

        <div className="genericAlertPosition">
          {isVisibleModal && (
            <div className="alertModalArea">
              <p>{modalText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormNotes;
