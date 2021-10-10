import "../styles/searcher.scss";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import {searchTypes} from "../interfaces/search_Interfaces";

const Searcher = () => {
  const { search, setSearch } = useContext(SearchContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };


  return (
    <div className="searcher_conteiner">
      <div className="seracher">
        <label htmlFor="input-search">
          <BsSearch className="search_icon" />
        </label>

        <input
          className="input-search"
          type="text"
          placeholder="Search"
          id="input-search"
          onChange={(e) => handleChange(e)}
          value={search.searchText}
          name="searchText"
        />
      </div>
      <div className="search_radioSeccion">
        <p>Search for:</p>

        <label htmlFor="radioTitle">Title</label>
        <input
          type="radio"
          name="searchType"
          id="radioTitle"
          value={searchTypes.TITLE}
          defaultChecked
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="radioName">Name</label>
        <input
          type="radio"
          name="searchType"
          id="radioName"
          value={searchTypes.USER_NAME}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Searcher;
