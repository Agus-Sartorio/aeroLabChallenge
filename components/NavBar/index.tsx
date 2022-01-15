import type { NextComponentType } from 'next';
import Image from 'next/image';
import { StyledNavBar } from './styles'
import AeropayDropdown from '../AeropayDropdown'

const NavBar: NextComponentType = () => {
    return (
        <StyledNavBar>
            <Image src="/assets/icons/aerolab-logo-1.svg" width='126' height='48' alt="" />
            <AeropayDropdown />
        </StyledNavBar>
    )
}

export default NavBar;