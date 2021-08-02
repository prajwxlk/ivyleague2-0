import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Index() {

  return (
    <div className="">
        <Head>
        <title>Learn from the top universities for Free</title>
        <meta property="og:url" content="https://www.internetisawesome.xyz/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Learn from the top universities for Free"></meta>
        <meta property="og:description" content="Get to learn from the top universities in the World for free"></meta>
        <meta property="og:image" content="https://www.internetisawesome.xyz/twitter_banner_min.png"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="internetisawesome.xyz"></meta>
        <meta property="twitter:url" content="https://www.internetisawesome.xyz/"></meta>
        <meta name="twitter:title" content="Learn from the top universities for Free"></meta>
        <meta name="twitter:description" content="Get to learn from the top universities in the World for free"></meta>
        <meta name="twitter:image" src="https://www.internetisawesome.xyz/twitter_banner_min.png"></meta>
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
                        <Link href="/subject/all">
                            <a>
                                <h1 className="mb-12 py-20 text-4xl font-bold leading-none tracking-tighter text-white sm:text-6xl">
                                    All
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
                <div className="grid px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-20 sm:gap-4">
                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Chemistry
                                </h4>
                                <Link href="/subject/chemistry">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Physics
                                </h4>
                                <Link href="/subject/physics">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Biology
                                </h4>
                                <Link href="/subject/biology">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Computers
                                </h4>
                                <Link href="/subject/computers">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Maths
                                </h4>
                                <Link href="/subject/maths">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Philosophy
                                </h4>
                                <Link href="/subject/philosophy">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="container items-center  text-blueGray-500">
                        <div className="p-2 my-2 sm:my-6 bg-white border rounded-lg shadow-xl">
                          <div className="p-6">
                                <h4 className="mb-2 text-2xl text-center font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font "> 
                                  Psychology
                                </h4>
                                <Link href="/subject/psychology">
                                    <a>
                                        <button className="w-full px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            View Courses
                                        </button>
                                    </a>    
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </body>
        </div>
  )
}
