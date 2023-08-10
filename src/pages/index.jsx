import Head from 'next/head'

import About from '@/sections/About'
import Benefits from '@/sections/Benefits'
import CallToAction from '@/sections/CallToAction'
import { Footer } from '@/components/Footer'
import Hero from '@/sections/Hero'
import Pricing from '@/sections/Pricing'
import Services from '@/sections/Services'

export const getStaticProps = async () => {
  const headers = {
    Authorization:
      'Bearer 6582a71e91e2fdf4e21c1031e6a08349822b480720586d7c22347cabad3bbc2b1b251545fdd5eceed7c4c783cfecba25668c6b3d814d107b52cffa76a7bbd0252c348ad45022c65fcc7d495ea2c12fde4dec71bbf460a48f78d8feb6de601d0938f731f7ea4495bb84a809564af2b6c93b9c4b5d00d1b609c4b7902bf50b113c',
  }

  const res = await fetch(
    'http://127.0.0.1:1337/api/homepage?populate[hero][populate][0]=ctaButtons&populate[hero][populate][1]=intro&populate[about][populate][0]=intro&populate[benefits][populate][0]=intro&populate[benefits][populate][1]=cards&populate[cta][populate][0]=buttons&populate[pricing][populate][0]=intro&populate[pricing][populate][1]=cards&populate[services][populate][0]=intro&populate[services][populate][1]=cards',
    { headers }
  )
  
  const{ data } = await res.json()
  
  return { props: data }
} 

export default function Home({ attributes }) {
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
        <About content={attributes.about.intro} />
        <Benefits content={attributes.benefits}/>
        <CallToAction content={attributes.cta}/>
        <Pricing content={attributes.pricing} />
        <Services content={attributes.services}/>
      </main>
      <Footer/>
    </>
  )
}
