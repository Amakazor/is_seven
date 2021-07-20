import React from 'react';
import styled from 'styled-components';
import device from '../../../utility/device';

export interface documentationElementProps {
    children?: React.ReactChild | React.ReactChild[];
    backgroundColor: string;
    borderColor: string;
    borderRadius: string;
}

const DocumentationElementContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    padding: 0 10%;
    gap: 2rem;
    position: relative;
    
    @media ${device.laptop.max} {
        padding: 0 .75rem;
        gap: 1rem;
    }

    @media ${device.mobileL.max} {
        flex-direction: column;
        padding: 0 5%;
    }

    @media ${device.mobileM.max} {
        padding: 0;
    }

    &:not(:first-of-type) {
        margin-top: 2rem;

        @media ${device.mobileL.max} {
            margin-top: 4rem;
        }
    }
`;

const DocumentationElementSubContainer = styled.div<documentationElementProps>`
    width: 50%;
    flex: 0 0 50%;
    background: ${props => props.backgroundColor};
    border: 0.125rem solid ${props => props.borderColor};
    border-radius: ${(props) => props.borderRadius};
    padding: 1rem;
    font-size: 1.2rem;

    @media ${device.tablet.max} {
        width: 100%;
        font-size: 1rem;
    }
`;

export default function DocumentationElement(props: documentationElementProps) {
    return (
        <DocumentationElementContainer>
            {props.children}
        </DocumentationElementContainer>
    );
}

export function DocumentationText(props: documentationElementProps) {
    return (
        <DocumentationElementSubContainer {...props}>
            {props.children}
        </DocumentationElementSubContainer>
    );
}