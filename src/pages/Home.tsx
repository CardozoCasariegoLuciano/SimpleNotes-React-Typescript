import {useContext, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../context/userContext";

const Home = () => {
  const {user} = useContext(UserContext)
  const histoty = useHistory()

  useEffect(()=> {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    if(!token){
      histoty.push("/login")
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (<h3>Welcome {user.name}</h3>);
};

export default Home;
