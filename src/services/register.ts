import axios from "axios";
import {IUserRegister} from "../interfaces/user_Interfaces";

const baseURL = "http://localhost:3500/register"

export const register = async(data:IUserRegister) => {
  const resp = await axios.post(baseURL, data) 
  return resp
}
