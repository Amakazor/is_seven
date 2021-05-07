import React, { ReactChild } from "react";
import styled from "styled-components";
import device from "../../utility/device";

interface UnorderedListProps {
    children: ReactChild | ReactChild[];
    textColor: string;
    decorationColor: string;
}

const StyledList = styled.ul`
    font-size: ${props => props.theme.fonts.standard.size};
    margin: 0;
    padding: 0;
`

const StyledListElement = styled.li<{textColor: string; decorationColor: string;}>`
    color: ${props => props.textColor} ;
    display: block;
    position: relative;
    list-style: none;
    font-weight: ${props => props.theme.fonts.slightlyBigger.weight};
    font-size: ${props => props.theme.fonts.slightlyBigger.size};
    padding-left: 1.5em;
    padding-top: .2em;
    padding-bottom: .2em;
    line-height: 1.2;

    &::before{
        position: absolute;
        display: block;
        content: "";
        left: 0;
        top: calc( 50% );
        width: .75em;
        height: 0;
        border-bottom: 0.125em solid ${props => props.decorationColor};
    }

    @media ${device.mobileL.max} {
        font-size: calc( ${props => props.theme.fonts.slightlyBigger.size} * 0.75);
    }
`

export default function UnorderedList(props: UnorderedListProps) {
    return(
        <StyledList>
            {React.Children.map(props.children, (child, index) => (<StyledListElement {...props} key={index}>{child}</StyledListElement>))}
        </StyledList>
    )    
}