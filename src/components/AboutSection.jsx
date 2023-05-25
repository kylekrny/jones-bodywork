const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
]

// "mx-auto max-w-7xl px-12 sm:mt-12 lg:px-12 xl:-mt-12 mt-24

export function AboutSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8" id="#about">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h1 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About
        </h1>
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <p>
              I left the corporate world behind me in 2006 with an major in
              math, and a MBA. I went to work at 24 Hour Fitness. In 2014, I
              went to massage school to be a better trainer, not intending to
              practice massage/bodywork. I had only received my first massage in
              2009 and my first massage from a male in 2012.
            </p>
            {/* <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas.
            </p> */}
          </div>
          <div>
            <p>
              The universe had a different plan. In 2016, I went to work at a
              local physical therapy clinic, as a bodyworker/licensed massage
              therapist. I enjoyed it more than I could have possibly imagined.
              I still love it today. In 2017, I fully committed to being a
              bodyworker. I did not renew any training or nutrition
              certifications, With the goal of having my own practice one day.
            </p>
            {/* <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
