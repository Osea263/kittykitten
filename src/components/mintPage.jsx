import React from "react"




export default function MintPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-full  bg-gray-900">
        
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 shadow-2xl sm:px-16  lg:flex lg:justify-between lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className=" flex flex-wrap w-full justify-center lg:gap-x-40 sm:gap-y-10">

          <div className="text-center lg:mx-0 lg:py-32 lg:text-left py-16">
            <h1 className="text-6xl font-bold tracking-wide text-white sm:text-6xl">
              Kitty Kittens
              <br />
              NFT Collection
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
             Dive into the purr-fect world of Kitty Kitten 🐾, where adorable NFTs meet the exciting realm of blockchain!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                 target="_blank"
                href="https://x.com/base_kitten"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Community
              </a>
              
            </div>
          </div>
          <div className="">
            <img
              alt="Kitten"
              src="/Orange_Kitten.png"
            //   width={900}
            //   height={1080}
              className=" rounded-md bg-white/5 ring-1 ring-white/10 object-contain"
            />
            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
