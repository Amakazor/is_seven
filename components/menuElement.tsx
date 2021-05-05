import Link from 'next/link';
import React from 'react';
import styled from "styled-components";
import device from "../utility/device";

export interface menuElementProps {
    href: string
    name: string
    hasBorder?: boolean
}

export const StyledMenuElement = styled.li<menuElementProps>`
    color: ${props => props.theme.colorPrimary};
    transition: color ${props => props.theme.transitionTime}, background ${props => props.theme.transitionTime};
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    text-align: center;

    @media ${device.tablet.min} {
        border: ${props => props.hasBorder ? "0.125rem solid "+props.theme.colorPrimary : ""};
        border-radius: ${props => props.hasBorder ? props.theme.borderRadius : "0"};
        width: auto;
    }

    & a {
        display: block;
        position: relative;
        padding: .5rem 1.5rem;
    }

    &:focus,
    &:focus-within,
    &:hover {

        @media ${device.tablet.min} {
            color: ${props => props.hasBorder ? props.theme.colorAccent : props.theme.colorPrimary};
            background: ${props => props.hasBorder ? props.theme.colorPrimary : ""};

            & a::after {
                transform: scaleX(1);
            }
        }
    }

    & a::after {
        display: ${props => props.hasBorder ? "none" : "block"};
        content: "";
        transform-origin: left;
        width: 80%;
        position: absolute;
        height: 0.125rem;
        left: 10%;
        top: 100%;
        background: ${props => props.theme.colorPrimary};
        transform: scaleX(0);
        transition: transform ${props => props.theme.transitionTime};
    }
`

export default function MenuElement(props: menuElementProps) {
    return (
        <StyledMenuElement
            role="presentation"
            {...props}
        >
            <Link href={props.href}>
                <a>{props.name}</a>
            </Link>
        </StyledMenuElement>
    )
}