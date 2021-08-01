import Link from 'next/link'

export default function Index() {

  return (
    <div className="">
        <head>
            <title>All Subjects - Ivy League 2.0</title>
        </head>
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
