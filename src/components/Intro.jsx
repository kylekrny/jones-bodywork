import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function About({ content }) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
        {content.head}
      </h2>
        <ReactMarkdown className="mt-6 text-lg leading-8 text-gray-600">
          {content.subHead}
        </ReactMarkdown>
    </div>
  )
}
