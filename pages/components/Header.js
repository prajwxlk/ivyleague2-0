import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <div>
            <button 
                className="px-3 py-1 sm:px-6 sm:py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                    <Link href="https://www.buymeacoffee.com/internetiscool">
                        <a>
                         Support Us!
                        </a>
                    </Link>
                </button>
            </div>
        </div>
    )
}
