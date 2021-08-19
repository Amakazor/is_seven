import Link from 'next/link';
import React, {MouseEventHandler, ReactChild} from 'react';
import StyledUnderlinedHoverBox, {UnderlinedHoverBoxProps} from './underlinedHoverBox';

export interface UnderlinedLinkProps extends UnderlinedHoverBoxProps {
    href: string;
    rel?: string;
    target?: string;
    onClick?: MouseEventHandler;
    children?: ReactChild | ReactChild[];
    isNextLink?: boolean;
}

export default function UnderlinedLink(props: UnderlinedLinkProps) {
    return props.isNextLink ? (
        <Link href={props.href}>
            <StyledUnderlinedHoverBox as="a" {...props}>
                {props.children}
            </StyledUnderlinedHoverBox>
        </Link>
    ) : (
        <StyledUnderlinedHoverBox as="a" {...props}>
            {props.children}
        </StyledUnderlinedHoverBox>
    );
}
