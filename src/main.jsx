import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Myditails from "./Myditails";
import CardDitails from "./CardDitails";
import Statistics from "./Statistics";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from "./Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("/categorycard.json")
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>,
        loader: () => fetch('/categorycard.json')
      },
      {
        path:"/statistics/:product_id",
        element:<CardDitails></CardDitails>,
        loader: () => fetch('/categorycard.json')
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        loader:() => fetch("/categorycard.json")
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
    <ToastContainer />
  </React.StrictMode>
);
