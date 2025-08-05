import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function Listening() {
  return (
    <div className="bg-white pb-12 pt-24" id="listening">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#7A306C]/10 px-6 py-8 shadow-2xl sm:rounded-3xl sm:px-16">
          <div className=" flex w-full flex-col-reverse items-center sm:flex-row sm:justify-between">
            <div className="w-full">
              <h1 className="text-md mt-6 font-bold tracking-tight text-black">
                Now offering
              </h1>
              <div className="flex items-center gap-4">
                <h1 className="mt-0 text-4xl font-bold tracking-tight text-[#7A306C]">
                  Listening Sessions
                </h1>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black">
                The intention is to provide a safe space free of judgement and
                pressure. Giving you the time and space to discover yourself.
                Intently witnessing, sharing a perspective if asked.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black">
                Sincerely,
              </p>
              <p className="mt-1 max-w-xl text-lg leading-8 text-[#7A306C]">
                jeff
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-hand-heart-icon lucide-hand-heart stroke-[#7A306C]"
              >
                <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
                <path d="m2 15 6 6" />
                <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
              </svg>
              <p className="mb-4 text-center text-3xl font-bold tracking-tight text-[#7A306C]">
                Find someone who will sit quietly with you when the world within
                is loud.
              </p>
              <Link
                href="https://jonesbodywork.as.me/"
                className="group flex w-fit gap-2 rounded-md bg-[#7A306C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1C415E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Schedule
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-heart-icon lucide-heart fill-white group-hover:fill-white"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </Link>
            </div>
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
// export default function Listening() {
//   return (
//     <div className="mx-auto max-w-6xl overflow-hidden bg-gray-50 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="lg:pr-8 lg:pt-4">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base/7 font-semibold text-indigo-600">
//                 Deploy faster
//               </h2>
//               <p className="text-pretty mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                 A better workflow
//               </p>
//               <p className="mt-6 text-lg/8 text-gray-700">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Maiores impedit perferendis suscipit eaque, iste dolor
//                 cupiditate blanditiis ratione.
//               </p>
//               <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative pl-9">
//                     <dt className="inline font-semibold text-gray-900">
//                       {/* <feature.icon
//                         aria-hidden="true"
//                         className="size-5 absolute left-1 top-1 text-indigo-600"
//                       /> */}
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline">{feature.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
