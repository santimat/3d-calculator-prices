import { NavLink, type LinkProps } from "react-router-dom";

export function Link({ to, children }: LinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex flex-col items-center text-sm ${isActive ? "text-secondary" : "text-neutral"}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
