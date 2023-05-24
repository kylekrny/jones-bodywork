import Link from 'next/link'

export function CallToAction() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pb-24 sm:px-6 sm:pb-32 lg:px-8">
        <div className="bg-[#3F88C5] relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for reviews?
          </h2>
          {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p> */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/reviews"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Read reviews
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#FFFFFF" />
                <stop offset={1} stopColor="#FFFFFF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
