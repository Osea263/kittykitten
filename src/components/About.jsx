import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'




const features = [
  {
    name: 'Exclusive NFTs',
    description:
      'Unique digital assets that provide utility, rarity and comunity privileges.These are not your run of the mill digital doodles',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Community Driven',
    description: 'Shape the future of the project with governance rights and exclusive access to events. Help steer the ship to even more awesomeness',
    icon: LockClosedIcon,
  },
  {
    name: 'Token Goodies',
    description: 'There is something for everyone. Hold our NFTs and you will get showered with tokens faster than you can sa KITTEN RICH',
    icon: ServerIcon,
  },
]

function About() {
  return (
    <div>

        <div className="bg-gray-900 py-20">

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-left">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Quick Intro</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">What We've Got for You</p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Dive into the world where NFTs are Keys to something EPIC. We are Mixing Cuteness with Fun, Rewards and a dash of Magic to create a community where everyone wins.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-left">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="kk.png"
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
          />
        </div>
      </div>
        
        </div>

        
    </div>



  )
}

export default About