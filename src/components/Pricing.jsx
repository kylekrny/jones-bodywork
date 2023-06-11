const stats = [
  { id: 1, name: '30 minutes', value: '$40.00' },
  { id: 2, name: '60 minutes', value: '$80.00' },
  { id: 3, name: '75 minutes', value: '$100.00' },
  { id: 4, name: '90 minutes', value: '$120.00' },
]

export function Pricing() {
  return (
    <div className="bg-white pb-24 sm:pb-12" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="sm:mx-auto sm:text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#3F88C5] sm:text-4xl">
              Simple flat rate pricing
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 lg:w-2/3 sm:w-full">
              The clock doesn&apos;t start for your session until you are actually on the table.
            </p>
          </div>
          <fdl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
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
          </fdl>
          <div className="text-center">
            <p className="mt-8 text-lg font-bold leading-8 text-gray-600">
              Tips not accepted.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
