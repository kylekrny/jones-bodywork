import { FaqComponent } from "@/components/FaqComponent"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Head from "next/head"

export const getStaticProps = async () => {
  const res = await fetch(
    'http://127.0.0.1:1337/api/faq?populate=faq_card'
  )
  const data = await res.json()

  return { props: data.data }
} 



export default function Faq({ attributes }) {
  return (
    <>
      <Head>
        <title>{attributes.page_title}</title>
      </Head>
      <main>
        <Header/>
        <div className="bg-white pt-24 pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             {attributes.hero_text}
            </h2>
          </div>
        </div>
        <FaqComponent content={attributes.faq_card}/>
      </main>
      <Footer/>
    </>
  )
}
