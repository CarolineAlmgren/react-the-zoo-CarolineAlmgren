import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
  <>
    <nav>
      <ul>
      <li>
              <NavLink to={"/home"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/animals"}>Mina djur</NavLink>
            </li>
      </ul>
    </nav>
  </> )
};
