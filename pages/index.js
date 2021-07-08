export default function Home() {
  return (
    <div className="bg-black">
      <div className="pt-8 mx-10">
        <hero className="grid justify-items-center">
          <h1 className="text-2xl sm:text-6xl mb-2 sm:mb-4 text-center font-bold leading-none tracking-tighter text-white">
            Ivy League 2.0
          </h1>
          <h2 className="text-lg sm:text-3xl mb-2 sm:mb-4 text-center font-semibold text-base leading-relaxed text-white max-w-prose">
            Learn from the top universities <br></br> in the world for free!
          </h2>

          <div class="container items-center">
            <div class="p-2 w-4/6 mx-auto my-8 px-5 py-5 bg-white border rounded-lg shadow-xl">
              <div class="flex-grow p-6 py-2 rounded-lg">
                <p class="mb-2 text-xl font-bold leading-relaxed text-gray-800"> 
                  Who is this for?
                </p>
                <p class="mb-3 text-xl leading-relaxed text-gray-800"> 
                  For all the curious folks out there who are set back by limitations but won't give up on learning, this is the place for you!
                </p>
              </div>
            </div>
          </div>
        
        </hero>

        <section  className="flex flex-row gap-4 pb-8">
          <cards>
            <div class="container">
              <div class="p-2 px-5 py-40 rounded-lg shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                <div class="flex-grow p-6 py-2 rounded-lg">
                  <p class="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-5xl"> 
                    Jack of all trades?
                  </p>
                  <p class="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                    All the courses from top universities like Harvard, Stanford, MIT, etc for Free!
                  </p>
                </div>
              </div>
            </div>
          </cards>
          <grid className="grid grid-cols-2 gap-4">
              <div>
                <div class="p-2 px-5 py-10 bg-gradient-to-tl from-green-400 to-yellow-400 rounded-lg shadow-xl">
                  <div class="flex-grow p-6 py-2 rounded-lg">
                    <p class="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                      Numbers say more than words?
                    </p>
                    <p class="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                      Courses on Mathematics from MIT & Harvard.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div class="p-2 px-5 py-10 bg-gradient-to-bl from-pink-500 to-blue-600 rounded-lg shadow-xl">
                  <div class="flex-grow p-6 py-2 rounded-lg">
                    <p class="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                      Fan of Feynman?
                    </p>
                    <p class="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                      Courses on Physics, Biology, Chemistry from MIT, Yale & Stanford.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div class="p-2 px-5 py-10 bg-gradient-to-r from-red-400 to-yellow-500 rounded-lg shadow-xl">
                  <div class="flex-grow p-6 py-2 rounded-lg">
                    <p class="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                      Think like Bill?
                    </p>
                    <p class="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                      Courses on Computers and Machine Learning from MIT & Harvard.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div class="p-2 px-5 py-10 bg-gradient-to-b from-pink-400 via-red-400 to-red-600 rounded-lg shadow-xl">
                  <div class="flex-grow p-6 py-2 rounded-lg">
                    <p class="mb-2 text-2xl font-bold leading-none tracking-tighter text-white sm:text-3xl"> 
                      Quoting Naval often?
                    </p>
                    <p class="mb-3 text-xl font-semibold leading-relaxed text-gray-100	"> 
                      Courses on Psychology and Philosophy from Yale and University of Toronto.
                    </p>
                  </div>
                </div>
              </div>
          </grid>
        </section>
      </div>
      
    </div>
  )
}
