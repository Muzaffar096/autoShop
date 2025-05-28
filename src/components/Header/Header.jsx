import Container from "../Container";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/images/logo.png?react";
import HeaderLinks from "./HeaderLinks";


const Header = () => {
 
  return (
    <div className="mt-[24px]  md:left-0  md:right-0 md:bg-slate-50 md:z-50  ">
      <Container>
        <div className="flex sm:justify-start md:gap-4  items-center">
          <div className="cursor-pointer md:ml-4">
            <NavLink to="/">
            <img className="" src={Logo} alt="Logo" width={130} />
              
            </NavLink>
          </div>
          <HeaderLinks location={location} />
         
        </div>
      </Container>
      <hr />
      
    </div>
  );
};

export default Header;
