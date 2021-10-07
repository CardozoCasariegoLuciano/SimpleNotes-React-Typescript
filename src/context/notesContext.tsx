import { createContext, SetStateAction, useState } from "react";
import { INoteState } from "../interfaces/note_Interfaces";

type NoteProviderProps = {
  children: JSX.Element | JSX.Element[];
};

type NoteContextProps = {
  notes: INoteState[];
  setNotes: React.Dispatch<SetStateAction<INoteState[]>>;
};

export const NoteContext = createContext<NoteContextProps>( {} as NoteContextProps);


const NoteProvider = ({ children }: NoteProviderProps) => {
  const [notes, setNotes] = useState<INoteState[]>([]);

  const data = { notes, setNotes };

  return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>;
};

export default NoteProvider;
