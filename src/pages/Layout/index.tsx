import Nav from "../../shared_components/Nav";
import Footer from "../../shared_components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
