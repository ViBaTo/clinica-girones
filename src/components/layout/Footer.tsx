import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, ArrowRight } from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS, SERVICES } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'
import { Logo } from '@/components/ui'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black text-white'>
      {/* CTA Section */}
      <div className='bg-primary'>
        <div className='container-custom py-12 md:py-16'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div>
              <h2 className='text-2xl md:text-3xl font-semibold text-white mb-2'>
                ¿Necesitas una consulta?
              </h2>
              <p className='text-primary-100 text-lg'>
                Estamos aquí para cuidar de la salud de tus pies
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-neutral-50 transition-colors'
              >
                <Phone className='w-5 h-5' />
                Llamar ahora
              </a>
              <a
                href={generateWhatsAppLink(
                  CLINIC_INFO.whatsapp,
                  'Hola, me gustaría pedir una cita'
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-dark text-white font-medium rounded-full hover:bg-primary-800 transition-colors'
              >
                WhatsApp
                <ArrowRight className='w-4 h-4' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='container-custom py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
          {/* About Column */}
          <div className='lg:col-span-1'>
            <Link href='/' className='inline-block mb-4'>
              <Logo size='md' variant='white' />
            </Link>
            <p className='text-neutral-400 text-sm leading-relaxed mb-6'>
              {CLINIC_INFO.description}
            </p>
            <div className='flex gap-3'>
              <a
                href={CLINIC_INFO.socialMedia.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Servicios</h3>
            <ul className='space-y-2'>
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios#${service.id}`}
                    className='text-neutral-400 hover:text-white text-sm transition-colors'
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/servicios'
                  className='text-primary hover:text-primary-300 text-sm font-medium transition-colors inline-flex items-center gap-1'
                >
                  Ver todos
                  <ArrowRight className='w-3 h-3' />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Enlaces</h3>
            <ul className='space-y-2'>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-neutral-400 hover:text-white text-sm transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className='font-semibold text-white mb-4'>Contacto</h3>
            <ul className='space-y-4'>
              <li>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                  className='flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group'
                >
                  <Phone className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <span className='text-sm'>{CLINIC_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className='flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group'
                >
                  <Mail className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <span className='text-sm'>{CLINIC_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address.street + ', ' + CLINIC_INFO.address.postalCode + ' ' + CLINIC_INFO.address.city)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group'
                >
                  <MapPin className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <span className='text-sm'>
                    {CLINIC_INFO.address.street}, {CLINIC_INFO.address.floor}
                    <br />
                    {CLINIC_INFO.address.neighborhood},{' '}
                    {CLINIC_INFO.address.postalCode} {CLINIC_INFO.address.city}
                  </span>
                </a>
              </li>
              <li>
                <div className='flex items-start gap-3 text-neutral-400'>
                  <Clock className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                  <div className='text-sm space-y-1'>
                    {CLINIC_INFO.hours.map((schedule, index) => (
                      <div key={index}>
                        <span className='text-neutral-500'>
                          {schedule.days}:
                        </span>{' '}
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-neutral-800'>
        <div className='container-custom py-6'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-neutral-500 text-sm'>
              © {currentYear} {CLINIC_INFO.name}. Todos los derechos reservados.
            </p>
            <div className='flex gap-6'>
              <Link
                href='/privacidad'
                className='text-neutral-500 hover:text-white text-sm transition-colors'
              >
                Política de Privacidad
              </Link>
              <Link
                href='/aviso-legal'
                className='text-neutral-500 hover:text-white text-sm transition-colors'
              >
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
