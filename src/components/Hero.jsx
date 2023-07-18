import profile from '@/images/jeff.jpeg'
import profileMobile from "@/images/jeff-square.jpeg"
import Image from 'next/image'
import { Header } from './Header'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export function Hero() {
const [windowWidth, setWindowWidth] = useState();
  
useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

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
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl font-bold tracking-tight text-[#3F88C5] sm:text-6xl">
                  The session is about you and your body.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To me, bodywork is about listening to the body. Looking at and
                  treating the body as a whole, not parts. I never work on the
                  &quot;same&quot; body twice just like we never step in to the
                  same river twice.
                </p>
                <p className="text-md mt-2 font-bold leading-8 text-gray-600">
                  Same day, weekend and evening appointments available. <br />{' '}
                </p>
                <div className="mt-8 flex items-center gap-x-6">
                  <Link
                    href="https://jonesbodywork.as.me/"
                    className="rounded-md bg-[#3F88C5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1C415E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Schedule now
                  </Link>
                  <Link
                    href="tel:7202804979"
                    className=" font-bold text-[#3F88C5]"
                  >
                    (720) 480 4979
                  </Link>
                  {/* <a
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
          {windowWidth < 1023 ? (
            <Image
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src={profileMobile}
              alt=""
            />
          ) : (
            <Image
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src={profile}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  )
}
