import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    colors: {
        colorPrimary: '#FFFFFF',
        colorAccent: '#408FF1',
        colorBackground: '#EEEEEE',
        colorCallToAction: '#FFB132',
        colorText: '#111111',
        colorGray: '#AAAAAA',
        colorDark: '#222222',
    },
    fonts: {
        standard: {
            size: '1.5rem',
            weight: 400,
        },
        slightlyBigger: {
            size: '1.6rem',
            weight: 400,
        },
        slightlySmaller: {
            size: '1.1rem',
            weight: 400,
        },
        bold: {
            size: '1.5rem',
            weight: 700,
        }
    },
    transitionTime: '200ms',
    borderRadius: '0.25rem',
};
