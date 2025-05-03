"use client"

import { motion } from "framer-motion";
import Link from 'next/link'

export const NavItem = ({ name, path }) => {
  function navStyle({ isActive }) {
    return {};
  }
  let iconName;
  switch (name) {
    case "Home":
      iconName = "fas fa-home";
      break;
    case "Experience":
      iconName = "fas fa-briefcase";
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
    <Link href={path} className="p-1">
      <motion.div
        className="nav-link"
        style={navStyle}
        whileTap={{ scale: 0.85 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <i className={iconName}></i>
        <p>{name}</p>
      </motion.div>
    </Link>
  );
};
