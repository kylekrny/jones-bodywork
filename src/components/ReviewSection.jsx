import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content: `
Jeff is extremely knowledgeable and has helped me through a lot of shoulder and neck pain. I have and would recommend him to anyone in need of relief from muscle pain as he’s helped me greatly. I will be going back to him for many years to come for all of my massage needs!`,
      author: {
        name: 'Justin B',
      },
    },
    {
      content: `
Jeff is amazing.   I first went to Jeff after an injury that kept me out out work for 2 weeks and with Jeff’s help, I was back to work the following Monday.
Jeff is professional, knowledgeable and courteous at all times.   He is the only masseuse I will go to.`,
      author: {
        name: 'Dave B',
      },
    },
    {
      content: `
Jeff does a great job of asking questions, listening, understanding my situation and needs, and working with me on overall goals for best possible outcomes. With his help, I’ve made huge strides in managing CRPS and nerve damage in an affected leg/foot. I always look forward to booking repeat sessions.`,
      author: {
        name: 'Sheri C',
      },
    },
    {
      content: `
Jeff is an amazing body worker!  His knowledge and skill are critical for helping me feel and perform at my best.`,
      author: {
        name: 'Jean S',
      },
    },
    {
      content: `
Fantastic massage! Best neck work!`,
      author: {
        name: 'Natalie A',
      },
    },
  ],
  [
    {
      content:
        'Jeff is outstanding. I always say he has healing hands. I am athletic and ask a lot of my body sometimes. Jeff puts me back into shape after some grueling workouts. He is without question the best masseuse I have ever used and he will continue to be my go to for all my massage needs!',
      author: {
        name: 'Liz K',
      },
    },
    {
      content:
        'This was a great experience.  I must admit I was a little nervous about having a male giving me a massage. From the time I made the appointment to time I left his office  He made me feel at ease. I was very impressed with his abilities and how he  customizes your session to you.. thanks so much. I will be going back and I would refer him to all I meet.',
      author: {
        name: 'Kennidee',
      },
    },
    {
      content: `Jeff Jones is one of the two best massage therapists I have ever had.  Finding an incredible therapist in a city full of mediocre massage therapists is very difficult.  (If you've lived in Denver for long, you know what I mean.)  A good reference can mean everything.  Well, here's your reference.  I consider him a Godsend.`,
      author: {
        name: 'Jess L',
      },
    },
    {
      content: `Jeff is a unique individual within his profession. He's kind, compassionate, caring, and meets his patients where they are. His motto is to keep his patients feeling comfortable and safe. This is a motto I can get behind. Highly recommended!`,
      author: {
        name: 'Jesse W',
      },
    },
  ],
  [
    {
      content:
        "Just called around and was able to get into appointment fast. Was in alot pain with knots in the back from work/ getting back into the gym. Called Jeff due to him being near home. Walk out of there feeling 100% better. He has alot of knowledge and knows what he's doing. Had a great conversation through the whole session. Will be going back.",
      author: {
        name: 'Maxwell S',
      },
    },
    {
      content:
        'Jeff creates a relaxing environment. He listens to your wants and what has brought you in for a massage. I enjoy seeing Jeff for massages and would recommend him to anyone.',
      author: {
        name: 'Nick Q',
      },
    },
    {
      content:
        'I highly recommend Jeff if you are looking for a wonderful massage and a relaxing experience.',
      author: {
        name: 'Elizabeth W',
      },
    },
    {
      content:
        'Jeff listened to what I wanted to work on and provided good feedback on how he could help. He also got me in very quickly.',
      author: {
        name: 'Lizabeth Q',
      },
    },
    {
      content: `Jeff is such a knowledgeable massage therapist, and a very kind soul. Definitely go see him!`,
      author: {
        name: 'Chloe D',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function ReviewSection() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-white pb-20 pt-4 sm:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            I believe testimonials can be one sided. While I do work hard making sure I give my all to every client, not everyone will have a good experience. The reviews you see are pulled directly from google. No filtering. No cherry picking.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        {/* <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div> */}
                      </figcaption>
                    </figure>
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
