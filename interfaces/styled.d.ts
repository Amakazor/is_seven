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
        fonts: {
            sizes: {
                standard: string;
            }
        }
        transitionTime: string;
        borderRadius: string;
    }
}
