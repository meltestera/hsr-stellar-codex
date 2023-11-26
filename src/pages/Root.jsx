// import components
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// import child route's element
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
