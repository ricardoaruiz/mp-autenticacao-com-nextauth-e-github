import React, { ComponentProps } from 'react'
import { Arrow } from '../Icons/Arrow'

type ItemButtonProps = ComponentProps<'button'>

export const ItemButton = ({ children, className, ...props }: ItemButtonProps) => {
  return (
    <button className={`flex justify-between items-center w-full h-full px-2 py-8 ${className}`} { ...props}>
      {children}
      <div className="text-violet-700">
        <Arrow />
      </div>
  </button>
  )
}
