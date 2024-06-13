import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "navbar",
        element: <Navbar />
      }
    ]
  }
]);