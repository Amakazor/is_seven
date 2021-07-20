import React, { ReactChild } from 'react';
import styled, { css } from 'styled-components';
import device from '../../utility/device';

export interface codeBlockProps {
    textColor: string;
    backgroundColor: string;
    borderColor: string;
    separatorColor: string;
    labelColor: string;
    borderRadius: string;
    fontSize: string;

    request: ReactChild | ReactChild[];
    response?: ReactChild | ReactChild[];
}

const StyledWrapper = styled.div`
    width: 100%;
    align-self: stretch;
`

const StyledCodeBlock = styled.div<codeBlockProps>`
    display: block;
    width: 100%;
    
    border: 0.125rem solid ${(props) => props.borderColor};
    border-radius: ${(props) => props.borderRadius};
    font-size: ${(props) => props.fontSize};
    position: sticky;
    top: 7rem;

    @media ${device.mobileL.max} {
        position: static;
    }
`;

const StyledLabel = css<codeBlockProps>`
    &::before {
        display: block;
        position: absolute;
        right: .3rem;
        top: .3rem;
        content: 'Request';
        color: ${props => props.labelColor}
    }
`

const StyledRequest = styled.div<codeBlockProps>`
    margin: 0;
    padding: 1.5rem;
    font-family: Consolas, Inconsolata, monospace;
    position: relative;
    color: ${(props) => props.backgroundColor};
    background: ${(props) => props.textColor};
    overflow-wrap: break-word;

    ${StyledLabel}
    &::before {
        content: 'Request';
    }
`

const StyledResponse = styled.div<codeBlockProps>`
    display: ${props => !props.response ? 'none' : 'block'};

    margin: 0;
    padding: 1.5rem;
    position: relative;
    font-family: Consolas, Inconsolata, monospace;
    border-top: 0.065rem solid ${props => props.separatorColor};
    background: ${(props) => props.backgroundColor};

    ${StyledLabel}
    &::before {
        content: 'Response';
    }
`

export default function CodeBlock(props: codeBlockProps) {
    return (
        <StyledWrapper>
            <StyledCodeBlock {...props}>
                <StyledRequest {...props}>{props.request}</StyledRequest>
                <StyledResponse {...props}>{props.response}</StyledResponse>
            </StyledCodeBlock>
        </StyledWrapper>
    );
}
