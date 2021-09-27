import {createContext, SetStateAction, useState} from "react";
import {IUserContex} from "../interfaces/user_Interfaces"


type userProviderProps ={
  children: JSX.Element | JSX.Element[]
}

type userContextProps = {
  user: IUserContex,
  setUser: React.Dispatch<SetStateAction<IUserContex>>,
}

export const UserContext = createContext<userContextProps>({} as userContextProps)

const UserProvider = ({children}: userProviderProps) => {

  const [user, setUser] = useState<IUserContex>({
    name:"",
    email:"",
    id:"",
  })

  const data = {user, setUser}
  return <UserContext.Provider value={data}>{children} </UserContext.Provider> 
}

export default UserProvider




