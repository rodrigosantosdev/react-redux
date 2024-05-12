import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

// styles
import "./styles/global.scss";

// routers
import router from "./config/router.tsx";

// browserRouter

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
