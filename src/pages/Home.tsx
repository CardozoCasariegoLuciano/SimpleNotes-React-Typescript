import NotesList from "../components/NotesList";
import Serarcher from "../components/Searcher";
import "../styles/home.scss";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/searchContext";
import { loadNotes } from "../helpers/functions";
import { INoteState } from "../interfaces/note_Interfaces";

const Home = () => {
  const [notes, setNotes] = useState<INoteState[]>([]);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    loadNotes(setNotes);
  }, []);

  const filteredNotes = notes.filter((not) => {
    switch (search.searchType) {
      case "TITLE":
        return not.title.toLowerCase().includes(search.searchText);
      case "USER_NAME":
        return not.author.name.toLowerCase().includes(search.searchText);
      default:
        return not.title.toLowerCase().includes(search.searchText);
    }
  });

  return (
    <>
      <div className="home">
        <div className="home_conten">
          <Serarcher />
          {notes.length === 0 ? (
            <p className="noNotesMsg">Sin notas en la BD</p>
          ) : (
            <div className="homeNoteList">
              <NotesList notes={filteredNotes} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
