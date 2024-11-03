import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
