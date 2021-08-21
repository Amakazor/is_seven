import {ReactChild} from 'react';
import styled from 'styled-components';

const StyledCenteredContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function CenteredContainer(props: {children: ReactChild | ReactChild[]; id?: string}) {
    return <StyledCenteredContainer>{props.children}</StyledCenteredContainer>;
}
