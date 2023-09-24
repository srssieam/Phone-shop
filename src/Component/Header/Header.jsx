import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className="flex justify-between py-6 px-5 shadow-lg">
            <Logo></Logo>
            <div className="flex gap-3">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-teal-700 font-bold" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favourite"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-teal-700 font-bold" : ""
                    }
                >
                    Favourite
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-teal-700 font-bold" : ""
                    }
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Header;