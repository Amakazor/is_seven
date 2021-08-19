import styled from 'styled-components';
import device from '../../utility/device';

export interface BorderedHoverBoxProps {
    colors: {
        normal: {
            textColor: string;
            backgroundColor: string;
            borderColor: string;
        };
        hover: {
            textColor: string;
            backgroundColor: string;
            borderColor: string;
        };
    };
    transitionTime: string;
    borderRadius: string;
    removeBorderMobile: boolean;
}

const StyledBorderedHoverBox = styled.div<BorderedHoverBoxProps>`
    color: ${props => props.colors.normal.textColor};
    background: ${props => props.colors.normal.backgroundColor};
    border: 0.125em solid ${props => props.colors.normal.borderColor};
    transition: color ${props => props.transitionTime},
        background-color ${props => props.transitionTime},
        border-color ${props => props.transitionTime};
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    text-align: center;
    position: relative;
    padding: 0.5rem 1.5rem;
    display: block;
    border-radius: ${props => props.borderRadius};

    &:focus,
    &:focus-within,
    &:hover {
        color: ${props => props.colors.hover.textColor};
        background: ${props => props.colors.hover.backgroundColor};
        border-color: ${props => props.colors.hover.borderColor};
    }

    @media ${device.mobileL.max} {
        border-style: ${props => (props.removeBorderMobile ? 'none' : 'solid')};
    }
`;

export default StyledBorderedHoverBox;
