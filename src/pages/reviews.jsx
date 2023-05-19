import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
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

export default function Faq() {
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
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Frequently asked questions
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="mt-20">
              <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
