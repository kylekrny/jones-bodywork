import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { Pricing } from '@/components/Pricing'
import { AboutSection } from '@/components/AboutSection'
import { CallToAction } from '@/components/CallToAction'
import { Services } from '@/components/Services'

export const getStaticProps = async () => {
  const res = await fetch(
    'http://127.0.0.1:1337/api/homepage?populate[hero_section][populate][0]=buttons&populate=about_section&populate[benefits_section][populate][0]=benefits_cards&populate[cta][populate][0]=button&populate[pricing_section][populate][0]=price_item&populate[services_section][populate][0]=cards&populate[footer][populate][0]=cta&populate[footer][populate][1]=navigation'
  )
  const data = await res.json()
  
  return { props: data.data }
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
        <Hero content={attributes.hero_section} />
        <AboutSection content={attributes.about_section} />
        <Benefits content={attributes.benefits_section}/>
        <CallToAction content={attributes.cta}/>
        <Pricing content={attributes.pricing_section} />
        <Services/>
      </main>
      <Footer />
    </>
  )
}
