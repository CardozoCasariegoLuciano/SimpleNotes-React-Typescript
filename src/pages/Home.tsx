import {useContext, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../context/userContext";
import {veryfyTokenStoragedOnPages} from "../helpers/functions";

const Home = () => {

  const {user, setUser} = useContext(UserContext)
  const history = useHistory()

  useEffect(()=> {
    veryfyTokenStoragedOnPages(history, setUser)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (<h3>Welcome {user.name}, {user.id}, {user.email}</h3>);
};

export default Home;



console.log("funcionaa no lo puedo creer loco alalajajajaja")
