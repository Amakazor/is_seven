import styled from "styled-components";
import device from '../../utility/device';

export interface UnderlinedHoverBoxProps {
    colors: {
        normal: {
            textColor: string;
            backgroundColor: string;
        },
        hover: {
            textColor: string;
            backgroundColor: string;
        },
        underlineColor: string;
    }
    transitionTime: string;
}

const StyledUnderlinedHoverBox = styled.div<UnderlinedHoverBoxProps>`
    color: ${(props) => props.colors.normal.textColor};
    background: ${(props) => props.colors.normal.backgroundColor};
    transition: color ${(props) => props.transitionTime}, background-color ${(props) => props.transitionTime};
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    text-align: center;
    position: relative;
    padding: 0.5rem 1.5rem;
    display: block;

    &::after {
        display: block;
        content: '';
        transform-origin: left;
        width: 80%;
        position: absolute;
        height: 0.125rem;
        left: 10%;
        top: 100%;
        background: ${(props) => props.colors.underlineColor};
        transform: scaleX(0);
        transition: transform ${(props) => props.transitionTime};
    }

    &:focus,
    &:focus-within,
    &:hover {
        @media ${device.tablet.min} {
            color: ${(props) => props.colors.hover.textColor};
            background: ${(props) => props.colors.hover.backgroundColor};

            &::after {
                transform: scaleX(1);
            }
        }
    }
`;

export default StyledUnderlinedHoverBox;