import 'tailwindcss/tailwind.css'
import splitbee from '@splitbee/web';
import Head from 'next/head';

// This initiliazes Splitbee.js
splitbee.init()

function MyApp({ Component, pageProps }) {
  return 
  <div>
    <Head>
      
      <title>Learn from the top universities for Free</title>
      <meta name="description" content="">

      <meta property="og:url" content="https://www.internetisawesome.xyz/">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Learn from the top universities for Free">
      <meta property="og:description" content="">
      <meta property="og:image" content="">

      <meta name="twitter:card" content="summary_large_image">
      <meta property="twitter:domain" content="internetisawesome.xyz">
      <meta property="twitter:url" content="https://www.internetisawesome.xyz/">
      <meta name="twitter:title" content="Learn from the top universities for Free">
      <meta name="twitter:description" content="">
      <meta name="twitter:image" content="">

  </Head>
  <Component {...pageProps} />
  </div>
}

export default MyApp
