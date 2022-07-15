import { useHistory } from "react-router-dom";
import "../styles/notFound.scss";

const NotFound = () => {
  const history = useHistory();
  const goBackBTN = () => {
    history.goBack();
  };

  return (
    <div className="notFound">
      <div className="notFound_conteiner">
        <p className="notFound_mainStatus">404</p>
        <p className="notFound_subtitle">Page not found</p>
        <p className="notFound_btn" onClick={goBackBTN}> Go back </p>
      </div>
    </div>
  );
};

export default NotFound;
