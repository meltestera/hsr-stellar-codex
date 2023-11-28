import "./App.css";

// import router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import components
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Root from "./pages/Root";
import CharacterDetails from "./pages/CharacterDetails";

const Layout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: ":name",
        element: <CharacterDetails />,
      },
    ],
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
