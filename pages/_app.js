import 'tailwindcss/tailwind.css'
import splitbee from '@splitbee/web';
import Head from 'next/head';

// This initiliazes Splitbee.js
splitbee.init()

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      
      <meta property="og:url" content="https://www.internetisawesome.xyz/"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="Learn from the top universities for Free"></meta>
      <meta property="og:description" content=""></meta>
      <meta property="og:image" content="/twitter_banner.png"></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:domain" content="internetisawesome.xyz"></meta>
      <meta property="twitter:url" content="https://www.internetisawesome.xyz/"></meta>
      <meta name="twitter:title" content="Learn from the top universities for Free"></meta>
      <meta name="twitter:description" content=""></meta>
      <meta name="twitter:image" content="/twitter_banner.png"></meta>

  </Head>
  <Component {...pageProps} />
  </div>
}

export default MyApp
