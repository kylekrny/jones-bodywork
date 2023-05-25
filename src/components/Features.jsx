const features = [
  {
    name: 'Post Surgical Recovery',
    description:
      'After the body has incurred a trauma such as surgery, bodywork can be used to begin the "waking up" process of the surgical area. It can help to start reorganizing the body after the , and bring Awareness and blood flow to the region where the trauma occurred. ',
  },
  {
    name: 'Muscle Fatigue and Soreness',
    description:
      'The benefit of massage for both muscle fatigue and soreness can be several... blood flow movement, lactic acid movement, lymph movement, relaxation. For some, this will be a deep and intense session. For others, this will be a gentle and relaxing session.',
  },
  {
    name: 'Relaxation',
    description:
      'Depending on the person and what their body needs, massage can be very relaxing. Falling asleep during your session is a compliment to the therapist. Because of the delicate touch of lymphatic massage and craniosacral, both types can be very relaxing.  The deep and intense work can be just as relaxing as well. It all depends on the person, what their body needs and wants during that particular session.',
  },
  {
    name: 'Muscle Tightness',
    description: `Just because the muscle feels tight, doesn't mean it actually is.  The nervous system may be guarding for some reason in order to keep the person "safe". Chances are this is related to an old injury/trauma/surgery.  When the body and nervous system start to relax, often times the "tight" or guarded muscle will follow.  The weighted blanket might help with this along with some craniosacral work to get the head and neck to relax.`,
  },
]

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bodywork can be great for
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bodywork is looking at the body as a whole including the emotions.
            The body is very complex and not linear.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
