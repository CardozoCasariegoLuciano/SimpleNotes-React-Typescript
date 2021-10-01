import axios from "axios";
import { getToken } from "../helpers/functions";

const URL = `http://localhost:3500/api/note/`;

export const getNotes = async () => {
    const token = getToken("token");
    const resp = await axios.get(URL, {
        headers: {
            authorization: token,
        },
    });
    return resp;
};

export const getUserNotes = async () => {
    const token = getToken("token");
    const resp = await axios.get(URL + "mynotes/", {
        headers: {
            authorization: token,
        },
    });
    return resp;
};
