import Image from 'next/image';
import { useState, useContext } from 'react';
import { Context } from '../../context';
import { StyledAeropay } from './styles'

const AeropayDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const value = useContext(Context);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <StyledAeropay onClick={handleClick} className={isOpen ? 'isOpen' : undefined}>
            <Image src='/assets/icons/aeropay-1.svg' width='32' height='32' alt='' />
            <span className='points'>{value?.user.puntos}</span>
            <Image className='chevron' src='/assets/icons/chevron-down.svg' width='15' height='8' alt='' />
        </StyledAeropay>
    )
}

export default AeropayDropdown;