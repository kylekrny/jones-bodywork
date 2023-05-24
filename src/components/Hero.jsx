import profile from '@/images/jeff.jpeg'
import profileMobile from "@/images/jeff-square.jpeg"
import Image from 'next/image'
import { Header } from './Header'


export function Hero() {

  return (
    <div className="bg-white">
      <Header />
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-[#3F88C5] sm:text-6xl">
                  Massage therapist that listens to you.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To me, bodywork is about listening to the body. Looking at and treating the body as a
                  whole, not parts. I never work on the same body twice and understanding that allows me to tailor each massage to you in the moment.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  {/* <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={profileMobile}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
