import React, { ComponentProps } from 'react'
import { Arrow } from '../Icons/Arrow'
import Link from 'next/link'

type ItemButtonProps = ComponentProps<typeof Link>

export const ItemButton = ({ children, className, ...props }: ItemButtonProps) => {
  return (
    <Link className={`flex justify-between items-center w-full h-full px-2 py-8 ${className}`} { ...props}>
      {children}
      <div className="text-violet-700">
        <Arrow />
      </div>
  </Link>
  )
}
