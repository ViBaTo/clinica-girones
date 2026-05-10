import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  /** 'default' uses the brand color (#272B00); 'white' is for dark backgrounds. */
  variant?: 'default' | 'white'
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const sizes = {
    sm: { height: 28, width: 197 },
    md: { height: 40, width: 282 },
    lg: { height: 56, width: 395 }
  }

  const sizeClasses = {
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-14'
  }

  const logoSrc =
    variant === 'white'
      ? '/logo-clinica-girones-white.svg'
      : '/logo-clinica-girones.svg'

  return (
    <Image
      src={logoSrc}
      alt='Clínica Gironés'
      width={sizes[size].width}
      height={sizes[size].height}
      className={cn(sizeClasses[size], 'w-auto', className)}
      priority
    />
  )
}
