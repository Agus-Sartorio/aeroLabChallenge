import styled from 'styled-components';

export const StyledPopUp = styled.div`
    background-color: var(--white);
    border: 1px solid var(--grey-300);
    border-radius: 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    padding: 24px 0;
    position: absolute;
    right: 0;
    margin-top: 8px;
    font-size: var(--ff-body-200);
    width: 312px;
    text-align: center;
    display: flex;
    flex-direction: column;

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--grey-300);
        color: var(--grey-900);
        padding: 0 24px 24px;
        margin-bottom: 24px;

        button{
            padding: 8px;
            background: none;
            border: none;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }

    .radio-buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        margin-top: 40px;

        input{
            appearance: none;
        }
        label{
            background-color: var(--brand-light);
            padding: 4px 16px;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
        }
        span{
            background-image: var(--brand-gradient);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        input:checked{
            &+label{
                background-image: var(--brand-gradient);
                span{
                    color: white;
                    background: none;
                }
            }
        }
    }
    .add-points{
        padding: 12px 16px;
        flex-basis: 100%;
        margin: 24px 24px 0;
        border: none;
        border-radius: 16px;
        background-image: var(--brand-gradient);
        font-size: var(--ff-body-200);
        color: var(--white);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        span{
            margin-left: 8px;
        }
    }
`