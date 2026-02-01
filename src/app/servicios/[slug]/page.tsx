'use client'

import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Footprints,
  Activity,
  Layers,
  Shield,
  Scissors,
  Zap,
  Sparkles,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Users,
  Award,
  Target,
  Plus,
  Minus,
  Hand,
  Baby,
  Cpu,
  Radio,
  Heart,
  Dumbbell,
  Droplets,
  AlertCircle,
  Stethoscope,
  HeartPulse,
  User,
  Trophy
} from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { SERVICES_DETAIL, SERVICES, CLINIC_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'
import { notFound } from 'next/navigation'

const iconMap: Record<string, React.ElementType> = {
  Footprints,
  Activity,
  Layers,
  Shield,
  Scissors,
  Zap,
  Sparkles,
  Users,
  Award,
  Target,
  Hand,
  Baby,
  Cpu,
  Radio,
  Heart,
  Dumbbell,
  Droplets,
  AlertCircle,
  Stethoscope,
  HeartPulse,
  User,
  Trophy
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

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(
    null
  )

  const serviceDetail = SERVICES_DETAIL[slug]

  if (!serviceDetail) {
    notFound()
  }

  const HeroIcon = iconMap[serviceDetail.icon] || Footprints

  // Get related services data
  const relatedServicesData = SERVICES.filter((s) =>
    serviceDetail.relatedServices.includes(s.id)
  )

  return (
    <>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden'>
        {/* Background with gradient and pattern */}
        <div className='absolute inset-0 gradient-primary' />
        <div className='absolute inset-0 opacity-[0.03]'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className='container-custom relative'>
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='flex items-center gap-2 text-sm text-neutral-500 mb-8'
          >
            <Link href='/' className='hover:text-primary transition-colors'>
              Inicio
            </Link>
            <ChevronRight className='w-4 h-4' />
            <Link
              href='/servicios'
              className='hover:text-primary transition-colors'
            >
              Servicios
            </Link>
            <ChevronRight className='w-4 h-4' />
            <span className='text-primary font-medium'>
              {serviceDetail.title}
            </span>
          </motion.nav>

          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft mb-6'>
                <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center'>
                  <HeroIcon className='w-5 h-5 text-white' />
                </div>
                <span className='text-sm font-medium text-neutral-700'>
                  Servicio especializado
                </span>
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-4'>
                {serviceDetail.title}
              </h1>
              <p className='text-xl text-primary font-medium mb-6'>
                {serviceDetail.subtitle}
              </p>
              <p className='text-lg text-neutral-600 leading-relaxed mb-8'>
                {serviceDetail.heroDescription}
              </p>

              {/* CTAs */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href='/contacto'>
                  <Button size='lg' className='w-full sm:w-auto gap-2'>
                    Pedir cita
                    <ArrowRight className='w-5 h-5' />
                  </Button>
                </Link>
                <a
                  href={generateWhatsAppLink(
                    CLINIC_INFO.whatsapp,
                    `Hola, me gustaría información sobre el servicio de ${serviceDetail.title}`
                  )}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    variant='outline'
                    size='lg'
                    className='w-full sm:w-auto gap-2'
                  >
                    <MessageCircle className='w-5 h-5' />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative'
            >
              <div className='relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated'>
                <Image
                  src={serviceDetail.image}
                  alt={serviceDetail.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-2xl p-4 shadow-elevated'
              >
                <div className='flex gap-6'>
                  {serviceDetail.highlights.slice(0, 2).map((highlight, i) => (
                    <div key={i} className='text-center'>
                      <p className='text-2xl font-bold text-primary'>
                        {highlight.value}
                      </p>
                      <p className='text-xs text-neutral-500'>
                        {highlight.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <span className='inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3'>
              Nuestros Tratamientos
            </span>
            <h2 className='text-3xl md:text-4xl font-semibold text-neutral-900 mb-4'>
              Soluciones especializadas para cada necesidad
            </h2>
            <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
              Ofrecemos una amplia gama de tratamientos podológicos adaptados a
              cada paciente.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='space-y-6'
          >
            {serviceDetail.treatments.map((treatment) => {
              const TreatmentIcon = iconMap[treatment.icon] || Footprints
              const isExpanded = expandedTreatment === treatment.id

              return (
                <motion.div key={treatment.id} variants={itemVariants}>
                  <Card className='p-0 overflow-hidden'>
                    {/* Treatment Header */}
                    <button
                      onClick={() =>
                        setExpandedTreatment(isExpanded ? null : treatment.id)
                      }
                      className='w-full p-6 md:p-8 flex items-start gap-6 text-left hover:bg-neutral-50/50 transition-colors'
                    >
                      <div className='w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center flex-shrink-0'>
                        <TreatmentIcon className='w-8 h-8 text-primary' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-xl md:text-2xl font-semibold text-neutral-900 mb-2'>
                          {treatment.title}
                        </h3>
                        <p className='text-neutral-600 leading-relaxed'>
                          {treatment.description}
                        </p>
                      </div>
                      <div className='flex-shrink-0 mt-1'>
                        <div
                          className={`w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        >
                          <ChevronDown className='w-5 h-5 text-neutral-600' />
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='overflow-hidden'
                        >
                          <div className='px-6 md:px-8 pb-8 pt-2 border-t border-neutral-100'>
                            <div className='grid md:grid-cols-2 gap-8 mt-6'>
                              {/* Long Description */}
                              <div>
                                <p className='text-neutral-600 leading-relaxed mb-6'>
                                  {treatment.longDescription}
                                </p>

                                {/* Sub-treatments if any */}
                                {treatment.subTreatments && (
                                  <div className='space-y-4'>
                                    <h4 className='font-semibold text-neutral-900'>
                                      Tratamientos incluidos:
                                    </h4>
                                    {treatment.subTreatments.map((sub) => {
                                      const SubIcon =
                                        iconMap[sub.icon] || Footprints
                                      return (
                                        <div
                                          key={sub.id}
                                          className='flex items-start gap-3 p-4 bg-neutral-50 rounded-xl'
                                        >
                                          <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-soft flex-shrink-0'>
                                            <SubIcon className='w-5 h-5 text-primary' />
                                          </div>
                                          <div>
                                            <div className='flex items-center gap-2 mb-1'>
                                              <h5 className='font-medium text-neutral-900'>
                                                {sub.title}
                                              </h5>
                                              {sub.badge && (
                                                <span className='text-xs bg-primary text-white px-2 py-0.5 rounded-full'>
                                                  {sub.badge}
                                                </span>
                                              )}
                                            </div>
                                            <p className='text-sm text-neutral-600'>
                                              {sub.description}
                                            </p>
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                              </div>

                              {/* Benefits & Recommended */}
                              <div className='space-y-6'>
                                {/* Benefits */}
                                <div>
                                  <h4 className='font-semibold text-neutral-900 mb-4'>
                                    Beneficios
                                  </h4>
                                  <ul className='space-y-3'>
                                    {treatment.benefits.map((benefit, i) => (
                                      <li
                                        key={i}
                                        className='flex items-start gap-3'
                                      >
                                        <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                                        <span className='text-neutral-600'>
                                          {benefit}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Recommended For */}
                                {treatment.recommendedFor && (
                                  <div>
                                    <h4 className='font-semibold text-neutral-900 mb-4'>
                                      Recomendado para
                                    </h4>
                                    <div className='flex flex-wrap gap-2'>
                                      {treatment.recommendedFor.map(
                                        (item, i) => (
                                          <span
                                            key={i}
                                            className='inline-flex items-center gap-1 bg-primary-light text-primary-dark text-sm px-3 py-1.5 rounded-full'
                                          >
                                            <Users className='w-3.5 h-3.5' />
                                            {item}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className='section-padding bg-neutral-50'>
        <div className='container-custom'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <span className='inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3'>
              Cómo Funciona
            </span>
            <h2 className='text-3xl md:text-4xl font-semibold text-neutral-900 mb-4'>
              Tu proceso de tratamiento
            </h2>
            <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
              Desde la primera consulta hasta la recuperación completa, te
              acompañamos en cada paso.
            </p>
          </motion.div>

          <div className='relative'>
            {/* Connection Line - positioned at the center of numbers */}
            <div className='hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-primary' />

            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid md:grid-cols-4 gap-8'
            >
              {serviceDetail.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className='relative'
                >
                  <div className='text-center'>
                    {/* Step Number */}
                    <div className='relative inline-flex mb-6'>
                      <div className='w-16 h-16 bg-white border-2 border-primary rounded-2xl shadow-card flex items-center justify-center relative z-10'>
                        <span className='text-2xl font-bold text-primary'>
                          {step.step}
                        </span>
                      </div>
                      {/* Pulse Animation */}
                      <div className='absolute inset-0 bg-primary/20 rounded-2xl animate-pulse-soft' />
                    </div>

                    <h3 className='text-lg font-semibold text-neutral-900 mb-2'>
                      {step.title}
                    </h3>
                    <p className='text-neutral-600 text-sm leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20'>
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className='inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3'>
                Preguntas Frecuentes
              </span>
              <h2 className='text-3xl md:text-4xl font-semibold text-neutral-900 mb-6'>
                Resolvemos tus dudas
              </h2>
              <p className='text-lg text-neutral-600 leading-relaxed mb-8'>
                Encuentra respuestas a las preguntas más comunes sobre nuestros
                tratamientos de {serviceDetail.title.toLowerCase()}.
              </p>

              <Card className='bg-primary text-white p-6'>
                <h3 className='font-semibold text-lg mb-3'>
                  ¿Tienes más preguntas?
                </h3>
                <p className='text-primary-100 text-sm mb-4'>
                  Estamos aquí para ayudarte. Contacta con nosotros y te
                  atenderemos encantados.
                </p>
                <div className='flex gap-3'>
                  <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}>
                    <Button
                      variant='secondary'
                      size='sm'
                      className='bg-white text-primary hover:bg-neutral-50 gap-2'
                    >
                      <Phone className='w-4 h-4' />
                      Llamar
                    </Button>
                  </a>
                  <a
                    href={generateWhatsAppLink(
                      CLINIC_INFO.whatsapp,
                      `Hola, tengo una consulta sobre ${serviceDetail.title}`
                    )}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button
                      variant='secondary'
                      size='sm'
                      className='bg-white/20 text-white hover:bg-white/30 gap-2'
                    >
                      <MessageCircle className='w-4 h-4' />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Right Side - FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-4'
            >
              {serviceDetail.faq.map((faq, index) => (
                <div
                  key={index}
                  className='border border-neutral-200 rounded-xl overflow-hidden'
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className='w-full p-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors'
                  >
                    <span className='font-medium text-neutral-900 pr-4'>
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    >
                      {openFaq === index ? (
                        <Minus className='w-4 h-4 text-primary' />
                      ) : (
                        <Plus className='w-4 h-4 text-primary' />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <div className='px-5 pb-5 pt-0'>
                          <p className='text-neutral-600 leading-relaxed'>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <section className='section-padding bg-neutral-50'>
          <div className='container-custom'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-center mb-12'
            >
              <span className='inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3'>
                Servicios Relacionados
              </span>
              <h2 className='text-3xl md:text-4xl font-semibold text-neutral-900'>
                También te puede interesar
              </h2>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8'>
              {relatedServicesData.map((service) => {
                const ServiceIcon = iconMap[service.icon] || Footprints
                return (
                  <Link key={service.id} href={`/servicios#${service.id}`}>
                    <Card hover className='h-full p-6'>
                      <div className='flex items-start gap-4'>
                        <div className='w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0'>
                          <ServiceIcon className='w-7 h-7 text-primary' />
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold text-neutral-900 mb-2'>
                            {service.title}
                          </h3>
                          <p className='text-neutral-600 text-sm line-clamp-2'>
                            {service.shortDescription}
                          </p>
                          <span className='inline-flex items-center gap-1 text-primary text-sm font-medium mt-3'>
                            Ver servicio
                            <ArrowRight className='w-4 h-4' />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className='section-padding bg-primary'>
        <div className='container-custom text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl md:text-4xl font-semibold text-white mb-4'>
              ¿Listo para seguir cuidándote?
            </h2>
            <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
              ¡Reserva tu cita hoy mismo y da el primer paso!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contacto'>
                <Button
                  variant='secondary'
                  size='lg'
                  className='bg-white text-primary hover:bg-neutral-50 gap-2'
                >
                  Pedir cita ahora
                  <ArrowRight className='w-5 h-5' />
                </Button>
              </Link>
              <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white hover:text-primary gap-2'
                >
                  <Phone className='w-5 h-5' />
                  {CLINIC_INFO.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
