import Link from "next/link"

const stats = [
  { id: 1, name: '30 minutes', value: '$50.00' },
  { id: 2, name: '60 minutes', value: '$100.00' },
  { id: 3, name: '75 minutes', value: '$125.00' },
  { id: 4, name: '90 minutes', value: '$150.00' },
  { id: 5, name: '120 minutes', value: '$200.00'},
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
            <p className="text-md mt-2 font-bold leading-8 text-gray-600">
              Cash, HSA/FSA, Venmo, Zelle, Apple Pay, Google Pay and most major
              credit / debit cards accepted.
            </p>
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
          <fdl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5">
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
        </div>
      </div>
    </div>
  )
}
