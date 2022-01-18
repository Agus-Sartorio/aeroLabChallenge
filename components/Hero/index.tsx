import Image from 'next/image'
import { StyledHero } from './styles';
import hero from '../../public/assets/illustrations/Hero-bg.png'

const Hero = () => {
    return (
        <StyledHero>
            <div>
                <h1>
                    <span className='texto1'>EXPLORE THE</span>
                    <span className='texto2'>TECH</span>
                    <span className='texto3'>ZONE</span>
                </h1>
                <p>
                    Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.
                </p>
                <button><span>VIEW ALL PRODUCTS</span> <Image src='/assets/icons/arrow-down.svg' width='32' height='32' alt='' /></button>
            </div>
            <div className='hero-img'>
                <Image src={hero} alt='' />
            </div>
        </StyledHero>
    )
}

export default Hero;