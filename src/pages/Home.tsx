import NotesList from "../components/NotesList";
import Serarcher from "../components/Searcher";
import "../styles/home.scss";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/searchContext";
import { loadNotes } from "../helpers/functions";
import { NoteContext } from "../context/notesContext";
import Loader from "../Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { notes, setNotes } = useContext(NoteContext);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    loadNotes(setNotes);
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredNotes = notes.filter((not) => {
    switch (search.searchType) {
      case "TITLE":
        return not.title
          .toLowerCase()
          .includes(search.searchText.toLowerCase());
      case "USER_NAME":
        return not.author.name
          .toLowerCase()
          .includes(search.searchText.toLowerCase());
      default:
        return not.title
          .toLowerCase()
          .includes(search.searchText.toLowerCase());
    }
  });

  return (
    <>
      <div className="home">
        <div className="home_conten">
          <Serarcher />
          {loading ? (
            <Loader />
          ) : (
            <>
              {notes.length === 0 ? (
                <p className="noNotesMsg">Empty data base</p>
              ) : (
                <div className="homeNoteList">
                  <NotesList notes={filteredNotes} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

