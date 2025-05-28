import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = ({ location }) => {
  return (
    <div className=" md:hidden">
      <ul className="list-none flex gap-8 items-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "hover:text-blue-700"
            }
            to="/"
          >
            BOSH SAHIFA
          </NavLink>
        </li>
        <li >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "hover:text-blue-700"
            }
            to="/shop"
          >
            AVTOMOBILLAR
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "hover:text-blue-700"
            }
            to="/plantCare"
          >
            KOMPANIYA
          </NavLink>
        </li>

        <li className="hover:text-blue-700 uppercase">Komplayens</li>
        <li className="hover:text-blue-700 uppercase">Ehtiyot qismlar</li>
        <li className="hover:text-blue-700 uppercase">Xaridorlarga</li>
        <li className="hover:text-blue-700 uppercase">Egalariga</li>
        <li className="hover:text-blue-700 uppercase">Tenderlar</li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
