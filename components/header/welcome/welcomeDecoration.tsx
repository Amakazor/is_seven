import styled from 'styled-components';
import floatLookup from '../../../utility/pseudoRandomFloatLookupTable';
import booleanLookup from '../../../utility/pseudoRandomBooleanLookupTable';

interface WelcomeDecorationProps {
    isInside: boolean;
}

interface WelcomeDecorationElementProps extends WelcomeDecorationProps {
    index: number;
    total: number;
}

const pseudoRandomOffset = (index: number) => (booleanLookup[(index * 5) & booleanLookup.length] ? 1 : -1) * floatLookup[(index * 3) & floatLookup.length] + 'vw';

const pseudoRandomRotation = (index: number) => (booleanLookup[(index * 13) & booleanLookup.length] ? 1 : -1) * floatLookup[(index * 17) & floatLookup.length] * 20 + 'deg';

const DecorationContainer = styled.div`
    position: absolute;
    width: 100%;
    top: calc(100% - 1px);
    height: 20vw;
    pointer-events: none;
    overflow: hidden;
`;

const DecorationSubcontainer = styled.div<WelcomeDecorationProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${(props) => (props.isInside ? null : '-10vw')};
    background: ${(props) => (props.isInside ? props.theme.colorAccent : props.theme.colorBackground)};
    clip-path: ${(props) => (props.isInside ? 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)' : 'polygon(0 100%, 100% 100%, 100% 0, 50% 50%, 0 0)')};
`;

const DecorationElement = styled.div<WelcomeDecorationElementProps>`
    color: ${(props) => (props.isInside ? props.theme.colorBackground : props.theme.colorAccent)};
    bottom: calc(${(props) => pseudoRandomOffset(props.index)} + ${(props) => (props.isInside ? '-7vw' : ' 3vw')} + 3vw * ${(props) => Math.abs(props.index - (props.total - 1) / 2)});
    font-size: 15vw;
    position: absolute;
    font-weight: 900;
    left: calc(100% / ${(props) => props.total} * ${(props) => props.index} + 100% / ${(props) => props.total} / 2);
    transform: translateX(-50%) rotateZ(${(props) => pseudoRandomRotation(props.index)});
    line-height: 1em;
    text-shadow: ${(props) => 
        [
            [-1, -1],
            [-1,  1],
            [ 1, -1],
            [ 1,  1],
        ].map((value) => `${value[0] * 0.125}rem ${value[1] * 0.125}rem 1px ${props.theme.colorPrimary}`).join(', ')};
`;

export default function WelcomeDecoration() {
    const decorationElementsCount = 7;

    return (
        <DecorationContainer role="presentation">
            {[true, false].map((value, index) => {
                return (
                    <DecorationSubcontainer role="presentation" key={index} isInside={value}>
                        {Array(decorationElementsCount)
                            .fill(0)
                            .map((_, index) => {
                                return (
                                    <DecorationElement role="presentation" isInside={value} key={index} index={index} total={decorationElementsCount}>
                                        7
                                    </DecorationElement>
                                );
                            })}
                    </DecorationSubcontainer>
                );
            })}
        </DecorationContainer>
    );
}
