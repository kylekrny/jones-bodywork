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
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
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
