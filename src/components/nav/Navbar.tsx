import { NavLink } from "react-router-dom";

const routes = [
  { name: "Home", path: "/home" },
  { name: "Wishlists", path: "/wishlists" },
  { name: "Books", path: "/books" },
  { name: "Landing", path: "/landing" },
  { name: "Register", path: "/register" },
];

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ name, path }, index) => (
          <li key={index}>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={path}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
