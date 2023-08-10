export default function Benefits({ content }) {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
            {content.intro.head}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {content.intro.subHead}
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {content.cards.map((card) => (
            <div key={card.id}>
              <dt className="font-semibold text-gray-900">{card.name}</dt>
              <dd className="mt-1 text-gray-600">{card.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
