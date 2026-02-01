import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white'
}

export function Logo({
  className,
  size = 'md',
  variant = 'default'
}: LogoProps) {
  const sizes = {
    sm: { height: 64, width: 90 },
    md: { height: 88, width: 124 },
    lg: { height: 112, width: 158 }
  }

  const sizeClasses = {
    sm: 'h-16',
    md: 'h-[88px]',
    lg: 'h-28'
  }

  const logoSrc =
    variant === 'white'
      ? '/clinica-girones-logo-white.svg'
      : '/clinica-girones-logo.svg'

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
