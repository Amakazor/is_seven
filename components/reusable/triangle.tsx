import {ReactChild} from 'react';
import styled from 'styled-components';

interface triangleProps {
    backgroundColor: string;
    isReversed?: boolean;
    halfSize?: boolean;

    children?: ReactChild | ReactChild[];
}

const StyledTriangle = styled.div<triangleProps>`
    width: 100%;
    height: ${props => (props.halfSize ? '12vw' : '20vw')};
    position: relative;
    background: ${props => props.backgroundColor};
    clip-path: ${props =>
        props.halfSize
            ? !props.isReversed
                ? 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)'
                : 'polygon(0 100%, 100% 100%, 100% 0, 50% 90%, 0 0)'
            : !props.isReversed
            ? 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)'
            : 'polygon(0 100%, 100% 100%, 100% 0, 50% 50%, 0 0)'};
    overflow: hidden;
`;

export default function Triangle(props: triangleProps) {
    return <StyledTriangle {...props}>{props.children}</StyledTriangle>;
}
