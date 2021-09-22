import { IUserLogin } from "../interfaces/user_Interfaces";

export const verifyLoginForm = (data: IUserLogin) => {
  const regxPass: RegExp = /^[a-zA-Z0-9]{3,35}$/;
  const regxSimpleMail: RegExp = /\S+@\S+\.\S+/;

  const isValidPass = regxPass.test(data.password);
  const isValidMail = regxSimpleMail.test(data.email);

  return isValidMail && isValidPass;
};
