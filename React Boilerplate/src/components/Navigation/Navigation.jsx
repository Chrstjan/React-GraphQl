import { NavLink } from "react-router-dom";
import { navLinks } from "../../routes";
import style from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={style.navStyling}>
        {navLinks.map((link, index) => {
          return (
            <li key={link.title}>
              <NavLink className={({isActive}) => isActive ? style.activeLink : ""} to={link.link}>{link.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
