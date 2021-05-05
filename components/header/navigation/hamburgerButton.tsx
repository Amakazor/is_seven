import React, { FocusEventHandler, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import device from '../../../utility/device';

interface hamburgerProps {
    isHamburgerOpen: boolean;
    onClick: MouseEventHandler;
    onBlur: FocusEventHandler;
}

const StyledHamburgerbuttonOpen = css`
    & > div {
        transform: scaleX(0);
    }

    &::before {
        transform: translateX(-0.6rem) rotateZ(-45deg) scaleX(0.81);
    }

    &::after {
        transform: translateX(-0.6rem) rotateZ(45deg) scaleX(0.81);
    }
`;

const StyledHamburgerButton = styled.button<hamburgerProps>`
    background: none;
    border: none;
    position: relative;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem 0;

    & > div,
    &::after,
    &::before {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 0.25rem;
        background: ${(props) => props.theme.colorPrimary};
        left: 0;
        right: 0;
        transition: transform ${(props) => props.theme.transitionTime};
    }

    &::after,
    &::before {
        transform-origin: right;
    }

    ${(props) => (props.isHamburgerOpen ? StyledHamburgerbuttonOpen : null)}

    &::before {
        top: 0.5rem;
    }

    & > div {
        top: calc(50% - (0.25rem / 2));
    }

    &::after {
        bottom: 0.5rem;
    }

    @media ${device.tablet.min} {
        display: none;
    }
`;

export default function HamburgerButton(props: hamburgerProps) {
    return (
        <StyledHamburgerButton role="switch" aria-checked={props.isHamburgerOpen} {...props}>
            <div role="presentation" />
        </StyledHamburgerButton>
    );
}
