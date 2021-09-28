import { IUserContex, IUserLogin, IUserRegister } from "../interfaces/user_Interfaces";
import jwtDecode from "jwt-decode";
import {SetStateAction} from "react";

export const verifyLoginForm = (data: IUserLogin) => {
  const regxPass: RegExp = /^[a-zA-Z0-9]{3,35}$/;
  const regxSimpleMail: RegExp = /\S+@\S+\.\S+/;

  const isValidPass = regxPass.test(data.password);
  const isValidMail = regxSimpleMail.test(data.email);

  return isValidMail && isValidPass;
};

export const verifyRegisterForm = (data: IUserRegister) => {
  const regxPass: RegExp = /^[a-zA-Z0-9]{3,35}$/;
  const regxSimpleMail: RegExp = /\S+@\S+\.\S+/;

  const areValidPass =
    regxPass.test(data.password) && regxPass.test(data.repited_password);
  const isValidMail = regxSimpleMail.test(data.email);
  const haveName = data.name.length > 0;

  return isValidMail && areValidPass && haveName;
};

export const veryfyTokenStoragedOnLoginRegister = (history: any) => {
  const tokenOnLocalSt = localStorage.getItem("token");
  const tokenOnSessionSt = sessionStorage.getItem("token");

  const value = tokenOnSessionSt || tokenOnLocalSt;

  if (value) {
    history.push("/");
  }
};


export const veryfyTokenStoragedOnPages = (history: any, state: React.Dispatch<SetStateAction<IUserContex>>) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    if(!token){
      history.push("/login")
    }else{
      setCurrenUserOnContext(token, state)
    }
  }


export const setCurrenUserOnContext = (token : string, state: React.Dispatch<SetStateAction<IUserContex>>) => {
  const decodedToken: any = jwtDecode(token);
  state({
    name: decodedToken.data.name,
    email: decodedToken.data.email,
    id: decodedToken.data._id,
  });
};

export const removeToken = (token : string) => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
}
