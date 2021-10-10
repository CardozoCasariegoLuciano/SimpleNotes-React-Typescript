import {IUserLogin} from "../interfaces/user_Interfaces"
import axios from "axios"

const baseURL = "http://localhost:3500/login"

export const login = async(data: IUserLogin ) => {
    const resp = await axios.post(baseURL, data)
    return resp;
}
