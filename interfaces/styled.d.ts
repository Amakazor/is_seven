import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            colorPrimary: string;
            colorAccent: string;
            colorBackground: string;
            colorCallToAction: string;
            colorText: string;
        };
        transitionTime: string;
        borderRadius: string;
    }
}
