import profile from '@/images/jeff.jpeg'
import profileMobile from "@/images/jeff-square.jpeg"
import Image from 'next/image'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/Button'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function Hero({ content }) {
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
                <h1 className="text-4xl font-bold tracking-tight text-sky-600 sm:text-6xl">
                  {content.intro.head}
                </h1>
                <ReactMarkdown className="mt-6">
                  {content.intro.subHead}
                </ReactMarkdown>
                <div className="mt-8 flex items-center gap-x-6">
                  {content.ctaButtons.map((button) => (
                    <Button 
                      variant={button.variant}
                      color={button.color}
                      key={button.id}
                      href={button.link}
                    >
                      {button.text}
                    </Button>
                  ))}
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
