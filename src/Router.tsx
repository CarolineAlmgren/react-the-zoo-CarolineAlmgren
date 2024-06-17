
import {Home} from "./pages/Home";
import { Animals } from "./pages/Animals";
import { createBrowserRouter } from "react-router-dom";
import Animal from "./components/AnimalDetail";
import { Layout } from "./pages/Layout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animal/:id",
        element: <Animal />,
      },
    ],
   
  },
]);