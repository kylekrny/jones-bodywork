import { FaqComponent } from "@/components/FaqComponent"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Head from "next/head"


export default function Faq() {
  return (
    <>
      <Head>
        <title>FAQ | Jeff Jones</title>
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
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <FaqComponent/>
      </main>
      <Footer/>
    </>
  )
}
