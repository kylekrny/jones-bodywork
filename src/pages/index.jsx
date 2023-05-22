import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { AboutSection } from '@/components/AboutSection'

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
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
