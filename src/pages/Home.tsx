import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Home = () => {

  const histoty = useHistory()

  useEffect(()=> {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token")
    if(!token){
      histoty.push("/login")
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (<h3>home</h3>);
};

export default Home;
