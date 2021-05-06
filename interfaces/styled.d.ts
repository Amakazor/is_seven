import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            colorPrimary: string;
            colorAccent: string;
            colorBackground: string;
            colorCallToAction: string;
        }
        transitionTime: string;
        borderRadius: string
    }
}