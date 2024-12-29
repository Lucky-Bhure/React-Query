import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const active = `${({ isActive }) => (isActive ? "active" : "")} index-ele`;

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="header-container">
        <div>
          <NavLink to={"/"}>
            <h1 className="logo">React Query</h1>
          </NavLink>
        </div>
        <nav>
          <ul className={showMenu ? "smallindex index-div" : "smallnone index-div"}>
            <li>
              <NavLink to={"/"} className={active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/fetch-rq"} className={active}>
                FetchRQ
              </NavLink>
            </li>
            <li>
              <NavLink to={"/fetch-old"} className={active}>
                FetchOld
              </NavLink>
            </li>
            <li>
              <NavLink to={"/infinite-scroll"} className={active}>
                Infinite Scroll
              </NavLink>
            </li>
          </ul>
          <div className="ham-menu" onClick={onClick}>
            {showMenu ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
