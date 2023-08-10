import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { Pricing } from '@/components/Pricing'
import { AboutSection } from '@/components/AboutSection'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'

export const getStaticProps = async () => {
  const headers = {
    Authorization:
      'Bearer 6582a71e91e2fdf4e21c1031e6a08349822b480720586d7c22347cabad3bbc2b1b251545fdd5eceed7c4c783cfecba25668c6b3d814d107b52cffa76a7bbd0252c348ad45022c65fcc7d495ea2c12fde4dec71bbf460a48f78d8feb6de601d0938f731f7ea4495bb84a809564af2b6c93b9c4b5d00d1b609c4b7902bf50b113c',
  }

  const res = await fetch(
    'http://127.0.0.1:1337/api/homepage?populate[hero][populate][0]=ctaButtons&populate[hero][populate][1]=intro',
    { headers }
  )
  // const res = await fetch(
  //   'http://127.0.0.1:1337/api/homepage?populate[hero_section][populate][0]=buttons&populate=about_section&populate[benefits_section][populate][0]=benefits_cards&populate[cta][populate][0]=button&populate[pricing_section][populate][0]=price_item&populate[services_section][populate][0]=cards',
  //   { headers: {Authentication: 'Bearer {6582a71e91e2fdf4e21c1031e6a08349822b480720586d7c22347cabad3bbc2b1b251545fdd5eceed7c4c783cfecba25668c6b3d814d107b52cffa76a7bbd0252c348ad45022c65fcc7d495ea2c12fde4dec71bbf460a48f78d8feb6de601d0938f731f7ea4495bb84a809564af2b6c93b9c4b5d00d1b609c4b7902bf50b113c}'}})
  const{ data } = await res.json()
  
  return { props: data }
} 

export default function Home({ attributes }) {
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
        <Hero content={attributes.hero} />
        {/* <AboutSection content={attributes.about_section} />
        <Benefits content={attributes.benefits_section}/>
        <CallToAction content={attributes.cta}/>
        <Pricing content={attributes.pricing_section} />
        <Services content={attributes.services_section}/> */}
      </main>
      <Footer/>
    </>
  )
}
