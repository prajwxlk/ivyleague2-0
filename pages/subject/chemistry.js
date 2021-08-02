import useSWR from 'swr'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import Head from 'next/head'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/chemistry', fetcher)

  if (error) return <div class="container items-center px-5 py-12 lg:px-20"><div class="w-full text-yellow-600 border rounded-lg shadow-xl "><div class="flex items-center justify-between px-6 py-4 mx-auto "><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="mr-4 icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12.01" y2="8"></line><polyline points="11 12 12 12 12 16 13 16"></polyline></svg><p class="text-sm font-semibold tracking-wide uppercase "><strong>Error:</strong>Failed to load. Please reload or try again later.</p></div><button class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0 -4l-4 4"></path></svg></button></div></div></div>
  if (!data) return <div className="min-h-screen flex justify-center items-center bg-black"><div className="loader bg-white p-5 rounded-full flex space-x-3"><div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div><div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div><div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div></div></div>

  const dataOutput = data.output;

  console.log(data);
  console.log(data.output.length)
  console.log(data.output)
  console.log(dataOutput)

  return (
    <div className="">
        <Head>
        <title>Learn from the top universities for Free</title>
        <meta property="og:url" content="https://www.internetisawesome.xyz/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Learn from the top universities for Free"></meta>
        <meta property="og:description" content="Get to learn from the top universities in the World for free"></meta>
        <meta property="og:image" content="twitter_banner.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="internetisawesome.xyz"></meta>
        <meta property="twitter:url" content="https://www.internetisawesome.xyz/"></meta>
        <meta name="twitter:title" content="Learn from the top universities for Free"></meta>
        <meta name="twitter:description" content="Get to learn from the top universities in the World for free"></meta>
        <meta name="twitter:image" src="twitter_banner.png"></meta>
      </Head>
            <header>
                <div className="px-5 sm:px-10 lg:px-20 bg-gradient-to-r from-pink-400 via-red-400 to-red-600">
                    <div>
                        <Link href="/">
                            <a>
                                <h1 className="pt-2 mb-2 text-xl font-bold leading-none tracking-tighter text-white sm:text-2xl hover:underline">
                                    Home
                                </h1>
                            </a>
                        </Link>
                        
                    </div>
                    <div className="flex justify-center"> 
                        <Link href="/subject/chemistry">
                            <a>
                                <h1 className="mb-12 py-20 text-4xl font-bold leading-none tracking-tighter text-white sm:text-6xl">
                                    Chemistry
                                </h1>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="fixed m-4 bottom-0 right-0">
          <div className="flex flex-row gap-2">
            <div className="">
                <Link href="https://api.whatsapp.com/send?text=Curious%20about%20everything%20around%3F%20%0A%0ALearn%20from%20the%20top%20universities%20in%20the%20world%20for%20free!%0A%0ACheckout%20%3A%20internetisawesome.xyz">
                    <a target="_blank">
                        <Image src="/whatsapp.png" height={48} width={48}></Image>    
                    </a>
                </Link>
            </div>
            <div className="">
                <Link href="https://twitter.com/intent/tweet?text=Curious%20about%20everything%20around%3F%20%0A%0ALearn%20from%20the%20top%20universities%20in%20the%20world%20for%20free!%0A%0ACheckout%20%3A%20internetisawesome.xyz">
                    <a target="_blank">
                        <Image src="/twitter.png" height={48} width={48}></Image>    
                    </a>
                </Link>
            </div>
          </div>
        </div>
            <body className="bg-black">
                <Navigation/>
                <div className="grid px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-20 sm:gap-4">
                  {dataOutput.map((dataOutput, index) => (
                    <div key={index}>
                      <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  {dataOutput.nameOfTheCourse}
                                </h4>
                                <h2 className="mb-2 text-xs font-semibold tracking-widest text-black uppercase title-font"> 
                                  {dataOutput.collegeName}
                                </h2>
                                <Link href={dataOutput.url}>
                                    <a target="_blank">
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Course 
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                  ))}
                </div>
            </body>
        </div>
  )
}
