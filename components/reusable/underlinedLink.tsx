import Link from 'next/link';
import React, { MouseEventHandler, ReactChild } from 'react';
import StyledUnderlinedHoverBox, { UnderlinedHoverBoxProps } from '../styled/underlinedHoverBox';

export interface UnderlinedLinkProps extends UnderlinedHoverBoxProps {
    href: string;
    onClick: MouseEventHandler;
    children?: ReactChild | ReactChild[];
}

export default function UnderlinedLink(props: UnderlinedLinkProps) {
    return (
        <Link href={props.href}>
            <StyledUnderlinedHoverBox as="a" {...props}>{props.children}</StyledUnderlinedHoverBox>
        </Link>
    )
}