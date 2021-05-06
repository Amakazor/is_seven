import React, { ReactChild } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h2<{textColor: string}>`
    font-size: 3rem;
    color: ${(props) => props.textColor};
    font-weight: 500;
    margin: 0;
`;

export default function H2(props: {textColor: string, children: ReactChild | ReactChild[] }) {
    return <StyledH1 textColor={props.textColor}>{props.children}</StyledH1>;
}
