'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionTitle } from '@/components/ui'
import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ITEMS_PER_PAGE = 3
const GAP_PX = 24

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE)

  const next = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
  }

  const prev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  const canGoNext = currentPage < totalPages - 1
  const canGoPrev = currentPage > 0

  // Calcula el desplazamiento: cada página mueve 3 cards (100%)
  const translateX = currentPage * 100

  return (
    <section className='section-padding bg-neutral-50 overflow-hidden'>
      <div className='container-custom'>
        <SectionTitle
          subtitle='Testimonios'
          title='Lo que dicen nuestros pacientes'
          description='La satisfacción de nuestros pacientes es nuestra mayor recompensa.'
        />

        <div className='relative px-8 lg:px-14'>
          {/* Carousel Container */}
          <div className='overflow-hidden'>
            <motion.div
              className='flex'
              animate={{
                x: `-${translateX}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              style={{ gap: `${GAP_PX}px` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className='relative bg-white rounded-2xl shadow-card p-6 overflow-hidden flex flex-col flex-shrink-0'
                  style={{
                    width: `calc(${100 / ITEMS_PER_PAGE}% - ${(GAP_PX * 2) / 3}px)`
                  }}
                >
                  {/* Quote Icon */}
                  <Quote className='absolute top-4 right-4 w-10 h-10 text-primary-100' />

                  {/* Stars */}
                  <div className='flex gap-1 mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className='text-neutral-700 leading-relaxed mb-6 flex-grow text-sm min-h-[120px]'>
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className='flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100'>
                    <div className='w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0'>
                      <span className='text-primary font-semibold text-sm'>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className='font-semibold text-neutral-900 text-sm'>
                        {testimonial.name}
                      </p>
                      <p className='text-xs text-neutral-500'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            disabled={!canGoPrev}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-card flex items-center justify-center transition-all z-10',
              canGoPrev
                ? 'text-neutral-600 hover:text-primary hover:shadow-elevated'
                : 'text-neutral-300 cursor-not-allowed opacity-50'
            )}
            aria-label='Anterior'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>

          <button
            onClick={next}
            disabled={!canGoNext}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-card flex items-center justify-center transition-all z-10',
              canGoNext
                ? 'text-neutral-600 hover:text-primary hover:shadow-elevated'
                : 'text-neutral-300 cursor-not-allowed opacity-50'
            )}
            aria-label='Siguiente'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>

        {/* Progress Dots */}
        <div className='flex items-center justify-center gap-2 mt-8'>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === currentPage
                  ? 'bg-primary w-8'
                  : 'bg-neutral-300 hover:bg-neutral-400 w-2'
              )}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>

        {/* Rating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-4'
        >
          {/* Google Rating */}
          <div className='inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft'>
            <div className='flex gap-0.5'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <span className='text-sm text-neutral-600'>
              <span className='font-semibold text-neutral-900'>4.8</span> en
              Google
              <span className='text-neutral-400 mx-2'>•</span>
              89 reseñas
            </span>
          </div>

          {/* Doctoralia Rating */}
          <div className='inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft'>
            <div className='flex gap-0.5'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <span className='text-sm text-neutral-600'>
              <span className='font-semibold text-neutral-900'>5/5</span> en
              Doctoralia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
