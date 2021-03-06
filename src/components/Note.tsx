import "../styles/note.scss";
import Swal from "sweetalert2";
import { useContext } from "react";
import { NoteContext } from "../context/notesContext";
import { loadNotes } from "../helpers/functions";
import { deleteNote } from "../services/notes";
import NoteDescription from "./NoteDescription";
import { INoteState } from "../interfaces/note_Interfaces";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

interface NoteProps {
  key: string;
  note: INoteState;
}

const Note = ({ note }: NoteProps) => {
  const { setNotes } = useContext(NoteContext);

  const handleDelete = async () => {
    const promp = await Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete the note "${note.title}"?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
    if (promp.isConfirmed) {
      await deleteNote(note._id);
      await loadNotes(setNotes);
    }
  };

  return (
    <div className="note" id={note._id} onDoubleClick={handleDelete}>
      <p className="note_author">{note.author.name}</p>
      <h3 className="note_title">{note.title}</h3>
      <NoteDescription text={note.description} motherNoteID={note._id} />
      <div className="note_footer">
        <Link className="note_editBTN" to={`/edit/${note._id}`}>
          edit
        </Link>
        <p className="note_date">created at {format(note.publishedOn)}</p>
      </div>
    </div>
  );
};

export default Note;
