import React, { ReactChild } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1<{textColor: string}>`
    font-size: 5rem;
    color: ${(props) => props.textColor};
    font-weight: 500;
    margin: 0;
`;

export default function H1(props: {textColor: string, children: ReactChild | ReactChild[] }) {
    return <StyledH1 textColor={props.textColor}>{props.children}</StyledH1>;
}
