import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is the difference between “bodywork” and “massage”?',
      answer:
        'To me, bodywork is looking at and treating the body as a whole, not parts. For example, if you work with me because your left hip is bothering you, one of my thoughts is to look at the RIGHT foot/ankle and see if there’s any past history or trauma/injury to the right side.',
    },
    {
      question: 'How do I dress for a session with you?',
      answer:
        'To your comfort level where you feel safe. I’ve worked with people fully dressed, shoes on and seated. It’s about you, not me. In a perfect world, women would wear a sports bra and some type of shorts/under garment. Men would wear shorts/underwear.',
    },
    {
      question: 'Do you work with children?',
      answer:
        'Yes. Under the age of 18, a parent or guardian needs to be present for the entire first session. Under the age of 16, the parent or guardian needs to be present for each and every session. I’m happy to work with kiddos as young as 2 or 3. Would suggest 30- minute sessions for all kiddos at first.',
    },
  ],
  [
    {
      question: 'What’s the best way to schedule with you?',
      answer:
        'Call/Text me at 720.480.4979 or email me at jeff@jonesbodywork.com',
    },
    {
      question: 'Do you take insurance? Worker’s comp? HSA? MedPay?',
      answer:
        "I do. Most insurance companies don't take me as a solo practitioner. You'll need to call to see if your insurance can be used with massage only. Most insurances require it be coupled with PT or chiropractic. I do have an NPI number.",
    },
    {
      question: 'Do you do in-home sessions?',
      answer:
        'I consider them on a case by case basis. I do charge a travel fee to and from.',
    },
  ],
  [
    {
      question:
        'What if I have the urge to burp, fart, sneeze, cry, shake, tremble, scream, yawn?',
      answer:
        'Please do. Those are all normal releases/responses. They are also complimenting to the practitioner. You feel safe enough to allow your body to relax and release. There is no shame.',
    },
    {
      question: 'What type of massage do you do?',
      answer:
        'Honestly, I don’t have a label for the type I do. Thus, I call it bodywork. Craniosacral, deep pressure, lymphatic drainage, myofascial release, neuromuscular, prenatal / pregnancy sports, structural, trigger point, etc. are all labels people have given them and are all relative. Like I tell clients, I’m not in your body so I have no idea what deep means to you. So, we’ll figure it out together.',
    },
    {
      question: 'Do you use lotions, oils, etc?',
      answer:
        'I only use organic coconut oil when needed.  A lot of the time, the body produces enough oil. The more I can feel of your body, the more your body can feel my touch. Creams and lotions tend to mute this.',
    },
  ],
]

export function FaqComponent() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white pb-24"
    >
      <Container className="relative">
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
