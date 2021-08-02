import 'tailwindcss/tailwind.css'
import splitbee from '@splitbee/web';
import Head from 'next/head';

// This initiliazes Splitbee.js
splitbee.init()

function MyApp({ Component, pageProps }) {
  return 
  <div>
    <Head><!-- Primary Meta Tags -->
      <title>Internet Is Awesome - Learn from the top universities
      in the world for free!</title>
      <meta name="title" content="Internet Is Awesome - Learn from the top universities
      in the world for free!">
      <meta name="description" content="Learn from the top universities
      in the world for free!">

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://metatags.io/">
      <meta property="og:title" content="Internet Is Awesome - Learn from the top universities
      in the world for free!">
      <meta property="og:description" content="Learn from the top universities
      in the world for free!">
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://metatags.io/">
      <meta property="twitter:title" content="Internet Is Awesome - Learn from the top universities
      in the world for free!">
      <meta property="twitter:description" content="Learn from the top universities
      in the world for free!">
      <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
  </Head>
  <Component {...pageProps} />
  </div>
}

export default MyApp
