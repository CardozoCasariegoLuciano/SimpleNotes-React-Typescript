import {IUserContex} from "./user_Interfaces";

export interface INoteState {
  _id: string,
  title: string,
  description: string,
  author: IUserContex,
  publishedOn: string,
}
