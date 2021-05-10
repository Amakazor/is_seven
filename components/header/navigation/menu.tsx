import React, { useState, useContext } from 'react';
import HamburgerButton from './hamburgerButton';
import styled, { css, ThemeContext } from 'styled-components';
import device from '../../../utility/device';
import UnderlinedLink from '../../reusable/underlinedLink';
import BorderedLink from '../../reusable/borderedLink';


interface menuProps {
    isHamburgerOpen: boolean;
}

const menuOpen = css`
    transform: scaleY(1);

    transition: transform ${(props) => props.theme.transitionTime};

    & li {
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

        & li {
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

    const theme = useContext(ThemeContext);

    const menuElements: Array<{children: React.ReactChild | React.ReactChild[]; href: string; hasBorder: boolean}> = [
        { children: 'Home', href: '#home', hasBorder: false },
        { children: 'About', href: '#about', hasBorder: false },
        { children: 'Documentation', href: '#documentation', hasBorder: false },
        { children: 'API', href: '/api/7', hasBorder: true },
    ];

    const underlinedLinkProps = {
        colors: {
            normal: {
                textColor: theme.colors.colorPrimary,
                backgroundColor: 'transparent',
            },
            hover: {
                textColor: theme.colors.colorPrimary,
                backgroundColor: 'transparent',
            },
            underlineColor: theme.colors.colorPrimary,
        },
        transitionTime: theme.transitionTime,
    };

    const borderedLinkProps = {
        colors: {
            normal: {
                textColor: theme.colors.colorPrimary,
                borderColor: theme.colors.colorPrimary,
                backgroundColor: theme.colors.colorAccent,
            },
            hover: {
                textColor: theme.colors.colorAccent,
                borderColor: theme.colors.colorPrimary,
                backgroundColor: theme.colors.colorPrimary,
            },
        },
        transitionTime: theme.transitionTime,
        borderRadius: theme.borderRadius,
        removeBorderMobile: true,
    };

    return (
        <>
            <HamburgerButton isHamburgerOpen={isHamburgerOpen} onClick={handleHamburgerClick} onBlur={handleMenuBlur} />
            <StyledMenu isHamburgerOpen={isHamburgerOpen} onFocus={handleMenuFocus} onBlur={handleMenuBlur}>
                {menuElements.map((element, index) => {
                    if (element.hasBorder) {
                        return <li key={index}><BorderedLink {...borderedLinkProps} href={element.href} onClick={handleMenuBlur}>{element.children}</BorderedLink></li>
                    } else {
                        return <li key={index}><UnderlinedLink {...underlinedLinkProps} href={element.href} onClick={handleMenuBlur}>{element.children}</UnderlinedLink></li>
                    }
                })}
            </StyledMenu>
        </>
    );
}
