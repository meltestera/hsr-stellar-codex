import "./App.css";

// import router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Root from "./pages/Root";
import Character from "./pages/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
