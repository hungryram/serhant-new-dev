import Image from 'next/image'

import { urlForImage } from '../../../lib/sanity'
import { AuthorProps } from '../../../types'

export default function Avatar(props: AuthorProps) {
  const { name, picture } = props
  return (
    <div className="flex items-center" aria-label={`Author image of ${name}`}>
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?abstract'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-lg">{name}</div>
    </div>
  )
}
