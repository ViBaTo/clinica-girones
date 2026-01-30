'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui'
import { CLINIC_INFO } from '@/lib/constants'
import { generatePhoneLink } from '@/lib/utils'
import Link from 'next/link'

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 gradient-primary' />
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90A4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative Circles */}
      <div className='absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />

      <div className='container-custom relative z-10 pt-24 pb-16'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight mb-6'
            >
              Cuida de tu salud,{' '}
              <span className='text-primary'>
                el bienestar se consigue paso a paso
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl'
            >
              Más de 30 años de experiencia en tratamientos podológicos
              personalizados, ahora con más servicios para mejorar tu salud paso
              a paso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <Link href='/contacto'>
                <Button size='lg' className='w-full sm:w-auto gap-2'>
                  <MessageCircle className='w-5 h-5' />
                  Pedir Cita
                </Button>
              </Link>
              <a href={generatePhoneLink(CLINIC_INFO.phone)}>
                <Button
                  variant='outline'
                  size='lg'
                  className='w-full sm:w-auto gap-2'
                >
                  <Phone className='w-5 h-5' />
                  Llamar Ahora
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className='mt-10 pt-8 border-t border-neutral-200'
            >
              <div className='flex flex-wrap gap-8'>
                <div>
                  <p className='text-3xl font-semibold text-primary'>+30</p>
                  <p className='text-sm text-neutral-500'>
                    Años de experiencia
                  </p>
                </div>
                <div>
                  <p className='text-3xl font-semibold text-primary'>+13.000</p>
                  <p className='text-sm text-neutral-500'>
                    Pacientes atendidos
                  </p>
                </div>
                <div>
                  <p className='text-3xl font-semibold text-primary'>4,8★</p>
                  <p className='text-sm text-neutral-500'>Valoración Google</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='relative hidden lg:block'
          >
            <div className='relative aspect-square max-w-lg mx-auto'>
              {/* Placeholder for actual clinic image */}
              <div className='absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center p-8'>
                    <div className='w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center'>
                      <svg
                        className='w-16 h-16 text-primary'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                        />
                      </svg>
                    </div>
                    <p className='text-primary-dark font-medium text-lg'>
                      Cuidado profesional
                    </p>
                    <p className='text-primary-600 text-sm mt-1'>
                      para tus pies
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className='absolute -left-8 top-1/4 bg-white rounded-xl shadow-elevated p-4'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                    <svg
                      className='w-5 h-5 text-green-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='font-medium text-neutral-900 text-sm'>
                      Citas disponibles
                    </p>
                    <p className='text-xs text-neutral-500'>Hoy y mañana</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className='absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-elevated p-4'
              >
                <div className='flex items-center gap-2'>
                  <div className='flex -space-x-2'>
                    <div className='w-8 h-8 bg-primary-100 rounded-full border-2 border-white' />
                    <div className='w-8 h-8 bg-primary-200 rounded-full border-2 border-white' />
                    <div className='w-8 h-8 bg-primary-300 rounded-full border-2 border-white' />
                  </div>
                  <p className='text-xs text-neutral-600'>
                    <span className='font-semibold text-neutral-900'>+200</span>{' '}
                    pacientes este mes
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToServices}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-primary transition-colors'
          aria-label='Ver más'
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className='w-6 h-6' />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
