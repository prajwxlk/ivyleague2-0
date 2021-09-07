import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            
          <div className="container items-center">
            <footer className="text-blueGray-700 transition duration-500 ease-in-out transform bg-transparent">
              <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
                <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                  <div className="inline-flex items-center">
                    <h2 className="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                         Made with ❤️ by <Link href="https://twitter.com/prajwxl">
                                    <a className="underline hover:text-blue-500"> 
                                        Prajwal
                                    </a>
                                </Link> and <Link href="https://twitter.com/krishnalohiaaa">
                                    <a className="underline hover:text-blue-500">
                                        Krishna
                                    </a>
                                </Link>
                    </h2>
                  </div>
                </a>
                <span className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
                </span>
              </div>
            </footer>
          </div>
        
        </div>
    )
}
