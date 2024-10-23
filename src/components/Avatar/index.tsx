import Image from 'next/image'
import React, { ComponentProps } from 'react'

type AvatarProps = ComponentProps<'div'> & {
  imgUrl?: string
}

export const Avatar = ({ imgUrl, className, ...props }: AvatarProps) => {
  return (
    <div className={`relative rounded-full w-24 h-24 ${className}`} {...props}>
      {!imgUrl && <Image src="/assets/images/avatar.svg" alt="Avatar" fill className="object-cover" />}
      {imgUrl && <Image src={imgUrl} alt="Avatar" fill className="object-cover" />}
    </div>
  )
}
