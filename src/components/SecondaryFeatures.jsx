

const features = [
  {
    name: 'Craniosacral',
    description:
    "Craniosacral work is working with the cranial bones of the head and the sacrum.  It's very delicate work.  The releases are very subtle and often not felt by the client. There's a different rhythm than the breathing and pulse rate of the body. It can be very relaxing to the client.",
  },
  {
    name: 'Cupping',
    description:
    `Cupping has been around for several thousand years. It's about bringing attention, and fluids of the body to a certain area/region. I often use it when someone is unable to handle the pressure of pushing. Cupping can benefit anyone. Often, I will leave the cups on one part of the body while working on another area.`,
  },
  {
    name: 'Lymphatic drainage',
    description:
      "The lymph system runs throughout the entire body. It's just under the surface of the skin. It's known for transporting waste out of of the body. Many get lymph work when they first feel a cold or sore throat coming on. Many cancer patients receive a lot of lymph work on their journey. It's very gentle and delicate work.",
  },
  {
    name: 'Biofield Tuning Fork',
    description: "Tuning forks are used to bring vibration into the body. The sound waves travel through the tissues and can help release tension and promote balance. Different forks produce different tones, which can be used to target specific areas. It's a gentle but powerful way of working with both sound and touch together."
  }
]

export function SecondaryFeatures() {
  return (
    <div className="mb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl sm:mx-auto sm:text-center lg:ml-0 lg:text-left">
          <h3 className="text-3xl font-bold tracking-tight text-[#3F88C5]">
            Included services
          </h3>
          <p className="mt-6 pb-4 text-lg leading-8 text-gray-600 lg:pb-0">
            Besides &quot;regular&quot; bodywork, the services below can also be part of your session if you desire. Sometimes I will do it intuitively as well.
          </p>
        </div>
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:mx-auto lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="text-center">
          <p className="mt-8 text-lg font-bold leading-8 text-gray-600 w-1/2 mx-auto">
            Please feel free to schedule a session when you&apos;re not feeling well. Lymphatic work can be great for recovery.
          </p>
        </div>
      </div>
    </div>
  )
}
