import {DefaultTheme} from 'styled-components';

export const defaultTheme: DefaultTheme = {
    colors: {
        colorPrimary: '#FFFFFF',
        colorAccent: '#408FF1',
        colorBackground: '#F6F6F6',
        colorCallToAction: '#FFB132',
        colorText: '#111111',
        colorGray: '#AAAAAA',
        colorDark: '#222222',
    },
    fonts: {
        weight: {
            standard: 400,
            semibold: 600,
            bold: 700,
        },
        size: {
            standard: '1.5rem',
            slightlyBigger: '1.6rem',
            slightlySmaller: '1.1rem',
        },
    },
    transitionTime: '200ms',
    borderRadius: '0.5rem',
};
