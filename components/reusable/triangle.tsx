import { ReactChild } from "react";
import styled from "styled-components";

interface triangleProps {
    backgroundColor: string;
    isReversed?: boolean

    children?: ReactChild | ReactChild[];
}

const StyledTriangle = styled.div<triangleProps>`
    width: 100%;
    height: 20vw;
    position: relative;
    background: ${(props) => props.backgroundColor};
    clip-path: ${(props) => (!props.isReversed ? 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)' : 'polygon(0 100%, 100% 100%, 100% 0, 50% 50%, 0 0)')};
    overflow: hidden;
`

export default function Triangle(props: triangleProps) { return <StyledTriangle {...props}>{props.children}</StyledTriangle> }