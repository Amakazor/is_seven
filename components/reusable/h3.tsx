import { ReactChild } from 'react';
import styled from 'styled-components';
import device from '../../utility/device';

const StyledH3 = styled.h3<{textColor: string}>`
    font-size: 2rem;
    color: ${(props) => props.textColor};
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5em;
    line-height: 1.1;
    text-align: center;

    @media ${device.mobileL.max} {
        font-size: 1.5rem;
    }
`;

export default function H3(props: {textColor: string, children: ReactChild | ReactChild[] }) {
    return <StyledH3 textColor={props.textColor}>{props.children}</StyledH3>;
}
