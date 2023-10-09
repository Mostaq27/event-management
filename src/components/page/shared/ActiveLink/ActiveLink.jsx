import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) => (isActive ? "border border-success border-1 px-3 py-2 " : "")+'text-decoration-none me-3 rounded'}>
            {children}
          </NavLink>
        </div>
    );
};

export default ActiveLink;