'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Users,
  Lightbulb,
  GraduationCap,
  Activity,
  Flame,
  Zap,
  Calendar,
  Heart
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle, Button, Card } from '@/components/ui'
import { TEAM_MEMBERS, RECEPTION_TEAM, VALUES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Award,
  Users,
  Lightbulb
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

function TeamAvatar({
  member
}: {
  member: { name: string; image: string | null }
}) {
  if (member.image) {
    return (
      <div className='relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-primary-light'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes='144px'
          className='object-cover'
        />
      </div>
    )
  }

  return (
    <div className='w-36 h-36 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center ring-4 ring-primary-light'>
      <span className='text-4xl font-semibold text-primary'>
        {member.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .slice(0, 2)}
      </span>
    </div>
  )
}

export default function SobreNosotrosPage() {
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
              Sobre Nosotros
            </span>
            <h1 className='text-4xl md:text-5xl font-semibold text-neutral-900 mb-6'>
              Conoce a nuestro equipo
            </h1>
            <p className='text-lg text-neutral-600 leading-relaxed'>
              Profesionales comprometidos con tu salud desde 1994.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated'>
                <Image
                  src='/about-clinica.jpg'
                  alt='Nuestra clínica - Clínica Gironés'
                  fill
                  sizes='(min-width: 1024px) 40rem, 100vw'
                  className='object-cover'
                />
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-elevated'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center'>
                    <Calendar className='w-6 h-6 text-primary' />
                  </div>
                  <div>
                    <p className='text-2xl font-bold text-neutral-900'>1994</p>
                    <p className='text-sm text-neutral-500'>Año de fundación</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className='inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3'>
                Nuestra Historia
              </span>
              <h2 className='text-3xl md:text-4xl font-semibold text-neutral-900 mb-6'>
                Más de 30 años cuidando de ti
              </h2>
              <div className='space-y-4 text-neutral-600 leading-relaxed'>
                <p>
                  Nuestra clínica <strong className='font-semibold text-neutral-900'>nació en 1994</strong> con una vocación clara: ofrecer un servicio de podología de calidad basado en un trato cercano, profesional y totalmente personalizado. Bajo la dirección de Pilar Gironés Puñet, el centro ha experimentado una evolución constante, marcada por su trayectoria de más de 15 años como la <strong className='font-semibold text-neutral-900'>podóloga oficial del Valencia CF</strong> del primer equipo, una experiencia que impulsó un enfoque especializado en la podología deportiva y el tratamiento del pie en el ámbito del rendimiento. En 2016, esta trayectoria se reforzó con la incorporación de su hija, Pilar Cerdá Gironés, cuya doble titulación como podóloga y fisioterapeuta permitió expandir los horizontes del negocio hacia la rehabilitación, el tratamiento avanzado de lesiones y la optimización de la técnica de carrera, sin olvidar nunca la importancia de la podología dermatológica, esencial para el cuidado integral de la salud de la piel y las uñas del pie.
                </p>
                <p>
                  Este crecimiento nos llevó a dar un paso natural en 2022, ampliando nuestros servicios con la <strong className='font-semibold text-neutral-900'>incorporación de la fisioterapia</strong> y avanzando hacia un abordaje integral de la salud que hoy incluye áreas fundamentales como <strong className='font-semibold text-neutral-900'>el suelo pélvico, el pilates terapeútico, el ejercicio terapéutico y el tratamiento de lesiones.</strong> Actualmente, nos hemos consolidado como un equipo joven y dinámico, en constante formación y con ganas de seguir creciendo para mejorar la calidad de vida de quienes confían en nosotros. Contamos con un equipo reforzado de profesionales podólogos y fisioterapeutas, incluyendo un especialista más en suelo pélvico, un experto en lesiones musculoesqueléticas con dominio de la ecografía y la terapia invasiva, y personal con doble titulación que aporta una visión global y coordinada a cada caso. A pesar de nuestra evolución y de la incorporación de tecnología avanzada, <strong className='font-semibold text-neutral-900'>nuestro objetivo principal permanece intacto: cuidar de ti con un trato humano y honesto</strong>, donde la experiencia y la innovación se unen para obtener los mejores resultados en tu salud y bienestar.
                </p>
              </div>

              {/* Stats */}
              <div className='mt-8 pt-8 border-t border-neutral-200'>
                <div className='grid grid-cols-3 gap-6'>
                  <div>
                    <p className='text-3xl font-bold text-primary'>+13.000</p>
                    <p className='text-sm text-neutral-500'>Pacientes</p>
                  </div>
                  <div>
                    <p className='text-3xl font-bold text-primary'>+30</p>
                    <p className='text-sm text-neutral-500'>Años de experiencia</p>
                  </div>
                  <div>
                    <p className='text-3xl font-bold text-primary'>5</p>
                    <p className='text-sm text-neutral-500'>Especialistas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className='section-padding bg-neutral-50'>
        <div className='container-custom'>
          <SectionTitle
            subtitle='Nuestro Equipo'
            title='Profesionales a tu servicio'
            description='Un equipo multidisciplinar de podólogos y fisioterapeutas comprometidos con tu salud y bienestar.'
          />

          {/* Primera fila - 3 miembros */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'
          >
            {TEAM_MEMBERS.slice(0, 3).map((member) => (
              <motion.div key={member.name} variants={itemVariants} className='h-full'>
                <Card className='h-full text-center p-8 flex flex-col'>
                  <TeamAvatar member={member} />

                  <h3 className='text-xl font-semibold text-neutral-900 mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-primary font-medium mb-4'>{member.role}</p>
                  <p className='text-neutral-600 text-sm leading-relaxed mb-6'>
                    {member.bio}
                  </p>

                  <div className='mt-auto pt-6 border-t border-neutral-100'>
                    <ul className='space-y-2'>
                      {member.credentials.map((credential, i) => (
                        <li
                          key={i}
                          className='flex items-center justify-center gap-2 text-xs text-neutral-500'
                        >
                          <GraduationCap className='w-3.5 h-3.5 text-primary' />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Segunda fila - 2 miembros centrados */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16'
          >
            {TEAM_MEMBERS.slice(3, 5).map((member) => (
              <motion.div key={member.name} variants={itemVariants} className='h-full'>
                <Card className='h-full text-center p-8 flex flex-col'>
                  <TeamAvatar member={member} />

                  <h3 className='text-xl font-semibold text-neutral-900 mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-primary font-medium mb-4'>{member.role}</p>
                  <p className='text-neutral-600 text-sm leading-relaxed mb-6'>
                    {member.bio}
                  </p>

                  <div className='mt-auto pt-6 border-t border-neutral-100'>
                    <ul className='space-y-2'>
                      {member.credentials.map((credential, i) => (
                        <li
                          key={i}
                          className='flex items-center justify-center gap-2 text-xs text-neutral-500'
                        >
                          <GraduationCap className='w-3.5 h-3.5 text-primary' />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Equipo de recepción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='max-w-4xl mx-auto'
          >
            <Card className='overflow-hidden p-0'>
              <div className='grid md:grid-cols-5 gap-0'>
                <div className='relative md:col-span-2 aspect-square md:aspect-auto md:min-h-[280px]'>
                  <Image
                    src={RECEPTION_TEAM.image}
                    alt={RECEPTION_TEAM.members}
                    fill
                    sizes='(max-width: 768px) 100vw, 40vw'
                    className='object-cover'
                  />
                </div>
                <div className='md:col-span-3 p-8 md:p-10 flex flex-col justify-center'>
                  <div className='flex items-center gap-2 mb-3'>
                    <Heart className='w-5 h-5 text-primary' />
                    <span className='text-primary font-medium text-sm uppercase tracking-wider'>
                      El corazón de la clínica
                    </span>
                  </div>
                  <h3 className='text-2xl font-semibold text-neutral-900 mb-2'>
                    {RECEPTION_TEAM.name}
                  </h3>
                  <p className='text-primary font-medium mb-4'>
                    {RECEPTION_TEAM.members}
                  </p>
                  <p className='text-neutral-600 leading-relaxed'>
                    {RECEPTION_TEAM.bio}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Valores Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <SectionTitle
            subtitle='Nuestros Valores'
            title='Lo que nos define'
            description='Los pilares sobre los que construimos nuestra práctica profesional.'
          />

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-3 gap-8'
          >
            {VALUES.map((value) => {
              const Icon = iconMap[value.icon] || Award
              return (
                <motion.div key={value.title} variants={itemVariants}>
                  <div className='text-center'>
                    <div className='w-20 h-20 bg-primary-light rounded-2xl mx-auto mb-6 flex items-center justify-center'>
                      <Icon className='w-10 h-10 text-primary' />
                    </div>
                    <h3 className='text-xl font-semibold text-neutral-900 mb-3'>
                      {value.title}
                    </h3>
                    <p className='text-neutral-600 leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Instalaciones Section */}
      <section className='section-padding bg-neutral-50'>
        <div className='container-custom'>
          <SectionTitle
            subtitle='Instalaciones'
            title='Equipamiento de última generación'
            description='Contamos con las instalaciones y tecnología más avanzada para ofrecerte el mejor servicio.'
          />

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {[
              {
                icon: Flame,
                title: 'Indiva',
                desc: 'Diatermia para regeneración tisular'
              },
              {
                icon: Zap,
                title: 'Sistema superinductivo',
                desc: 'Estimulación magnética profunda'
              },
              {
                icon: Lightbulb,
                title: 'Láser',
                desc: 'Terapia láser de alta potencia'
              },
              {
                icon: Activity,
                title: 'Ecógrafo',
                desc: 'Diagnóstico ecográfico preciso'
              }
            ].map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Card hover className='h-full text-center py-8'>
                  <div className='w-14 h-14 bg-primary-light rounded-xl mx-auto mb-4 flex items-center justify-center'>
                    <item.icon className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='font-semibold text-neutral-900 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-neutral-600'>{item.desc}</p>
                </Card>
              </motion.div>
            ))}
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
              ¿Quieres conocernos en persona?
            </h2>
            <p className='text-primary-100 text-lg mb-8 max-w-2xl mx-auto'>
              Visita nuestra clínica y descubre por qué somos la elección de
              miles de pacientes.
            </p>
            <Link href='/contacto'>
              <Button
                variant='secondary'
                size='lg'
                className='bg-white text-primary hover:bg-neutral-50'
              >
                Pide tu primera cita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
