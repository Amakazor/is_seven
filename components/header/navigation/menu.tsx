import { useState } from 'react';
import MenuElement, { menuElementProps, StyledMenuElement } from './menuElement';
import HamburgerButton from './hamburgerButton';
import styled, { css } from 'styled-components';
import device from '../../../utility/device';

interface menuProps {
    isHamburgerOpen: boolean;
}

const menuOpen = css`
    transform: scaleY(1);

    transition: transform ${(props) => props.theme.transitionTime};

    & ${StyledMenuElement} {
        opacity: 1;
        transition: opacity ${(props) => props.theme.transitionTime} ${(props) => props.theme.transitionTime};
    }
`;

const StyledMenu = styled.ul<menuProps>`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    align-items: center;

    @media ${device.mobileL.max} {
        flex-direction: column;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        top: 100%;
        background: ${(props) => props.theme.colors.colorAccent};
        padding: 1rem 0;
        margin-top: 0.125rem;
        transform-origin: top;
        transform: scaleY(0);
        transition: transform ${(props) => props.theme.transitionTime} ${(props) => props.theme.transitionTime};
        border-bottom: 0.125rem solid ${(props) => props.theme.colors.colorPrimary};

        & ${StyledMenuElement} {
            opacity: 0;
            transition: opacity ${(props) => props.theme.transitionTime};
        }

        ${(props) => (props.isHamburgerOpen ? menuOpen : null)}
    }
`;

export default function Menu() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const handleHamburgerClick = () => setIsHamburgerOpen((prev) => !prev);
    const handleMenuFocus = () => setIsHamburgerOpen(true);
    const handleMenuBlur = () => setIsHamburgerOpen(false);

    const menuElements: Array<menuElementProps> = [
        { name: 'about', href: '#about' },
        { name: 'documentation', href: '#documentation' },
        { name: 'API', href: '/api/7', hasBorder: true },
    ];

    return (
        <>
            <HamburgerButton isHamburgerOpen={isHamburgerOpen} onClick={handleHamburgerClick} onBlur={handleMenuBlur} />
            <StyledMenu isHamburgerOpen={isHamburgerOpen} onFocus={handleMenuFocus} onBlur={handleMenuBlur}>
                {menuElements.map((element, index) => {
                    return <MenuElement {...element} onClick={handleMenuBlur} key={index} />;
                })}
            </StyledMenu>
        </>
    );
}
