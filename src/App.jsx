import "./App.css";

// import router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Root from "./components/Root";
import CharacterDetails from "./components/CharacterDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
