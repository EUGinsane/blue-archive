import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-background h-screen">
      <Head>
        <title className="">Blue Archive</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Teko:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
