import Slider from "./slider";

export interface slidingNumberSelectProps {
    inactiveTextColor: string;
    activeTextColor: string;

    trackBackgroundColor: string;

    tackBackgroundColor: string;
    tackBorderColor: string;

    activeIndex: number;

    labelAll: boolean;
    labelActive: boolean;

    textTransitionTime: string;

    indexStateSetter?: React.Dispatch<React.SetStateAction<number>>
    valueStateSetter?: React.Dispatch<React.SetStateAction<string | number>>

    numberMin: number;
    numberMax: number;
    numberStep: number;
}

export default function NumberSlider(props: slidingNumberSelectProps) {
    const getValues = (min: number, max: number, step: number) : number[] => {
        if (step == 0 || Math.abs(step) < Number.EPSILON * 10) throw new RangeError(`Value of 'step' cannot be equal to zero.`);

        if (step < 0) {
            step = -step;
            [min, max] = [max, min];
        }

        const amount = min < max ? max - min : min - max;
        if (!isStepValid(amount, step)) throw new RangeError(`Value ${step} is not a valid devisor for value between ${min} and ${max}.`);

        return Array((amount / step) + 1).fill(0).map((_, index) => Number.parseFloat(( min + (index * step)).toFixed(2)));
    }

    const isStepValid = (amount: number, step: number): boolean => {
        const modulo = amount % step;
        return (Math.abs(modulo) < Number.EPSILON * 10 || Math.abs(modulo) - step < Number.EPSILON * 10)
    }

    return <Slider {...props} Values={getValues(props.numberMin, props.numberMax, props.numberStep)} isNumeric={true}/>
}