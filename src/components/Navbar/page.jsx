"use client";
import { useState, useEffect } from "react";
import Link from "next/link.js";
import { NavItem } from "./NavItem.jsx";
import navItemsData from "./navigation.json";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`main-nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-wrapper">
        <div className="navbar">
          {navItemsData.map((navItemData, i) => (
            <NavItem
              key={`${navItemData.name}_${i}`}
              name={navItemData.name}
              path={navItemData.path}
            />
          ))}
        </div>
      </div>
      <div className="contact-nav-item">
        <Link href="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
