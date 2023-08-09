import { FaqComponent } from "@/components/FaqComponent"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Head from "next/head"

export const getStaticProps = async () => {
  const res = await fetch(
    'http://127.0.0.1:1337/api/faq?populate[footer][populate][0]=cta&populate[footer][populate][1]=navigation&populate=faq_card'
  )
  const data = await res.json()
  console.log(data)

  return { props: data.data }
} 



export default function Faq({ attributes }) {
  console.log(attributes.footer)
  return (
    <>
      <Head>
        <title>{attributes.page_title}</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
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
      <Footer content={attributes.footer}/>
    </>
  )
}
