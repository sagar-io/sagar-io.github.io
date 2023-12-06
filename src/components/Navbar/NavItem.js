import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavItem = ({ name, path }) => {
  function navStyle({ isActive }) {
    return {};
  }
  let iconName;
  switch (name) {
    case "Home":
      iconName = "fas fa-home";
      break;
    case "About":
      iconName = "fas fa-address-card";
      break;
    case "Skills":
      iconName = "fas fa-code";
      break;
    case "Projects":
      iconName = "far fa-window-maximize";
      break;
    case "Contact":
      iconName = "fas fa-regular fa-phone";
      break;
    default:
      iconName = "";
  }

  return (
    <NavLink to={path} className="p-1">
      <motion.div
        className="nav-link"
        style={navStyle}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <i className={iconName}></i>
        <p>{name}</p>
      </motion.div>
    </NavLink>
  );
};
