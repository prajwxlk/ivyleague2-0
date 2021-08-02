import 'tailwindcss/tailwind.css'
import splitbee from '@splitbee/web';

// This initiliazes Splitbee.js
splitbee.init()

function MyApp({ Component, pageProps }) {
  return <div>
  <Component {...pageProps} />
  </div>
}

export default MyApp
