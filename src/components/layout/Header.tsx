'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Footprints,
  Hand,
  Heart,
  Dumbbell
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, CLINIC_INFO, SERVICES } from '@/lib/constants'
import { Button, Logo } from '@/components/ui'

const serviceIconMap: Record<string, React.ElementType> = {
  Footprints,
  Hand,
  Heart,
  Dumbbell
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-4'
      )}
    >
      <nav className='container-custom'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center group'
            aria-label={CLINIC_INFO.name}
          >
            <Logo
              size='md'
              className='text-neutral-900 group-hover:text-primary transition-colors'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {NAV_LINKS.map((link) => {
              // Special handling for Servicios with dropdown
              if (link.href === '/servicios') {
                return (
                  <div
                    key={link.href}
                    className='relative'
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-sm font-medium transition-colors relative py-2 flex items-center gap-1',
                        pathname === link.href ||
                          pathname.startsWith('/servicios')
                          ? 'text-primary'
                          : 'text-neutral-600 hover:text-primary'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          isServicesOpen && 'rotate-180'
                        )}
                      />
                      {(pathname === link.href ||
                        pathname.startsWith('/servicios')) && (
                        <motion.div
                          layoutId='activeNav'
                          className='absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full'
                        />
                      )}
                    </Link>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className='absolute top-full left-1/2 -translate-x-1/2 pt-3'
                        >
                          <div className='bg-white rounded-2xl shadow-lg border border-neutral-100 p-4 min-w-[280px]'>
                            <div className='space-y-1'>
                              {SERVICES.map((service) => {
                                const Icon =
                                  serviceIconMap[service.icon] || Footprints
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/servicios#${service.id}`}
                                    className='flex items-center gap-3 p-3 rounded-xl hover:bg-primary-light transition-colors group'
                                  >
                                    <div className='w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors'>
                                      <Icon className='w-5 h-5 text-primary group-hover:text-white transition-colors' />
                                    </div>
                                    <div>
                                      <span className='block text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors'>
                                        {service.title}
                                      </span>
                                      <span className='block text-xs text-neutral-500 line-clamp-1'>
                                        {service.shortDescription}
                                      </span>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                            <div className='mt-3 pt-3 border-t border-neutral-100'>
                              <Link
                                href='/servicios'
                                className='flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline'
                              >
                                Ver todos los servicios
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-2',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-neutral-600 hover:text-primary'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId='activeNav'
                      className='absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full'
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className='hidden lg:flex items-center gap-4'>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
              className='flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors'
            >
              <Phone className='w-4 h-4' />
              <span className='hidden xl:inline'>{CLINIC_INFO.phone}</span>
            </a>
            <Link href='/contacto'>
              <Button size='sm'>Pedir Cita</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 -mr-2 text-neutral-700 hover:text-primary transition-colors'
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='lg:hidden bg-white border-t border-neutral-100 overflow-hidden'
          >
            <div className='container-custom py-6'>
              <nav className='flex flex-col gap-1'>
                {NAV_LINKS.map((link, index) => {
                  // Special handling for Servicios with submenu
                  if (link.href === '/servicios') {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={cn(
                            'w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all',
                            pathname.startsWith('/servicios')
                              ? 'bg-primary-light text-primary'
                              : 'text-neutral-700 hover:bg-neutral-50'
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform duration-200',
                              isServicesOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className='overflow-hidden'
                            >
                              <div className='pl-4 py-2 space-y-1'>
                                {SERVICES.map((service) => {
                                  const Icon =
                                    serviceIconMap[service.icon] || Footprints
                                  return (
                                    <Link
                                      key={service.id}
                                      href={`/servicios#${service.id}`}
                                      className='flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors'
                                    >
                                      <Icon className='w-4 h-4 text-primary' />
                                      <span className='text-sm text-neutral-700'>
                                        {service.title}
                                      </span>
                                    </Link>
                                  )
                                })}
                                <Link
                                  href='/servicios'
                                  className='block py-2 px-3 text-sm text-primary font-medium'
                                >
                                  Ver todos los servicios
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  }

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'block py-3 px-4 rounded-xl text-base font-medium transition-all',
                          pathname === link.href
                            ? 'bg-primary-light text-primary'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className='mt-6 pt-6 border-t border-neutral-100 space-y-3'>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                  className='flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-50 text-neutral-700 font-medium hover:bg-neutral-100 transition-colors'
                >
                  <Phone className='w-5 h-5' />
                  {CLINIC_INFO.phone}
                </a>
                <Link href='/contacto' className='block'>
                  <Button className='w-full'>Pedir Cita</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Decorative separator line - fixed and thick */}
      <div className='absolute bottom-0 left-0 right-0 h-1 bg-primary/40' />
    </header>
  )
}
