import Link from 'next/link'
import Footer from './components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black">
      <head>
        <title>Learn from the top universities for Free</title>
      </head>
      <div className="pt-8 sm:mx-20">
        <hero className="grid ">
          <h1 className="text-4xl sm:text-4xl my-4 mb-2 sm:mb-6 text-center font-bold leading-none tracking-tighter text-white">
            Learn from the top universities <br></br> in the world for free!
          </h1> 
        </hero>

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

        <section  className="flex flex-col sm:flex-row gap-4 pb-8 mx-4">
          <cards>
            <div className="container">
                    <div className="p-2 px-2 py-10 sm:px-5 sm:py-40 rounded-lg shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-5xl"> 
                          Jack of all trades?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          All the courses from top universities like Harvard, Stanford, MIT, etc for Free!
                        </p>
                        <Link href="/subject/all">
                                    <a>
                                        <button className="px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            Explore →
                                        </button>
                                    </a>    
                                </Link>
                      </div>
                    </div>
            </div>
          </cards>
          <grid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                    <div className="p-2 px-5 py-10 bg-gradient-to-tl from-green-400 to-yellow-400 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Numbers say more than words?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Mathematics from MIT & Harvard.
                        </p>
                        <Link href="/subject/maths">
                                    <a>
                                        <button className=" px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            Explore →
                                        </button>
                                    </a>    
                                </Link>
                      </div>
                    </div>
              </div>

              <div>
                    <div className="p-2 px-5 py-10 bg-gradient-to-bl from-pink-500 to-blue-600 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Fan of Feynman?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Physics, Biology, Chemistry from MIT, Yale & Stanford.
                        </p>
                        <Link href="/subject/physics">
                                    <a>
                                        <button className=" px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            Explore →
                                        </button>
                                    </a>    
                                </Link>
                      </div>
                    </div>
              </div>

              <div>
                <div className="p-2 px-5 py-10 bg-gradient-to-r from-red-400 to-yellow-500 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Think like Bill?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Computers and Machine Learning from MIT & Harvard.
                        </p>
                        <Link href="/subject/computers">
                                    <a>
                                        <button className=" px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            Explore →
                                        </button>
                                    </a>    
                                </Link>
                      </div>
                    </div>
              </div>

              <div>
                <div className="p-2 px-5 py-10 bg-gradient-to-b from-pink-400 via-red-400 to-red-600 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Quoting Naval often?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Psychology and Philosophy from Yale and University of Toronto.
                        </p>
                        <Link href="/subject/philosophy">
                                    <a>
                                        <button className=" px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform border-black rounded-md bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-900 "> 
                                            Explore →
                                        </button>
                                    </a>    
                                </Link>
                      </div>
                    </div>
              </div>
          </grid>
        </section>
      </div>
      <Footer/>
    </div>
  )
}
