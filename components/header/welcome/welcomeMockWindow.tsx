import styled from 'styled-components';
import device from '../../../utility/device';

const MockWindowContainer = styled.div`
    position: relative;
    width: 50rem;
    height: 30rem;
    background: ${(props) => props.theme.colorPrimary};
    border-radius: 2%;
    display: flex;
    z-index: 10;
    flex-direction: column;
    overflow: hidden;
    transform: rotateZ(2deg);
    box-shadow: 8px 4px 0 #333333;
    border: 0.125rem solid #333333;
    flex-shrink: 0;
    pointer-events: none;
    margin-top: 5rem;

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
    border-top: 0.0625rem solid ${(props) => props.theme.colorAccent};
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
    background: ${(props) => props.theme.colorBackground};

    @media ${device.mobileL.max} {
        height: 3vw;
        gap: 0.75vw;
        padding: 0.75vw;
    }
`;

const MockWindowButton = styled.div<{ color: string }>`
    width: 1rem;
    height: 1rem;
    background: ${(props) => props.color};
    border-radius: 50%;

    @media ${device.mobileL.max} {
        width: 1.5vw;
        height: 1.5vw;
    }
`;

const MockWindowLeft = styled.div`
    width: 30%;
    border-right: 0.0625rem solid ${(props) => props.theme.colorAccent};
`;

const MockWindowFile = styled.div<{ isActive: boolean }>`
    width: 100%;
    padding: 0.25rem 0.5rem;
    background: ${(props) => (props.isActive ? props.theme.colorBackground : null)};
    font-weight: ${(props) => (props.isActive ? 600 : 400)};

    @media ${device.mobileL.max} {
        padding: 0.33vw 0.75vw;
        font-size: calc(0.4rem + 1.1vw);
    }
`;

interface MockWindowLineProps {
    isMockLine?: boolean;
    indent?: {
        left: number;
        right: number;
    };
}

const MockWindowLine = styled.div<MockWindowLineProps>`
    display: flex;
    flex-direction: row;
    width: calc(95% - ${(props) => ((props.indent?.left ?? 0) + (props.indent?.right ?? 0)) * 5}%);
    align-items: baseline;
    justify-content: flex-start;
    overflow: hidden;
    flex-shrink: 0;
    color: #999999;

    @media ${device.mobileL.max} {
        font-size: calc(0.5rem + 1.1vw);
    }

    & > span {
        font-size: 0.8rem;
        color: ${(props) => props.theme.colorAccent};
        margin-left: ${(props) => props.indent?.left ?? 0}rem;
        font-weight: 600;
        @media ${device.mobileL.max} {
            margin-left: ${(props) => props.indent?.left ?? 0 * 1.5 + 1.5}vw;
            font-size: calc(0.35rem + 0.9vw);
        }
    }

    &::after {
        margin-left: ${(props) => props.indent?.left ?? 0}rem;
        transform: translateY(-33%);
        position: relative;
        height: 100%;
        display: ${(props) => (props.isMockLine ? 'block' : 'none')};
        content: '\u00A0';
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #999999;
        text-decoration-thickness: 2px;
        line-height: 0;
        word-spacing: 40rem;
        transform-origin: left;

        @media ${device.mobileL.max} {
            margin-left: ${(props) => props.indent?.left ?? 0 * 1.5 + 1.5}vw;
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

export default function WelcomeMockWindow() {
    const lines: Array<MockWindowLineProps & { content?: JSX.Element }> = [
        { indent: { left: 0, right: 0 } },
        { indent: { left: 0, right: 10 } },
        { indent: { left: 2, right: 2 } },
        { indent: { left: 2, right: 4 } },
        { indent: { left: 2, right: 6 } },
        { indent: { left: 2, right: 2 } },
        { indent: { left: 0, right: 8 } },
        { indent: { left: 0, right: 0 }, isMockLine: false, content: <span>{'axios.get(isseven.awrzawinski.xyz/api/7)'}</span> },
        { indent: { left: 2, right: 0 }, isMockLine: false, content: <span>{'.then(() => setSuccessfulDev("ME"));'}</span> },
        { indent: { left: 0, right: 0 } },
        { indent: { left: 0, right: 8 } },
        { indent: { left: 0, right: 12 } },
        { indent: { left: 2, right: 6 } },
        { indent: { left: 0, right: 16 } },
        { indent: { left: 2, right: 2 } },
        { indent: { left: 0, right: 12 } },
        { indent: { left: 0, right: 6 } },
        { indent: { left: 2, right: 6 } },
        { indent: { left: 2, right: 8 } },
        { indent: { left: 2, right: 2 } },
        { indent: { left: 0, right: 0 } },
        { indent: { left: 0, right: 10 } },
        { indent: { left: 2, right: 2 } },
        { indent: { left: 2, right: 4 } },
        { indent: { left: 2, right: 6 } },
        { indent: { left: 2, right: 2 } },
        { indent: { left: 0, right: 8 } },
    ];

    const filenames: Array<{ name: string; isActive: boolean }> = [
        { name: 'node_modules', isActive: false },
        { name: 'menu.tsx', isActive: false },
        { name: 'masterpiece.png', isActive: false },
        { name: 'blame.css', isActive: false },
        { name: 'checkSeven.ts', isActive: true },
        { name: 'something.ts', isActive: false },
        { name: 'itsajoke.md', isActive: false },
        { name: 'package.json', isActive: false },
    ];

    return (
        <MockWindowContainer role="presentation">
            <MockWindowButtons role="presentation">
                {['#FF605C', '#FFBD44', '#00CA4E'].map((value, index) => (
                    <MockWindowButton role="presentation" color={value} key={index}></MockWindowButton>
                ))}
            </MockWindowButtons>
            <MockWindowInside role="presentation">
                <MockWindowLeft role="presentation">
                    {filenames.map((value, index) => (
                        <MockWindowFile role="presentation" isActive={value.isActive} key={index}>
                            {value.name}
                        </MockWindowFile>
                    ))}
                </MockWindowLeft>
                <MockWindowRight role="presentation">
                    {lines.map((value, index) => (
                        <MockWindowLine role="presentation" {...value} isMockLine={value.isMockLine ?? true} key={index}>
                            <MockWindowLineNumber>{index}</MockWindowLineNumber>
                            {value?.content}
                        </MockWindowLine>
                    ))}
                </MockWindowRight>
            </MockWindowInside>
        </MockWindowContainer>
    );
}