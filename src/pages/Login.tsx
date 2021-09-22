import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { verifyLoginForm } from "../helpers/functions";
import { useShowAlert } from "../hooks/useShowAlert";
import { IUserLogin } from "../interfaces/user_Interfaces";
import { login } from "../services/login";
import "../styles/login.scss";

const Login = () => {
  const [showModal, modalText, isVisibleModal] = useShowAlert();
  const history = useHistory();
  const [loginUser, setLoginUser] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidData = verifyLoginForm(loginUser);

    if (isValidData) {
      const respLogin = await login(loginUser);

      if (respLogin.data.Usuario) {
        if (remember) {
          sessionStorage.removeItem("token");
          localStorage.setItem("token", respLogin.data.Token);
        } else {
          localStorage.removeItem("token");
          sessionStorage.setItem("token", respLogin.data.Token);
        }
        history.push("/");
      } else {
        const text = respLogin.data.Mensaje;
        showModal(text);
      }
    } else {
      const text = "Datos ingresados incorrectos";
      showModal(text);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form_data">
          <h3>LogIn</h3>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            required
            value={loginUser.email}
          />

          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            name="password"
            value={loginUser.password}
            onChange={handleChange}
            required
          />

          <div className="checkBoxDiv">
            <label className="labelChkBox" htmlFor="remm">
              Remember me:
            </label>
            <input
              type="checkbox"
              id="remm"
              name="remm"
              onChange={handleCheck}
            />
          </div>

          <button type="submit">LogIn</button>

          <Link className="linkToRegister" to="/register">
            Don't have an acount?
          </Link>
        </div>
      </form>
      <div className="modalAlertLogin">
        {isVisibleModal && (
          <div className="alertModalArea">
            <p>{modalText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
