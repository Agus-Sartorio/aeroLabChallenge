import styled from "styled-components";

export const StyledSection = styled.section`
    background-image: var(--illustration-bg);
    height: 528px;
    margin-top: 150px;

    .container{
        position: relative;
    }

    .card{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: -75px;
    }

    .card:first-child{
        transform: translateX(-130%) rotate(-3deg);
    }

    .card:last-child{
        transform: translateX(30%) rotate(3deg);
    }
`