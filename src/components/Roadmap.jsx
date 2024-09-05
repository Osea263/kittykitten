import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


export default function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center text-left mb-20 bg-gray-900 text-white">
      <section className=''>
        <div className='sticky top-0 bg-gray-900 py-3 x-10 shadow-white'>
          <h2 className="group-date">
            Roadmap
          </h2>
          <div className='timeline'>
            <div className='relative'>
              <div className='dot' title='current event'>
                <div className='dot absolute -top-1 -left-1 animate-ping bg-purple-500'></div>
              </div>

              
                <div className='pl-10'>
                                
                <span className='timeline-date text-indigo-600'>Phase 1</span>
                <h3 className='timeline-title mb-4'>Pre-Launch</h3>
                <ol className='flex flex-col gap-3'>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Community Building: </span>
                    Social Media Setup, campaigns, partnerships, and whitelisting tasks
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Whitelist Campaign: </span>
                    Exclusive tasks for early supporters to earn a spot on the whitelist
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Website Launch: </span>
                    Develop and deploy our website and detailed project information and roadmap
                  </li>
                </ol>
              </div>
        

              

            </div>

          </div>



          <div className='timeline'>
            <div className='relative'>
              <div className='dot' title='current event'>
                <div className='dot absolute -top-1 -left-1 animate-ping bg-blue-400'></div>
              </div>

              
                <div className='pl-10'>
                                
                <span className='timeline-date text-indigo-600'>Phase 2</span>
                <h3 className='timeline-title mb-4'>NFT Launch</h3>
                <ol className='flex flex-col gap-3'>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className=' font-semibold text-white'>Whitelisted Minting: </span>
                    Free mint for all whitelisted members
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Public Sale: </span>
                    Open Nft sale to the public
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Secondary Marketplace Listings: </span>
                    List NFTs on major marketplaces for secondary sales
                  </li>
                </ol>
              </div>
        

              

            </div>

          </div>



          <div className='timeline'>
            <div className='relative'>
              <div className='dot' title='current event'>
                <div className='dot absolute -top-1 -left-1 animate-ping bg-yellow-400'></div>
              </div>

              
                <div className='pl-10'>
                                
                <span className='timeline-date text-indigo-600'>Phase 3</span>
                <h3 className='timeline-title mb-4'>Token Airdrop</h3>
                <ol className='flex flex-col gap-3'>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className=' font-semibold text-white'>Snapshot of NFT Holders: </span>
                    Capture addresses holding our NFTs
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Token Launch: </span>
                    Deploy and Launch Token
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Airdrop Distribution: </span>
                    Distribute tokens to all NFT holders.
                  </li>
                </ol>
              </div>
        

              

            </div>

          </div>





          <div className='timeline'>
            <div className='relative'>
              <div className='dot' title='current event'>
                <div className='dot absolute -top-1 -left-1 animate-ping bg-green-500'></div>
              </div>

              
                <div className='pl-10'>
                                
                <span className='timeline-date text-indigo-600'>Phase 4</span>
                <h3 className='timeline-title mb-4'>Post Launch Development</h3>
                <ol className='flex flex-col gap-3'>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className=' font-semibold text-white'>Staking and Utility: </span>
                    Introduce staking for NFts and Tokens with additional rewards
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Governance: </span>
                    Launch community governance allowing NFT and token holders to vote on key project decisions
                  </li>
                  <li className='text-base leading-7 text-gray-400'>
                    <span className='font-semibold text-white'>Continuous Development: </span>
                    Roll out new features, Partnerships and use cases for our ecosystem.
                  </li>
                </ol>
              </div>
        

              

            </div>

          </div>

        </div>

      </section>
      
    </div>
  )
}
