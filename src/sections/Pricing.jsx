import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Pricing({ content }) {
  return (
    <div className="bg-white pb-24 sm:pb-12" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="sm:mx-auto sm:text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
              {content.intro.head}
            </h2>
            <ReactMarkdown className="text-md mt-2 leading-8 text-gray-600 sm:w-full lg:w-2/3">
              {content.intro.subHead}
            </ReactMarkdown>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {content.cards.map((price) => (
              <div key={price.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {price.body}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {price.name}
                </dd>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="mt-8 text-lg font-bold leading-8 text-gray-600">
              {content.subText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
