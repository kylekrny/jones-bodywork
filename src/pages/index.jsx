import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { TertiaryFeatures } from '@/components/TertiaryFeatures'
import { Pricing } from '@/components/Pricing'
import { BlogPosts } from '@/components/BlogPosts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeff Jones</title>
        <meta
          name="description"
          content="Massage therapist that listens to you."
        />
      </Head>
      {/* <Header /> */}
      <main>
        <Hero />
        <TertiaryFeatures/>
        <Pricing/>
      </main>
      <Footer />
    </>
  )
}
