import { ReactChild } from 'react';
import styled from 'styled-components';
import device from '../../utility/device';

const StyledH4 = styled.h4<{textColor: string}>`
    font-size: 1.5rem;
    color: ${(props) => props.textColor};
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5em;
    line-height: 1.1;
    text-align: center;

    @media ${device.mobileL.max} {
        font-size: 1.2rem;
    }
`;

export default function H4(props: {textColor: string, children: ReactChild | ReactChild[] }) {
    return <StyledH4 textColor={props.textColor}>{props.children}</StyledH4>;
}
