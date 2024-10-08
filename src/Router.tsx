
import {Home} from "./pages/Home";
import { Animals } from "./pages/Animals";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animal } from "./pages/Animal";
import { NotFound } from "./pages/NotFound";


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
        element: <Animal/>
      },
    ],
   errorElement: <NotFound />
  },
]);