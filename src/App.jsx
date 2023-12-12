import "./App.css";

// import router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import components
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Root from "./pages/Root";
import CharacterDetails from "./pages/CharacterDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/characters",
    element: [<Root />, <Footer />],
  },
  {
    path: "/characters/:name",
    element: [<CharacterDetails />, <Footer />],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
