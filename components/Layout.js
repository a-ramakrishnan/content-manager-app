import NavBar from "./Navbar";
import ActiveResource from "./ActiveResource";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <ActiveResource />
      {children}
    </>
  );
};

export default Layout;
