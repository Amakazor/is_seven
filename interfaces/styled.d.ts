import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            colorPrimary: string;
            colorAccent: string;
            colorBackground: string;
            colorCallToAction: string;
            colorText: string;
            colorGray: string;
            colorDark: string;
        };
        fonts: {
            weight: {
                standard: number;
                semibold: number;
                bold: number;
            };
            size: {
                standard: string;
                slightlyBigger: string;
                slightlySmaller: string;
            };
        };
        transitionTime: string;
        borderRadius: string;
    }
}
