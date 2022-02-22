import { StyledNavBar } from "./styles";
import AeropayDropdown from "../AeropayDropdown";
import Link from "next/link";

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link href="/">
        <a>
          <span className="sr_only">aerolab</span>
        </a>
      </Link>
      <AeropayDropdown />
    </StyledNavBar>
  );
};

export default NavBar;
