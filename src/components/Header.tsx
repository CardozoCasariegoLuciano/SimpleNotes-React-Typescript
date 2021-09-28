import { Link, useHistory } from "react-router-dom";
import {removeToken} from "../helpers/functions";
import "../styles/Header.scss"

const Header = () => {
 
  const history = useHistory();

  const BTN_logOut = () => {
    removeToken("token")
    history.push("/login");
  };

  return (
    <div className="Header">
      <div className="header_content">
        <Link to="/" className="logo">Simple Notes</Link>
        <div className="header_content-links">
          <Link className="header_link" to="/profile">My profile</Link>
          <Link className="header_link" to="/newnote">Add new note</Link>
          <p className="header_link" onClick={BTN_logOut}>LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
