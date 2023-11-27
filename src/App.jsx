import "./App.css";

// import router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import components
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Root from "./pages/Root";
import Character from "./pages/Character";

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
        element: <Character />,
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
