const stats = [
  { id: 1, name: '30 minutes', value: '$50.00' },
  { id: 2, name: '60 minutes', value: '$80.00' },
  { id: 3, name: '75 minutes', value: '$100.00' },
  { id: 4, name: '90 minutes', value: '$120.00' },
]

export function Pricing() {
  return (
    <div className="bg-white pb-24 sm:pb-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fair and simple pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The time you&apos;re paying for is actual massage time. When you pay
              for a hour long session, you will get an hour long session. I believe in being fair. My prices are not
              going to make me rich, and I am okay with that.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="text-center">
            <p className="mt-8 font-bold text-lg leading-8 text-gray-600">
              Actual table time. Tips not accepted.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
