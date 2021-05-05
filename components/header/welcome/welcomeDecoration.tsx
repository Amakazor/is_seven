import styled, { css } from 'styled-components';
import floatLookup from '../../../utility/pseudoRandomFloatLookupTable';
import booleanLookup from '../../../utility/pseudoRandomBooleanLookupTable';

interface WelcomeDecorationProps {
    isInside: boolean;
}

interface WelcomeDecorationElementProps extends WelcomeDecorationProps {
    index: number;
    total: number;
}

const pseudoRandomOffset = (index: number) => {
    return (booleanLookup[index & booleanLookup.length] ? 1 : -1) * floatLookup[index & floatLookup.length] + 'vw';
};

const pseudoRandomRotation = (index: number) => {
    return (booleanLookup[index * 10 & booleanLookup.length] ? 1 : -1) * floatLookup[index * 10 & floatLookup.length] * 20 + 'deg';
};

const DecorationContainer = styled.div`
    position: relative;
    width: 100%;
    top: -1px;
    height: 20vw;
    pointer-events: none;
`;

const DecorationSubcontainerInside = css`
    bottom: 0;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
    background: ${(props) => props.theme.colorAccent};
`;

const DecorationSubcontainerOutside = css`
    bottom: -10vw;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 50% 50%, 0 0);
    background: ${(props) => props.theme.colorBackground};
`;

const DecorationSubcontainer = styled.div<WelcomeDecorationProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    ${(props) => (props.isInside ? DecorationSubcontainerInside : DecorationSubcontainerOutside)}
`;

const DecorationElementInside = css<WelcomeDecorationElementProps>`
    color: ${(props) => props.theme.colorBackground};
    bottom: calc(${(props) => pseudoRandomOffset(props.index)} + -7vw + 3vw * ${(props) => Math.abs(props.index - (props.total - 1) / 2)});
`;

const DecorationElementOutside = css<WelcomeDecorationElementProps>`
    color: ${(props) => props.theme.colorAccent};
    bottom: calc(${(props) => pseudoRandomOffset(props.index)} + 3vw + 3vw * ${(props) => Math.abs(props.index - (props.total - 1) / 2)});
`;

const DecorationElement = styled.div<WelcomeDecorationElementProps>`
    font-size: 15vw;
    position: absolute;
    font-weight: 900;
    left: calc(100% / ${(props) => props.total} * ${(props) => props.index} + 100% / ${(props) => props.total} / 2);
    transform: translateX(-50%) rotateZ(${props => pseudoRandomRotation(props.index)});
    line-height: 1em;
    ${(props) => (props.isInside ? DecorationElementInside : DecorationElementOutside)}
    text-shadow: -0.125rem -0.125rem 1px ${props => props.theme.colorPrimary}, -0.125rem 0.125rem 1px ${props => props.theme.colorPrimary}, 0.125rem -0.125rem 1px ${props => props.theme.colorPrimary}, 0.125rem 0.125rem 1px ${props => props.theme.colorPrimary};
`;

export default function WelcomeDecoration() {
    const decorationElementsCount = 7;

    return (
        <DecorationContainer role="presentation">
            <DecorationSubcontainer role="presentation" isInside={true}>
                {Array(decorationElementsCount)
                    .fill(0)
                    .map((_, index) => {
                        return (
                            <DecorationElement role="presentation" isInside={true} key={index} index={index} total={decorationElementsCount}>
                                7
                            </DecorationElement>
                        );
                    })}
            </DecorationSubcontainer>
            <DecorationSubcontainer role="presentation" isInside={false}>
                {Array(decorationElementsCount)
                    .fill(0)
                    .map((_, index) => {
                        return (
                            <DecorationElement role="presentation" isInside={false} key={index} index={index} total={decorationElementsCount}>
                                7
                            </DecorationElement>
                        );
                    })}
            </DecorationSubcontainer>
        </DecorationContainer>
    );
}
