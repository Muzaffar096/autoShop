import Container from "../Container";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/images/logo.png?react";
import HeaderLinks from "./HeaderLinks";


const Header = () => {
 
  return (
    <div className="mt-[24px] ">
      <Container>
        <div className="flex sm:justify-start  items-center">
          <div className="cursor-pointer">
            <NavLink to="/">
            <img className="" src={Logo} alt="Logo" width={130} height={200} />
              
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
