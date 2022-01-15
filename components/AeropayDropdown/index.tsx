import type { NextComponentType } from 'next';
import Image from 'next/image';
import { StyledAeropay } from './styles'

const AeropayDropdown: NextComponentType = () => {
    return (
        <StyledAeropay>
            <Image src='/assets/icons/aeropay-1.svg' width='32' height='32' alt='' />
            <span className='points'>1000</span>
            <Image src='/assets/icons/chevron-down.svg' width='15' height='8' alt='' />
        </StyledAeropay>
    )
}

export default AeropayDropdown;