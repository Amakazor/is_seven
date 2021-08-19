import React, {ReactChild} from 'react';
import styled, {css} from 'styled-components';
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
`;

const StyledCodeBlock = styled.div<codeBlockProps>`
    display: block;
    width: 100%;

    border: 0.125rem solid ${props => props.borderColor};
    border-radius: ${props => props.borderRadius};
    font-size: ${props => props.fontSize};
    position: sticky;
    top: 7rem;
    overflow: hidden;

    @media ${device.mobileL.max} {
        position: static;
    }
`;

const StyledLabel = css<codeBlockProps>`
    &::before {
        display: block;
        position: absolute;
        right: 0.3rem;
        top: 0.3rem;
        content: 'Request';
        color: ${props => props.labelColor};
    }
`;

const StyledRequestResponseCommon = css`
    margin: 0;
    padding: 1.5rem;
    font-family: Consolas, Inconsolata, monospace;
    position: relative;
    overflow-wrap: break-word;

    ${StyledLabel}
`;

const StyledRequest = styled.div<codeBlockProps>`
    ${StyledRequestResponseCommon}

    color: ${props => props.backgroundColor};
    background: ${props => props.textColor};

    &::before {
        content: 'Request';
    }
`;

const StyledResponse = styled.div<codeBlockProps>`
    ${StyledRequestResponseCommon}

    color: ${props => props.textColor};
    background: ${props => props.backgroundColor};

    display: ${props => (!props.response ? 'none' : 'block')};

    &::before {
        content: 'Response';
    }
`;

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
