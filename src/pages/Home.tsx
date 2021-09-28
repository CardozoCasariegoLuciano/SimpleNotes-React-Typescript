import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/home.scss";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="home">
        <h1>Welcome {user.name}</h1>
      </div>
    </>
  );
};

export default Home;
