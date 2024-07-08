import Nav from "../../shared_components/Nav";
import Footer from "../../shared_components/Footer";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import GlobalError from "../../shared_components/GlobalError";

const Layout = () => {
  return (
    <>
      <Nav />
      <ErrorBoundary FallbackComponent={GlobalError}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Layout;
