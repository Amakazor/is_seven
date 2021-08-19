import styled, {ThemeContext} from 'styled-components';
import floatLookup from '../../utility/pseudoRandomFloatLookupTable';
import booleanLookup from '../../utility/pseudoRandomBooleanLookupTable';
import Triangle from '../../components/reusable/triangle';
import {useContext} from 'react';

interface WelcomeDecorationElementProps {
    isInside: boolean;
    index: number;
    total: number;
}

const pseudoRandomOffset = (index: number) =>
    (booleanLookup[(index * 5) & booleanLookup.length] ? 1 : -1) * floatLookup[(index * 3) & floatLookup.length] + 'vw';

const pseudoRandomRotation = (index: number) =>
    (booleanLookup[(index * 13) & booleanLookup.length] ? 1 : -1) * floatLookup[(index * 17) & floatLookup.length] * 20 + 'deg';

const DecorationContainer = styled.div`
    position: relative;
    width: 100%;
    top: -1px;
    height: 20vw;
    pointer-events: none;
    margin-bottom: 10vw;
`;

const RestyledTriangle = styled(Triangle)`
    bottom: 10vw;
`;

const DecorationElement = styled.div<WelcomeDecorationElementProps>`
    color: ${props => (props.isInside ? props.theme.colors.colorBackground : props.theme.colors.colorAccent)};
    // prettier-ignore
    bottom: calc(${props => pseudoRandomOffset(props.index)} + ${props => (props.isInside ? '-7vw' : ' 3vw')} + 3vw * ${props =>
        Math.abs(props.index - (props.total - 1) / 2)});
    font-size: 15vw;
    position: absolute;
    font-weight: 900;
    left: calc(100% / ${props => props.total} * ${props => props.index} + 100% / ${props => props.total} / 2);
    transform: translateX(-50%) rotateZ(${props => pseudoRandomRotation(props.index)});
    line-height: 1em;
    text-shadow: ${props =>
        [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
        ]
            .map(value => `${value[0] * 0.125}rem ${value[1] * 0.125}rem 1px ${props.theme.colors.colorPrimary}`)
            .join(', ')};
`;

export default function HeaderDecoration() {
    const theme = useContext(ThemeContext);
    const decorationElementsCount = 7;

    const getDecorationElements = (isInside: boolean) =>
        Array(decorationElementsCount)
            .fill(0)
            .map((_, index) => (
                <DecorationElement role="presentation" isInside={isInside} key={index} index={index} total={decorationElementsCount}>
                    7
                </DecorationElement>
            ));

    return (
        <DecorationContainer role="presentation">
            <Triangle backgroundColor={theme.colors.colorAccent}>{getDecorationElements(true)}</Triangle>
            <RestyledTriangle backgroundColor={theme.colors.colorBackground} isReversed={true}>
                {getDecorationElements(false)}
            </RestyledTriangle>
        </DecorationContainer>
    );
}
