import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="bg-black">
      <div className="pt-8 mx-20">
        <hero className="grid justify-items-center">
          <h1 className="text-2xl sm:text-6xl mb-2 sm:mb-4 text-center font-bold leading-none tracking-tighter text-white">
            Ivy League 2.0
          </h1>
          <h2 className="text-lg sm:text-3xl mb-2 sm:mb-4 text-center font-semibold text-base leading-relaxed text-white max-w-prose">
            Learn from the top universities <br></br> in the world for free!
          </h2>

          <div className="container items-center">
            <div className="p-2 w-4/6 mx-auto my-8 px-5 py-5 bg-white border rounded-lg shadow-xl">
              <div className="flex-grow p-6 py-2 rounded-lg">
                <p className="mb-2 text-xl font-bold leading-relaxed text-gray-800"> 
                  Who is this for?
                </p>
                <p className="mb-3 text-xl leading-relaxed text-gray-800"> 
                  For all the curious folks out there who are set back by limitations but won't give up on learning, this is the place for you!
                </p>
              </div>
            </div>
          </div>
        
        </hero>

        <Header/>

        <section  className="flex flex-row gap-4 pb-8">
          <cards>
            <div className="container">
                <Link href="/subject/all">
                  <a>
                    <div className="p-2 px-5 py-40 rounded-lg shadow-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-5xl"> 
                          Jack of all trades?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          All the courses from top universities like Harvard, Stanford, MIT, etc for Free!
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
            </div>
          </cards>
          <grid className="grid grid-cols-2 gap-4">
              <div>
                <Link href="/subject/maths">
                  <a>
                    <div className="p-2 px-5 py-10 bg-gradient-to-tl from-green-400 to-yellow-400 hover:from-green-600 hover:to-yellow-600 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Numbers say more than words?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Mathematics from MIT & Harvard.
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/subject/pcb">
                  <a>
                    <div className="p-2 px-5 py-10 bg-gradient-to-bl from-pink-500 to-blue-600 hover:from-pink-700 hover:to-blue-800 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Fan of Feynman?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Physics, Biology, Chemistry from MIT, Yale & Stanford.
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/subject/computer">
                  <a>
                    <div className="p-2 px-5 py-10 bg-gradient-to-r from-red-400 to-yellow-500 hover:from-red-500 hover:to-yellow-600 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Think like Bill?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Computers and Machine Learning from MIT & Harvard.
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/subject/psychology">
                  <a>
                    <div className="p-2 px-5 py-10 bg-gradient-to-b from-pink-400 via-red-400 to-red-600 hover:from-pink-600 hover:via-red-600 hover:to-red-600 rounded-lg shadow-xl">
                      <div className="flex-grow p-6 py-2 rounded-lg">
                        <p className="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                          Quoting Naval often?
                        </p>
                        <p className="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                          Courses on Psychology and Philosophy from Yale and University of Toronto.
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
          </grid>
        </section>
      </div>
      
    </div>
  )
}
