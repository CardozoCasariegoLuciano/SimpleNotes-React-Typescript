import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { veryfyTokenStoragedOnPages } from "../helpers/functions";
import Footer from "./Footer";
import Header from "./Header";

type layoutPorps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: layoutPorps) => {
  const histoy = useHistory();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    veryfyTokenStoragedOnPages(histoy, setUser);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
