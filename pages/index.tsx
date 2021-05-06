import Head from 'next/head'
import Main from '../layout/main';
import { ThemeProvider } from 'styled-components';
import Header from "../layout/header";
import { defaultTheme } from "../theme/defaultTheme"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Is Seven API</title>
        <meta name="description" content="API to find if number is seven"/>
        <meta name="author" content="Arkadiusz Wrzawiński"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="API, Seven, Number, Is Seven, Joke, Mildly Funny"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Header/>
      </ThemeProvider>
    </div>
  )
                <Main />
}
