import "../styles/note.scss";
import { INoteState } from "../interfaces/note_Interfaces";
import NoteDescription from "./NoteDescription";

interface NoteProps {
  key: string;
  note: INoteState;
}

const Note = ({ note }: NoteProps) => {
  const date = new Date(note.publishedOn).toLocaleString().slice(0, 9);

  return (
    <div className="note" id={note._id}>
      <p className="note_author">{note.author.name}</p>
      <h3 className="note_title">{note.title}</h3>
      <NoteDescription text={note.description} motherNoteID={note._id}/>
      <p className="note_date">created at {date}</p>
    </div>
  );
};

export default Note;
