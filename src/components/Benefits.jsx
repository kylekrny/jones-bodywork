export function Benefits({ content }) {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#3F88C5] sm:text-4xl">
            {content.head_text}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {content.sub_head_text}
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {content.benefits_cards.map((benefit) => (
            <div key={benefit.id}>
              <dt className="font-semibold text-gray-900">{benefit.head_text}</dt>
              <dd className="mt-1 text-gray-600">{benefit.body_text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
