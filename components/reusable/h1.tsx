import React, { ReactChild } from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

const StyledH1 = styled.h1`
    font-size: 5rem;
    color: ${(props) => props.theme.colorPrimary};
    font-weight: 500;
    margin: 0;
`;

export default function H1(props: { children: ReactChild | ReactChild[] }) {
    return <StyledH1>{props.children}</StyledH1>;
}
