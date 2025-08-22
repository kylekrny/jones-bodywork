import Link from 'next/link'

const stats = [
  { id: 2, name: '60 minutes', value: '$110.00' },
  { id: 3, name: '75 minutes', value: '$140.00' },
  { id: 4, name: '90 minutes', value: '$165.00' },
]

export function Pricing() {
  return (
    <div className="bg-white pb-24 sm:pb-12" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="sm:mx-auto sm:text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#3F88C5] sm:text-4xl">
              Bodywork Pricing
            </h2>

            <p className="mb-2 mt-1 text-lg leading-8 text-gray-600 sm:w-full lg:w-2/3">
              The clock doesn&apos;t start for your session until you are
              actually on the table.
            </p>
            <Link
              href="https://squareup.com/gift/2Y7C66NK2Y2BN/order"
              className="rounded-md bg-[#3F88C5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1C415E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Purchase a gift card
            </Link>
          </div>
          <fdl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3 lg:grid-cols-3">
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
          <p className="text-md mt-4 text-center font-bold leading-8 text-gray-600">
            Cash, Venmo, Zelle encouraged.
          </p>
          <p className="text-md mt-1 text-center font-bold italic text-gray-600">
            Credit/Debit cards and HSA incur a 3% processing fee.
          </p>
        </div>
      </div>
    </div>
  )
}
