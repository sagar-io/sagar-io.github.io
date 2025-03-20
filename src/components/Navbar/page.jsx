import { NavItem } from "./NavItem.jsx";

const navItemsData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const navItems = navItemsData.map((navItemData, i) => (
  <NavItem
    key={`${navItemData.name}_${i}`}
    name={navItemData.name}
    path={navItemData.path}
  />
));

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar p-1">{navItems}</div>
      </div>
    </>
  );
}

export default Navbar;
