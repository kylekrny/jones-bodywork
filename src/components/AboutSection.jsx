const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]

// "mx-auto max-w-7xl px-12 sm:mt-12 lg:px-12 xl:-mt-12 mt-24

export function AboutSection({ content }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8" id="#about">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h1 className="mt-12 text-3xl font-bold tracking-tight text-[#3F88C5] sm:text-4xl">
          {content.head_text}
        </h1>
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            {content.body_text}
          </div>
        </div>
      </div>
    </div>
  )
}
