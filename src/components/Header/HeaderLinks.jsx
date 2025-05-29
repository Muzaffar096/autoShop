import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = ({ location }) => {
  return (
    <div className=" ">
      <ul className="list-none flex gap-8 items-center">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-700" : "hover:text-blue-700"
              }  md:text-[12px]`
            }
            to="/"
          >
            BOSH SAHIFA
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-700" : "hover:text-blue-700"
              }  md:text-[12px]`
            }
            to="/shop"
          >
            AVTOMOBILLAR
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-700" : "hover:text-blue-700"
              }  md:text-[12px]`
            }
            to="/plantCare"
          >
            KOMPANIYA
          </NavLink>
        </li>

        <li className="hover:text-blue-700 uppercase xl:hidden">Komplayens</li>
        <li className="hover:text-blue-700 uppercase xl:hidden">
          Ehtiyot qismlar
        </li>
        <li className="hover:text-blue-700 uppercase xl:hidden">
          Xaridorlarga
        </li>
        <li className="hover:text-blue-700 uppercase xl:hidden">Egalariga</li>
        <li className="hover:text-blue-700 uppercase xl:hidden">Tenderlar</li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
