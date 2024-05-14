import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
