import { ReactChild } from 'react';
import styled from 'styled-components';

const StyledCenteredSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function CenteredSection(props: {children: ReactChild | ReactChild[]}) {
    return (
        <StyledCenteredSection>
            {props.children}
        </StyledCenteredSection>
    )
}