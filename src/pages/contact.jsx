import Head from 'next/head'
import { ContactForm } from '@/components/ContactForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const getStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:1337/api/contact-page')
  const data = await res.json()

  return { props: data.data }
} 


export default function Contact({ attributes }) {
  return (
    <>
      <Head>
        <title>Contact | Jeff Jones</title>
      </Head>
      <Header />
      <main>
        <ContactForm content={attributes} />
      </main>
      <Footer />
    </>
  )
}
