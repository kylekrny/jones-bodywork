import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function About({ content }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8" id="about">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h1 className="mt-12 text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
          {content.head}
        </h1>
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <ReactMarkdown>
            {content.subHead}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
