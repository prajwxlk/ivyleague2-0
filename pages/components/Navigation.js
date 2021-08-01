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
        </div>
    )
}
