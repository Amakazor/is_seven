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
    fontWeight: number;
    transitionTime: string;
    isBlock?: boolean;
    isFullWidth?: boolean;
}

const StyledUnderlinedHoverBox = styled.div<UnderlinedHoverBoxProps>`
    color: ${(props) => props.colors.normal.textColor};
    background: ${(props) => props.colors.normal.backgroundColor};
    transition: color ${(props) => props.transitionTime}, background-color ${(props) => props.transitionTime};
    font-weight: ${props => props.fontWeight};
    cursor: pointer;
    width: 100%;
    text-align: center;
    position: relative;
    padding: ${props => props.isBlock ? '0.5rem 1.5rem' : null};
    display: ${props => props.isBlock ? 'block' : null};

    &::after {
        display: block;
        content: '';
        transform-origin: left;
        width: ${props => props.isFullWidth ? '100%' : '80%'};
        position: absolute;
        height: 0.125rem;
        left: ${props => props.isFullWidth ? '0' : '10%'};
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