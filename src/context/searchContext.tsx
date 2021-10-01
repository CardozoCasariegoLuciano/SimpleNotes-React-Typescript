import { createContext, SetStateAction, useState } from "react";
import {ISearch, searchTypes } from "../interfaces/search_Interfaces";

type ISearchProvider = {
  children: JSX.Element | JSX.Element[];
};

type ISearchContext = {
  search: ISearch;
  setSearch: React.Dispatch<SetStateAction<ISearch>>;
};

export const SearchContext = createContext<ISearchContext>( {} as ISearchContext);

const SearchProvider = ({ children }: ISearchProvider) => {

  const [search, setSearch] = useState<ISearch>({
    searchText: "",
    searchType: searchTypes.NULL,
  });
  const data = { search, setSearch };

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
