import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button 
      className={`px-5 py-4 bg-black text-white flex justify-center gap-4 rounded-lg text-xl min-w-56 ${className}`} 
      { ...props}>
      <div className='flex items-center justify-center gap-4'>
        {children}
      </div>
    </button>
  )
}
