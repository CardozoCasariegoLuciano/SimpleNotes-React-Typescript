export interface ISearch {
  searchText: string,
  searchType: searchTypes,
}

export enum searchTypes {
  NULL = "",
  TITLE = "TITLE",
  USER_NAME = "USER_NAME"
}
