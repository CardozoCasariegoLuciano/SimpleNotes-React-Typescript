
export interface IUserLogin {
  email: string;
  password: string;
}


export interface IUserContex {
  name : string,
  email: string,
  id: string,
} 


export interface IUserRegister{
  name: string,
  email: string,
  password: string,
  repited_password: string,
}
