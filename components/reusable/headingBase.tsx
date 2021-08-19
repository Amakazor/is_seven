import {ReactChild} from 'react';
import styled from 'styled-components';

export interface HeadingBaseProps {
    textColor: string;
    textAling?: 'left' | 'right' | 'center';

    children: ReactChild | ReactChild[];
}

const HeadingBase = styled.span<HeadingBaseProps>`
    color: ${props => props.textColor};
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.75em;
    line-height: 1.1;
    text-align: ${props => props.textAling};
`;

export default HeadingBase;
