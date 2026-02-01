'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Footprints,
  Hand,
  Heart,
  Dumbbell,
  Activity,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Card } from '@/components/ui'
import { SERVICES, SERVICES_DETAIL, CLINIC_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  Footprints,
  Hand,
  Heart,
  Dumbbell,
  Activity
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
}

export default function ServiciosPage() {
  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className='pt-32 pb-16 md:pt-40 md:pb-20 gradient-primary'>
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='max-w-3xl mx-auto text-center'
          >
            <span className='inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4'>
              Nuestros Servicios
            </span>
            <h1 className='text-4xl md:text-5xl font-semibold text-neutral-900 mb-6'>
              Tratamientos especializados para tu bienestar
            </h1>
            <p className='text-lg text-neutral-600 leading-relaxed'>
              Ofrecemos servicios especializados en podología, fisioterapia,
              suelo pélvico, pilates terapéutico y ejercicio terapéutico,
              utilizando las técnicas más avanzadas y un enfoque personalizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='space-y-8'
          >
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Footprints
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={itemVariants}
                  className='scroll-mt-32'
                >
                  <Card className='overflow-hidden p-0'>
                    <div
                      className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                    >
                      {/* Image Side */}
                      <div
                        className={`relative min-h-[280px] md:min-h-[400px] ${!isEven ? 'md:order-2' : ''}`}
                      >
                        <Image
                          src={service.image}
                          alt={`Servicio de ${service.title}`}
                          fill
                          className='object-cover'
                          sizes='(max-width: 768px) 100vw, 50vw'
                        />
                        {/* Overlay with duration badge */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
                        <div className='absolute bottom-4 left-4 flex items-center gap-3'>
                          <div className='flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg'>
                            <Clock className='w-4 h-4 text-primary' />
                            <span className='text-sm font-medium text-neutral-700'>
                              {service.duration}
                            </span>
                          </div>
                          <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg'>
                            <Icon className='w-5 h-5 text-white' />
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div
                        className={`p-8 md:p-12 ${!isEven ? 'md:order-1' : ''}`}
                      >
                        {/* Header with title and details button */}
                        <div className='flex items-start justify-between gap-4 mb-4'>
                          <h2 className='text-2xl md:text-3xl font-semibold text-neutral-900'>
                            {service.title}
                          </h2>
                          {SERVICES_DETAIL[service.id] && (
                            <Link
                              href={`/servicios/${service.id}`}
                              className='flex-shrink-0'
                            >
                              <Button
                                variant='ghost'
                                size='sm'
                                className='text-primary hover:text-primary-dark gap-1 text-sm'
                              >
                                Ver más
                                <ArrowRight className='w-3 h-3' />
                              </Button>
                            </Link>
                          )}
                        </div>
                        <p className='text-neutral-600 leading-relaxed mb-6'>
                          {service.fullDescription}
                        </p>

                        {/* Benefits */}
                        <div className='mb-8'>
                          <h3 className='text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4'>
                            Beneficios
                          </h3>
                          <ul className='grid sm:grid-cols-2 gap-3'>
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className='flex items-start gap-2'>
                                <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                                <span className='text-sm text-neutral-600'>
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className='flex flex-col sm:flex-row gap-3 flex-wrap'>
                          <Link href='/contacto'>
                            <Button className='w-full sm:w-auto gap-2'>
                              Pedir cita
                              <ArrowRight className='w-4 h-4' />
                            </Button>
                          </Link>
                          <a
                            href={generateWhatsAppLink(
                              CLINIC_INFO.whatsapp,
                              `Hola, me gustaría información sobre el servicio de ${service.title}`
                            )}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Button
                              variant='outline'
                              className='w-full sm:w-auto'
                            >
                              Consultar por WhatsApp
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-primary'>
        <div className='container-custom text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl md:text-4xl font-semibold text-white mb-4'>
              ¿No encuentras lo que buscas?
            </h2>
            <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
              Contáctanos y te asesoraremos sobre el tratamiento más adecuado
              para tu caso.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contacto'>
                <Button
                  variant='secondary'
                  size='lg'
                  className='bg-white text-primary hover:bg-neutral-50'
                >
                  Contactar
                </Button>
              </Link>
              <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white hover:text-primary'
                >
                  Llamar: {CLINIC_INFO.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
