import Head from 'next/head';
import Header from '../layout/header';
import Main from '../layout/main';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme/defaultTheme';
import GlobalStyle from '../components/GlobalStyle';

export default function Home() {
    return (
        <>
            <Head>
                <title>Is Seven API</title>
                <meta name="description" content="API to find if number is seven" />
                <meta name="author" content="Arkadiusz Wrzawiński" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="API, Seven, Number, Is Seven, Joke, Mildly Funny" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={defaultTheme}>
                <Header />
                <Main />
                <GlobalStyle/>
            </ThemeProvider>
        </>
    );
}
