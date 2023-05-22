import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ReviewSection } from '@/components/ReviewSection'
import Head from 'next/head'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function Reviews() {
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
              Reviews
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <ReviewSection/>
        </div>
      </main>
      <Footer />
    </>
  )
}
