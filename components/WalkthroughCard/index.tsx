import Image from "next/image"
import { StyledArticle } from "./styles"

interface Props {
    titleImg: string
    bgImg: StaticImageData
    title: string
    description: string
}

const WalkthroughCard = ({ titleImg, bgImg, title, description }: Props) => {
    return (
        <StyledArticle className='card' >
            <div className='top-img'>
                <Image src={bgImg} alt='' />
            </div>
            <div className='info'>
                <h3> <span className='span-img'><Image src={titleImg} width='32' height='32' alt='' /></span> {title} </h3>
                <p>{description}</p>
            </div>
        </StyledArticle>
    )
}

export default WalkthroughCard;