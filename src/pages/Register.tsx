import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { verifyRegisterForm, veryfyTokenStoragedOnLoginRegister } from "../helpers/functions";
import { useShowAlert } from "../hooks/useShowAlert";
import { IUserRegister } from "../interfaces/user_Interfaces";
import { register } from "../services/register";
import "../styles/login-register.scss";

const Register = () => {
  const history = useHistory();
  const [showModal, modalText, isVisibleModal] = useShowAlert();
  const [registData, setRegistData] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
    repited_password: "",
  });

  useEffect(() => {
    veryfyTokenStoragedOnLoginRegister(history);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistData({ ...registData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registData.repited_password !== registData.password) {
      const text = "Passwords are diferents";
      showModal(text);
    } else if (!verifyRegisterForm(registData)) {
      const text = "Datos ingresados incorrectos";
      showModal(text);
    } else {
      const resp = await register(registData);

      if (resp.data.Usuario) {
        sessionStorage.setItem("token", resp.data.Token);
        history.push("/");
      } else {
        const text = resp.data.Mensaje;
        showModal(text);
      }
    }
  };

  return (
    <div className="login_register">
      <form onSubmit={handleSubmit}>
        <div className="form_data">
          <h3>Register</h3>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Text your email"
            value={registData.email}
            name="email"
            onChange={handleChange}
            required
          />

          <label htmlFor="userName">userName</label>
          <input
            type="text"
            id="userName"
            placeholder="Text your username"
            value={registData.name}
            name="name"
            onChange={handleChange}
            required
          />

          <label htmlFor="pass">password</label>
          <input
            type="password"
            id="pass"
            placeholder="Text your password"
            value={registData.password}
            name="password"
            onChange={handleChange}
            required
          />

          <label htmlFor="passRep">Repeat your password</label>
          <input
            type="password"
            id="passRep"
            placeholder="Text your password again"
            value={registData.repited_password}
            name="repited_password"
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
          <Link className="linkToLogIn" to="/login">
            Already have an acount?{" "}
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

export default Register;
