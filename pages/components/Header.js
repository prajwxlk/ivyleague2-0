import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <header>
                <div className="px-20 bg-transparent">
                    <div className="flex flex-row gap-4 p-4 justify-center">
                        <div>
                            <Link href="/all">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-blue-600 hover:bg-blue-800 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        All
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/chemistry">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-bl from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Chemistry
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/physics">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-bl from-pink-500 to-blue-600 hover:from-pink-700 hover:to-blue-800 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Physics
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/maths">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-bl from-green-400 to-yellow-400 hover:from-green-600 hover:to-yellow-600 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Maths
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/biology">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-b from-red-500 to-yellow-600 hover:from-red-700 hover:to-yellow-800 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Biology
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/philosophy">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-bl from-pink-400 via-red-400 to-red-600 hover:from-pink-600 hover:via-red-600 hover:to-red-600 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Philosophy
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/psychology">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-tr from-yellow-500 to-pink-600 hover:from-yellow-700 hover:to-pink-800 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                        Psychology
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/computers">
                                <a>
                                    <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white bg-gradient-to-bl from-red-400 to-yellow-500 hover:from-red-500 hover:to-yellow-600 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
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
