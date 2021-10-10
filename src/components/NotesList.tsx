import { INoteState } from "../interfaces/note_Interfaces";
import "../styles/notesList.scss";
import Note from "./Note";

type NoteListProps = {
  notes: INoteState[];
};

const NotesList = ({ notes }: NoteListProps) => {
  return (
    <div className="notesList">
        <div className="notes">
          {notes.length === 0 ? (
            <p className="noNotesMsg centerOnPage">There are no coincidences for your search</p>
          ) : (
            notes.map((note) => <Note key={note._id} note={note} />)
          )}
        </div>
    </div>
  );
};

export default NotesList;
