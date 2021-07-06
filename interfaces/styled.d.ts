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
            [key: string]: {
                size: string;
                weight: number;
            }
        }
        transitionTime: string;
        borderRadius: string;
    }
}
