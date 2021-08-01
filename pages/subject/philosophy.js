import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/philosophy', fetcher)

  if (error) return <div class="container items-center px-5 py-12 lg:px-20"><div class="w-full text-yellow-600 border rounded-lg shadow-xl "><div class="flex items-center justify-between px-6 py-4 mx-auto "><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" class="mr-4 icon icon-tabler icon-tabler-alert-triangle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12.01" y2="8"></line><polyline points="11 12 12 12 12 16 13 16"></polyline></svg><p class="text-sm font-semibold tracking-wide uppercase "><strong>Error:</strong>Failed to load. Please reload or try again later.</p></div><button class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none" type="button" aria-label="Close" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0 -4l-4 4"></path></svg></button></div></div></div>
  if (!data) return <div className="min-h-screen flex justify-center items-center bg-black"><div className="loader bg-white p-5 rounded-full flex space-x-3"><div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div><div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div><div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div></div></div>

  const dataOutput = data.output;

  console.log(data);
  console.log(data.output.length)
  console.log(data.output)
  console.log(dataOutput)

  return (
    <div className="">
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
                        <Link href="/subject/philosophy">
                            <a>
                                <h1 className="mb-12 py-20 text-4xl font-bold leading-none tracking-tighter text-white sm:text-6xl">
                                    Philosophy
                                </h1>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
            <body className="bg-black">
                <div className="grid px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-20 sm:gap-4">
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
