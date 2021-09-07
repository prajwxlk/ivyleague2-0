import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
          <div className="container items-center">
            <footer className="text-blueGray-700 transition duration-500 ease-in-out transform bg-transparent">
              <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
                <span className="inline-flex justify-centermr-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <button 
                    className="px-3 sm:px-6 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                    >
                        <Link target="_blank" href="https://www.buymeacoffee.com/internetiscool">
                            <a target="_blank">
                            Support Us!
                            </a>
                        </Link>
                    </button>
                </span>
              </div>
            </footer>
          </div>
        </div>
    )
}
