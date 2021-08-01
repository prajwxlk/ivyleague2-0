import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/physics', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

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
                        <Link href="/subject/physics">
                            <a>
                                <h1 className="mb-12 py-20 text-4xl font-bold leading-none tracking-tighter text-white sm:text-6xl">
                                    Physics
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
