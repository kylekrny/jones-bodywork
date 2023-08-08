import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { AboutSection } from '@/components/AboutSection'
import { CallToAction } from '@/components/CallToAction'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export const getStaticProps = async () => {
  const res = await fetch(
    'http://127.0.0.1:1337/api/homepage?populate[hero_section][populate][0]=buttons&populate=about_section'
  )
  const data = await res.json()
  const props = data
  return { props }
} 

export default function Home({data}) {
  const { attributes } = data
  console.log(attributes)
  return (
    <>
      <Head>
        <title>{attributes.page_title}</title>
        <meta
          name="description"
          content="Massage therapist that listens to you."
        />
      </Head>
      <main>
        <Hero content={attributes.hero_section} />
        <AboutSection content={attributes.about_section} />
        <Features />
        <CallToAction/>
        <Pricing />
        <SecondaryFeatures/>
      </main>
      <Footer />
    </>
  )
}
