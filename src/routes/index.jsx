import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Edit from "../pages/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/edit/:id",
        element: <Edit />,
      },
    ],
  },
]);
