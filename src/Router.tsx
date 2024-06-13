
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";
import { Animals } from "./pages/Animals";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navbar />
      }
    ]
  },
  {
    path: "/animals",
    element: <Animals />
  }
]);