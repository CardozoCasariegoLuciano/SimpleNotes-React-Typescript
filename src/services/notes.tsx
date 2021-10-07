import axios from "axios";
import { getToken } from "../helpers/functions";
import { IFormNote } from "../interfaces/note_Interfaces";

const URL = `http://localhost:3500/api/note/`;

export const getNotes = async () => {
    const token = getToken();
    const resp = await axios.get(URL, {
        headers: {
            authorization: token,
        },
    });
    return resp;
};

export const getUserNotes = async () => {
    const token = getToken();
    const resp = await axios.get(URL + "mynotes/", {
        headers: {
            authorization: token,
        },
    });
    return resp;
};

export const getOneNote = async (id: string) => {
    const token = getToken();
    try {
        const resp = await axios.get(`${URL}/${id}`, {
            headers: {
                authorization: token,
            },
        });
        return resp;
    } catch (err:any) {
        console.log(err.message);
    }
};

export const postNewNote = async (note: IFormNote) => {
    const token = getToken();
    const resp = await axios.post(URL, note, {
        headers: {
            authorization: token,
        },
    });
    return resp;
};

export const deleteNote = async (id: string) => {
    const token = getToken();
    const rep = await axios.delete(URL + `/${id}`, {
        headers: {
            authorization: token,
        },
    });
    return rep;
};

export const editNote = async (id: string, note: IFormNote) => {
    const token = getToken();
    const rep = await axios.put(URL + `/${id}`, note, {
        headers: {
            authorization: token,
        },
    });
    return rep;
};
