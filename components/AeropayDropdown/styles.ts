import styled from 'styled-components';

export const StyledAeropay = styled.button`
    border: 1px solid var(--grey-300);
    padding: 8px 16px;
    border-radius: 16px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: var(--ff-body-200);
    width: 156px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

    .points{
        margin-right: auto;
        margin-left: 8px;
        background-image: var(--brand-gradient);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
`