import { createBrowserRouter } from "react-router-dom";

// Layouts
import DefaultLayout from "../layouts/default";

// pages
import App from "../App";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Admin from "../pages/admin";

const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    errorElement: <div>erro</div>,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
