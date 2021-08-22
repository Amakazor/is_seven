import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import H4 from '../components/reusable/h4';
import Triangle from '../components/reusable/triangle';
import UnderlinedLink from '../components/reusable/underlinedLink';
import UnorderedList from '../components/reusable/unorderedList';
import device from '../utility/device';

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
`;

export default function Footer() {
    const theme = useContext(ThemeContext);

    const commonListProps = {
        textColor: theme.colors.colorPrimary,
        decorationColor: theme.colors.colorPrimary,
        fontSize: theme.fonts.size.slightlySmaller,
        fontWeight: theme.fonts.weight.standard,
    };

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
        fontWeight: theme.fonts.weight.standard,
        isFullWidth: true,
    };

    interface footerLink {
        text: string;
        href: string;
        isExternal: boolean;
        isBlank: boolean;
    }

    interface footerColumn {
        name: string;
        links: footerLink[];
    }

    const footerLinks: footerColumn[] = [
        {
            name: 'Important links',
            links: [
                {
                    text: 'Definition of seven',
                    href: 'https://en.wikipedia.org/wiki/7',
                    isExternal: true,
                    isBlank: true,
                },
                {
                    text: 'Definition of equality',
                    href: 'https://en.wikipedia.org/wiki/Equality_(mathematics)',
                    isExternal: true,
                    isBlank: true,
                },
                {
                    text: 'Definition of inequality',
                    href: 'https://en.wikipedia.org/wiki/Inequality_(mathematics)',
                    isExternal: true,
                    isBlank: true,
                },
                {
                    text: 'Definition of a joke',
                    href: 'https://en.wikipedia.org/wiki/Joke',
                    isExternal: true,
                    isBlank: true,
                },
            ],
        },
        {
            name: 'Related Sites',
            links: [
                {
                    text: 'isevenapi.xyz - The inspiration behind this idea',
                    href: 'https://isevenapi.xyz/',
                    isExternal: true,
                    isBlank: true,
                },
                {
                    text: 'awrzawinski.xyz - My home site',
                    href: 'http://awrzawinski.xyz/',
                    isExternal: false,
                    isBlank: true,
                },
            ],
        },
        {
            name: 'Contact',
            links: [
                {
                    text: 'Email - arkadiusz.wrzawinski@gmail.com',
                    href: 'mailto:arkadiusz.wrzawinski@gmail.com',
                    isExternal: false,
                    isBlank: false,
                },
                {
                    text: 'Github - github.com/Amakazor',
                    href: 'https://github.com/Amakazor',
                    isExternal: true,
                    isBlank: true,
                },
            ],
        },
    ];

    return (
        <footer id="contact">
            <Triangle backgroundColor={theme.colors.colorAccent} isReversed={true} halfSize={true} />
            <StyledFooterContainer>
                {footerLinks.map((element, index) => (
                    <div key={index}>
                        <H4 textColor={theme.colors.colorPrimary}>{element.name}</H4>
                        <UnorderedList {...commonListProps}>
                            {element.links.map((link, linkIndex) => (
                                <UnderlinedLink
                                    key={linkIndex}
                                    {...underlinedLinkProps}
                                    href={link.href}
                                    rel={link.isExternal && 'external'}
                                    target={link.isBlank && '__blank'}>
                                    {link.text}
                                </UnderlinedLink>
                            ))}
                        </UnorderedList>
                    </div>
                ))}
            </StyledFooterContainer>
            <StyledFooterContainer>
                <span>
                    Copyright <sup>&copy;</sup> {new Date().getFullYear()}{' '}
                    <UnderlinedLink {...underlinedLinkProps} href={'http://awrzawinski.xyz/'} target={'__blank'}>
                        Arkadiusz Wrzawiński
                    </UnderlinedLink>
                </span>
            </StyledFooterContainer>
        </footer>
    );
}
