import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import Home from "./Home";
import Statistics from "./Statistics";
import Dashboard from "./Dashboard";
import Myditails from "./Myditails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("/categories.json")
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/myditails",
        element:<Myditails></Myditails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
