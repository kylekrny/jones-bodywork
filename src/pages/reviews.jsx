import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ReviewSection } from '@/components/ReviewSection'
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch(
    'http://127.0.0.1:1337/api/review?populate=review_card'
  )
  const data = await res.json()

  return { props: data.data }
} 

export default function Reviews({ attributes }) {
  return (
    <>
      <Head>
        <title>Reviews | Jeff Jones</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Header />
        <div className="bg-white px-6 pt-24 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {attributes.hero_text}
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <ReviewSection content={attributes}/>
        </div>
      </main>
      <Footer />
    </>
  )
}
