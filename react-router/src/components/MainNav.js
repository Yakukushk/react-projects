import { Link, NavLink } from "react-router";
import classes from "./MainNav.module.css";

export default function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to={"/product"}
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
