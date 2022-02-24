import Image from 'next/image';
import { useState, useContext } from 'react';
import { Context } from '../../context';
import { StyledAeropay, StyledContainer } from './styles'
import PopUp from '../PopUp';

const AeropayDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {user} = useContext(Context)!;

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <StyledContainer>
            <StyledAeropay onClick={handleClick} className={isOpen ? 'isOpen' : undefined}>
                <Image src='/assets/icons/aeropay-1.svg' width='32' height='32' alt='' />
                <span className='points'>{user?.puntos}</span>
                <Image className='chevron' src='/assets/icons/chevron-down.svg' width='15' height='8' alt='' />
            </StyledAeropay>
            {isOpen &&
                <PopUp
                    handleClick={handleClick}
                />
            }
        </StyledContainer>
    )
}

export default AeropayDropdown;