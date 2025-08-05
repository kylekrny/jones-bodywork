import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { AboutSection } from '@/components/AboutSection'
import { CallToAction } from '@/components/CallToAction'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Listening from '@/components/Listening'

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
      <main>
        <Hero />
        <AboutSection />
        <Listening />
        <Features />
        <CallToAction />
        <Pricing />
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  )
}
