import React from 'react'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div>
            <header>
                <div className=" bg-transparent">
                    <div className="flex flex-row grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 p-4 justify-center">
                    <div>
                            <Link href="/subject/all">
                                <a>
                                    <button className="items-center px-3 py-3 mx-1 my-1 sm:px-4 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        All Subjects
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/chemistry">
                                <a>
                                    <button className="items-center px-4 py-3 mx-1 my-1 sm:px-6 sm:py-2 font-semibold text-black bg-white hover:bg-gray-400	transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Chemistry
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/physics">
                                <a>
                                    <button className="items-center px-6 py-3 mx-1 my-1 sm:px-8 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Physics
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/maths">
                                <a>
                                    <button className="items-center px-8 py-3 mx-1 my-1 sm:px-8 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Maths
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/biology">
                                <a>
                                    <button className="items-center px-6 py-3 mx-1 my-1 sm:px-8 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Biology
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/philosophy">
                                <a>
                                    <button className="items-center px-3 py-3 mx-1 my-1 sm:px-6 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Philosophy
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/psychology">
                                <a>
                                    <button className="items-center px-3 py-3 mx-1 my-1 sm:px-6 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Psychology
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/subject/computers">
                                <a>
                                    <button className="items-center px-3 py-3 mx-1 my-1 sm:px-6 sm:py-2 font-normal sm:font-semibold text-black bg-white hover:bg-gray-400 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Computers
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="fixed m-4 bottom-0 right-0">
          <div className="flex flex-row gap-2">
            <div className="">
                <Link href="https://api.whatsapp.com/send?text=Curious%20about%20everything%20around%3F%20%0A%0ALearn%20from%20the%20top%20universities%20in%20the%20world%20for%20free!%0A%0ACheckout%20%3A%20internetisawesome.xyz">
                    <a>
                        <Image src="/whatsapp.png" height={48} width={48}></Image>    
                    </a>
                </Link>
            </div>
            <div className="">
                <Link href="https://twitter.com/intent/tweet?text=Curious%20about%20everything%20around%3F%20%0A%0ALearn%20from%20the%20top%20universities%20in%20the%20world%20for%20free!%0A%0ACheckout%20%3A%20internetisawesome.xyz">
                    <a>
                        <Image src="/twitter.png" height={48} width={48}></Image>    
                    </a>
                </Link>
            </div>
          </div>
        </div>
        </div>
    )
}
