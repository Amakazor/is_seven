import Link from 'next/link';
import React, { MouseEventHandler, ReactChild } from 'react';
import StyledBorderedHoverBox, { BorderedHoverBoxProps } from './borderedHoverBox';

export interface BorderedLinkProps extends BorderedHoverBoxProps {
    href: string;
    onClick: MouseEventHandler;
    children?: ReactChild | ReactChild[];
}

export default function BorderedLink(props: BorderedLinkProps) {
    return (
        <Link href={props.href}>
            <StyledBorderedHoverBox as="a" {...props}>{props.children}</StyledBorderedHoverBox>
        </Link>
    )
}