export const NavItem = ({ name, path, isActive }) => (
  <a href={path} className={isActive ? "active" : ""}>
    <p>{name}</p>
  </a>
);
