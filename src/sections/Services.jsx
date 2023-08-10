export default function Services({ content }) {
  return (
    <div className="mb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl sm:mx-auto sm:text-center lg:ml-0 lg:text-left">
          <h3 className="text-3xl font-bold tracking-tight text-sky-600">
            {content.intro.head}
          </h3>
          <p className="mt-6 pb-4 text-lg leading-8 text-gray-600 lg:pb-0">
            {content.intro.subHead}
          </p>
        </div>
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:mx-auto lg:max-w-none lg:grid-cols-3">
            {content.cards.map((service) => (
              <div key={service.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.body}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="text-center">
          <p className="mt-8 text-lg font-bold leading-8 text-gray-600 w-1/2 mx-auto">
            {content.subText}
          </p>
        </div>
      </div>
    </div>
  )
}
