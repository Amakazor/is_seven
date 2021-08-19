import {ReactChild} from 'react';
import styled from 'styled-components';

interface boldProperties {
    weight: number;
    children: ReactChild | ReactChild[];
}

const BoldElement = styled.span<{weight: number}>`
    font-weight: ${props => props.weight};
`;

export default function Bold(props: boldProperties) {
    return <BoldElement weight={props.weight}>{props.children}</BoldElement>;
}
