import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero2'
import { TertiaryFeatures } from '@/components/TertiaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { SingleTestimonial } from '@/components/SingleTestimonial'
import { Pricing } from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fix My Schitt</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      {/* <Header /> */}
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <TertiaryFeatures/>
        <Pricing/>
        <SecondaryFeatures />
        <CallToAction />
        <SingleTestimonial/>
      </main>
      <Footer />
    </>
  )
}
