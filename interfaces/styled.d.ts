import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorPrimary: string;
        colorAccent: string;
        colorBackground: string;
        transitionTime: number;
        borderRadius: string
    }
}