import React, {useRef} from 'react';
import styled from 'styled-components';

interface sliderProps {
    inactiveTextColor: string;
    activeTextColor: string;

    trackBackgroundColor: string;

    tackBackgroundColor: string;
    tackBorderColor: string;

    activeIndex: number;
    Values: string[] | number[];

    labelAll: boolean;
    labelActive: boolean;

    textTransitionTime: string;

    indexStateSetter?: React.Dispatch<React.SetStateAction<number>>;
    valueStateSetter?: React.Dispatch<React.SetStateAction<string | number>>;

    isNumeric?: boolean;
}

const SliderContainer = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    margin-top: 3rem;

    cursor: pointer;

    touch-action: none;
`;

interface trackProps {
    trackBackgroundColor: string;
}

const Track = styled.div<trackProps>`
    position: relative;

    width: 100%;
    height: 0.4rem;
    border-radius: 0.5rem;

    background: ${props => props.trackBackgroundColor};
`;

interface tackProps {
    count: number;
    activeIndex: number;

    tackBackgroundColor: string;
    tackBorderColor: string;

    textTransitionTime: string;
}

const Tack = styled.div<tackProps>`
    position: absolute;
    top: 50%;
    left: ${props => (100 / (props.count - 1)) * props.activeIndex}%;

    height: 1rem;
    width: 1rem;
    border: 0.25rem solid ${props => props.tackBorderColor};
    border-radius: 50%;

    outline-offset: 0.25rem;

    background: ${props => props.tackBackgroundColor};

    transform: translate(-50%, -50%);
    transition: left ${props => props.textTransitionTime};
`;

interface labelProps {
    count: number;
    isActive: boolean;
    index: number;

    inactiveTextColor: string;
    activeTextColor: string;

    textTransitionTime: string;
}

const Label = styled.div<labelProps>`
    position: absolute;
    top: -3rem;
    left: ${props => `calc(100% / ${props.count - 1} * ${props.index})`};

    font-size: 1.2rem;
    color: ${props => (props.isActive ? props.activeTextColor : props.inactiveTextColor)};
    cursor: pointer;

    user-select: none;

    transition: color ${props => props.textTransitionTime};
    transform: translateX(-50%);
`;

interface activeLabelProps {
    count: number;
    activeIndex: number;

    activeTextColor: string;

    textTransitionTime: string;
}

const ActiveLabel = styled.div<activeLabelProps>`
    position: absolute;
    top: -3rem;
    left: ${props => `calc(100% / ${props.count - 1} * ${props.activeIndex})`};
    z-index: 1;

    font-size: 1.2rem;
    color: ${props => props.activeTextColor};

    user-select: none;
    cursor: initial;

    transition: left ${props => props.textTransitionTime};
    transform: translateX(-50%);
`;

export default function Slider(props: sliderProps) {
    const trackRef = useRef();

    const getValueIndexFromEvent = (position: number) => {
        const boundingBox = (trackRef.current as HTMLElement).getBoundingClientRect();
        return Math.max(
            0,
            Math.min(
                props.Values.length - 1,
                Math.round(
                    (position - boundingBox.left) /
                        (boundingBox.width / (props.Values.length - 1)),
                ),
            ),
        );
    };

    const onPointerDown = (event: React.PointerEvent) => {
        setState(getValueIndexFromEvent(event.clientX));
    };

    const onPointerMove = (event: React.PointerEvent) => {
        if (event.buttons == 1) {
            setState(getValueIndexFromEvent(event.clientX));
        }
    };

    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key != 'Tab') event.preventDefault();

        switch (event.key) {
            case 'Escape':
                (event.target as HTMLElement).blur();
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                if (props.activeIndex > 0) setState(props.activeIndex - 1);
                break;
            case 'ArrowRight':
            case 'ArrowUp':
                if (props.activeIndex < props.Values.length - 1)
                    setState(props.activeIndex + 1);
                break;
        }

        console.log(event.key);
    };

    const setState = (index: number) => {
        props.indexStateSetter && props.indexStateSetter(index);
        props.valueStateSetter && props.valueStateSetter(props.Values[index]);
    };

    const count = props.Values.length;

    const aria = {
        role: 'slider',
        'aria-valuemin': props.isNumeric ? (props.Values[0] as number) : 0,
        'aria-valuemax': props.isNumeric
            ? (props.Values[props.Values.length - 1] as number)
            : props.Values.length - 1,
        'aria-valuenow': props.isNumeric
            ? (props.Values[props.activeIndex] as number)
            : props.activeIndex,
        'aria-valuetext': props.isNumeric
            ? null
            : props.Values[props.activeIndex].toString(),
    };

    return (
        <SliderContainer
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            {...aria}
            title={
                props.isNumeric
                    ? aria['aria-valuenow'].toString()
                    : aria['aria-valuetext']
            }>
            <Track ref={trackRef} {...props}>
                <Tack tabIndex={0} {...props} count={count} onKeyDown={onKeyPress} />
                {props.labelActive && !props.labelAll && (
                    <ActiveLabel {...props} count={count}>
                        {props.Values[props.activeIndex]}
                    </ActiveLabel>
                )}
                {props.Values.map(
                    (value: string | number, index: number) =>
                        (props.labelAll ||
                            index == 0 ||
                            index == props.Values.length - 1) && (
                            <Label
                                {...props}
                                isActive={
                                    index == props.activeIndex &&
                                    props.labelAll &&
                                    props.labelActive
                                }
                                count={count}
                                index={index}
                                key={index}>
                                {value}
                            </Label>
                        ),
                )}
            </Track>
        </SliderContainer>
    );
}
