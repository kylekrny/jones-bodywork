import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2',
  outline:
    'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 ring-1',
  link: `font-bold`,
}

const variantStyles = {
  solid: {
    blue: 'bg-sky-600 text-white hover:bg-sky-900',
    white: 'bg-white text-sky-600 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    blue: 'ring-sky-600 text-sky-600 hover:text-sky-900 hover:ring-sky-900',
    white: 'ring-white, text-white hover:bg-white hover:text-sky-600'
  },
  link: {
    blue: 'text-sky-600 hover:text-sky-900',
    white: 'text-white',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
