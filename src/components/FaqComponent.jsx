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
      question: 'Why do you suggest no tips?',
      answer:
        'My price is my price. I’m content with it. There is no need for the stress or a hidden agenda of tipping. It’s an outdated practice that I do not wish to be a part.',
    },
    {
      question: 'Do you take insurance? Worker’s comp? HSA? MedPay?',
      answer:
        "I have an NPI number to take health insurance. Most insurances doesn’t currently cover my services. I do take HSA, as well as Medpay. I presently accept Worker's Comp, but may change that in the future.",
    },
    {
      question: 'Do you do in-home sessions?',
      answer: 'No.',
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
        'If I use an oil, it’s organic coconut oil and that’s it. No lotions or creams. The skin usually has enough oil so it depends on the client and the level of friction that is best for them.',
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
