import { ReactChild } from 'react';
import styled from 'styled-components';

const StyledCenteredSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    scroll-margin-top: 6rem;
`

export default function CenteredSection(props: {children: ReactChild | ReactChild[], id?: string}) {
    return (
        <StyledCenteredSection id={props.id ?? ""}>
            {props.children}
        </StyledCenteredSection>
    )
}