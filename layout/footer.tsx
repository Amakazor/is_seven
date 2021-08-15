import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import H4 from "../components/reusable/h4";
import Triangle from "../components/reusable/triangle";
import UnderlinedLink from "../components/reusable/underlinedLink";
import UnorderedList from "../components/reusable/unorderedList";
import device from "../utility/device";

export default function Footer() {
    const theme = useContext(ThemeContext);

    const commonListProps = {
        textColor: theme.colors.colorPrimary,
        decorationColor: theme.colors.colorPrimary,
        fontSize: theme.fonts.slightlySmaller.size,
        fontWeight: theme.fonts.slightlySmaller.weight,
    }

    const underlinedLinkProps = {
        colors: {
            normal: {
                textColor: theme.colors.colorPrimary,
                backgroundColor: 'transparent',
            },
            hover: {
                textColor: theme.colors.colorPrimary,
                backgroundColor: 'transparent',
            },
            underlineColor: theme.colors.colorPrimary,
        },
        transitionTime: theme.transitionTime,
        fontWeight: theme.fonts.standard.weight,
        isFullWidth: true
    };

    const StyledFooterContainer = styled.div`
        background-color: ${props => props.theme.colors.colorAccent};
        color: ${props => props.theme.colors.colorPrimary};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
        width: 100%;
        padding: 2rem 10%;  
        margin-top: -1px;

        @media ${device.tablet.max} {
            flex-direction: column;
            padding: 2rem 20%;
        }

        @media ${device.mobileL.max} {
            padding: 2rem 15%;
        }

        @media ${device.mobileM.max} {
            padding: 2rem 10%;
        }

        @media ${device.mobileS.max} {
            padding: 2rem 5%;
        }
    `


    return (
        <footer>
            <Triangle backgroundColor={theme.colors.colorAccent} isReversed={true} halfSize={true}/>
            <StyledFooterContainer>
                <div>
                    <H4 textColor={theme.colors.colorPrimary}>Important links</H4>
                    <UnorderedList {...commonListProps}>
                        <UnderlinedLink {...underlinedLinkProps} href={'https://en.wikipedia.org/wiki/7'} rel={'external'} target={'__blank'}>Definition of seven</UnderlinedLink>
                        <UnderlinedLink {...underlinedLinkProps}  href={'https://en.wikipedia.org/wiki/Equality_(mathematics)'} rel={'external'} target={'__blank'}>Definition of equality</UnderlinedLink>
                        <UnderlinedLink {...underlinedLinkProps}  href={'https://en.wikipedia.org/wiki/Inequality_(mathematics)'} rel={'external'} target={'__blank'}>Definition of inequality</UnderlinedLink>
                        <UnderlinedLink {...underlinedLinkProps}  href={'https://en.wikipedia.org/wiki/Joke'} rel={'external'} target={'__blank'}>Definition of a joke</UnderlinedLink>
                    </UnorderedList>
                </div>
                <div>
                    <H4 textColor={theme.colors.colorPrimary}>Related Sites</H4>
                    <UnorderedList {...commonListProps}>
                        <UnderlinedLink {...underlinedLinkProps}  href={'https://isevenapi.xyz/'} rel={'external'} target={'__blank'}>isevenapi.xyz - The inspiration behind this idea</UnderlinedLink>
                        <UnderlinedLink {...underlinedLinkProps}  href={'http://awrzawinski.xyz/'} target={'__blank'}>awrzawinski.xyz - My home site</UnderlinedLink>
                    </UnorderedList>
                </div>
                <div>
                    <H4 textColor={theme.colors.colorPrimary}>Contact</H4>
                    <UnorderedList {...commonListProps}>
                        <UnderlinedLink {...underlinedLinkProps}  href={'mailto:arkadiusz.wrzawinski@gmail.com'}> Email - arkadiusz.wrzawinski@gmail.com</UnderlinedLink>
                        <UnderlinedLink {...underlinedLinkProps}  href={'https://github.com/Amakazor'} rel={'external'} target={'__blank'}>Github - github.com/Amakazor</UnderlinedLink>
                    </UnorderedList>
                </div>
            </StyledFooterContainer>
            <StyledFooterContainer>
                <span>Copyright <sup>&copy;</sup> {new Date().getFullYear()}  <UnderlinedLink {...underlinedLinkProps}  href={'http://awrzawinski.xyz/'} target={'__blank'}>Arkadiusz Wrzawiński</UnderlinedLink></span>
            </StyledFooterContainer>
        </footer>
    )
}