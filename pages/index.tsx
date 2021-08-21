import React from 'react';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../theme/defaultTheme';
import GlobalStyle from '../components/GlobalStyle';

import Head from 'next/head';

import Header from '../layout/header';
import Main from '../layout/main';
import Footer from '../layout/footer';

export const HostContext = React.createContext('');

export default function Home(props: any) {
    return (
        <>
            <Head>
                <title>Is Seven API</title>
                <meta
                    name="description"
                    content="Revolutionary API that can be used to determine whether a number is a seven or not. Includes many different types of numerical comparisons, and allows various types of numbers, such as integer and float."
                />
                <meta name="author" content="Arkadiusz Wrzawiński" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="API, Seven, Number, Is Seven, Equality, Numerical, Joke, Mildly Funny" />
                <meta property="og:title" content="is7API - The API to revolutionize the web" />
                <meta property="og:url" content={props.host} />
                <meta property="og:image" content={`${props.host}/images/logoButBig.png`} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="Revolutionary API that can be used to determine whether a number is a seven or not. Includes many different types of numerical comparisons, and allows various types of numbers, such as integer and float."
                />
                <meta property="og:locale" content="en_US" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={defaultTheme}>
                <HostContext.Provider value={props.host}>
                    <Header />
                    <Main />
                    <Footer />
                    <GlobalStyle />
                </HostContext.Provider>
            </ThemeProvider>
        </>
    );
}

Home.getInitialProps = ({req}) => {
    let fullUrl;
    if (req) {
        // Server side rendering
        fullUrl = 'http://' + req.headers.host;
    } else {
        // Client side rendering
        fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return {host: fullUrl};
};
