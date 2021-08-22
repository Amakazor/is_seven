import styled from 'styled-components';
import device from '../../../utility/device';

interface Line {
    isMockLine: boolean;
    indent: {
        left: number;
        right: number;
    };
    content?: JSX.Element;
}

interface Filename {
    name: string;
    isActive: boolean;
}

export interface WelcomeMockWindowProps {
    lines: Array<Line>;
    filenames: Array<Filename>;
}

const MockWindowContainer = styled.div`
    position: relative;
    width: 50rem;
    height: 30rem;
    background: ${props => props.theme.colors.colorPrimary};
    border-radius: 2%;
    display: flex;
    z-index: 10;
    flex-direction: column;
    overflow: hidden;
    transform: rotateZ(2deg);
    box-shadow: 8px 4px 0 #333333;
    border: 0.125rem solid #333333;
    flex-shrink: 0;
    margin-top: 5rem;

    & * {
        cursor: default;
    }

    @media (max-width: 1650px) {
        width: 42rem;
        height: calc(42rem / 50 * 30);
    }

    @media ${device.laptop.max} {
        width: 45rem;
        height: calc(45rem / 50 * 30);
        margin: 0 auto;
    }

    @media ${device.mobileL.max} {
        width: 90vw;
        height: calc(90vw / 50 * 30);
    }
`;

const MockWindowInside = styled.div`
    width: 100%;
    height: 100%;
    border-top: 0.0625rem solid ${props => props.theme.colors.colorAccent};
    display: flex;
    flex-direction: row;
`;

const MockWindowButtons = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.5rem;
    flex-shrink: 0;
    gap: 0.5rem;
    background: ${props => props.theme.colors.colorBackground};

    @media ${device.mobileL.max} {
        height: 3vw;
        gap: 0.75vw;
        padding: 0.75vw;
    }
`;

const MockWindowButton = styled.div<{color: string; hoverColor: string}>`
    width: 1rem;
    height: 1rem;
    background: ${props => props.color};
    border-radius: 50%;
    transition: background ${props => props.theme.transitionTime};

    &:hover {
        background: ${props => props.hoverColor};
    }

    @media ${device.mobileL.max} {
        width: 1.5vw;
        height: 1.5vw;
    }
`;

const MockWindowLeft = styled.div`
    width: 30%;
    border-right: 0.0625rem solid ${props => props.theme.colors.colorAccent};
`;

const MockWindowFile = styled.div<Filename>`
    width: 100%;
    padding: 0.25rem 0.5rem;
    background: ${props => (props.isActive ? props.theme.colors.colorBackground : null)};
    font-weight: ${props => (props.isActive ? 600 : 400)};
    transition: background ${props => props.theme.transitionTime};

    &:hover {
        background: ${props => props.theme.colors.colorBackground};
    }

    @media ${device.mobileL.max} {
        padding: 0.33vw 0.75vw;
        font-size: calc(0.4rem + 1.1vw);
    }
`;

const MockWindowLine = styled.div<Line>`
    display: flex;
    flex-direction: row;
    width: calc(95% - ${props => ((props.indent?.left ?? 0) + (props.indent?.right ?? 0)) * 5}%);
    align-items: baseline;
    justify-content: flex-start;
    overflow: hidden;
    flex-shrink: 0;
    color: #aaaaaa;

    @media ${device.mobileL.max} {
        font-size: calc(0.5rem + 1.1vw);
    }

    &:hover > :first-child {
        color: ${props => props.theme.colors.colorAccent};
    }

    & > span {
        font-size: 0.8rem;
        color: ${props => props.theme.colors.colorAccent};
        margin-left: ${props => props.indent?.left ?? 0}rem;
        font-weight: 600;
        @media ${device.mobileL.max} {
            margin-left: ${props => props.indent?.left ?? 0 * 1.5 + 1.5}vw;
            font-size: calc(0.35rem + 0.9vw);
        }
    }

    &::after {
        margin-left: ${props => props.indent?.left ?? 0}rem;
        transform: translateY(-33%);
        position: relative;
        height: 100%;
        display: ${props => (props.isMockLine ? 'block' : 'none')};
        content: '\u00A0';
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #999999;
        text-decoration-thickness: 2px;
        line-height: 0;
        word-spacing: 40rem;
        transform-origin: left;

        @media ${device.mobileL.max} {
            margin-left: ${props => props.indent?.left ?? 0 * 1.5 + 1.5}vw;
            font-size: calc(0.5rem + 1.1vw);
            transform: scale(0.5) translateY(-100%);
        }
    }
`;

const MockWindowLineNumber = styled.div`
    height: 1.5rem;
    width: 2.5rem;
    flex-shrink: 0;
    text-align: right;
    padding-right: 1rem;
    transition: color ${props => props.theme.transitionTime};

    @media ${device.mobileL.max} {
        height: 2vw;
        width: 6vw;
        padding-right: 1.5vw;
    }
`;

const MockWindowRight = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`;

export default function WelcomeMockWindow(props: WelcomeMockWindowProps) {
    return (
        <MockWindowContainer role="presentation">
            <MockWindowButtons role="presentation">
                {[
                    {color: '#FF605C', hoverColor: '#ff8a88'},
                    {color: '#FFBD44', hoverColor: '#fdd589'},
                    {color: '#00CA4E', hoverColor: '#00f55e'},
                ].map((value, index) => (
                    <MockWindowButton role="presentation" color={value.color} hoverColor={value.hoverColor} key={index}></MockWindowButton>
                ))}
            </MockWindowButtons>
            <MockWindowInside role="presentation">
                <MockWindowLeft role="presentation">
                    {props.filenames.map((value, index) => (
                        <MockWindowFile className="mockWindowFile" role="presentation" {...value} key={index}>
                            {value.name}
                        </MockWindowFile>
                    ))}
                </MockWindowLeft>
                <MockWindowRight role="presentation">
                    {props.lines.map((value, index) => (
                        <MockWindowLine className="mockWindowLine" role="presentation" {...value} isMockLine={value.isMockLine} key={index}>
                            <MockWindowLineNumber>{index}</MockWindowLineNumber>
                            {value?.content}
                        </MockWindowLine>
                    ))}
                </MockWindowRight>
            </MockWindowInside>
        </MockWindowContainer>
    );
}
