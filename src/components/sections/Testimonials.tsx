"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Testimonios"
          title="Lo que dicen nuestros pacientes"
          description="La satisfacción de nuestros pacientes es nuestra mayor recompensa."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white rounded-2xl shadow-card p-8 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary-100" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
                  &ldquo;{TESTIMONIALS[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {TESTIMONIALS[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {TESTIMONIALS[currentIndex].name}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-neutral-600 hover:text-primary hover:shadow-card transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  )}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-neutral-600 hover:text-primary hover:shadow-card transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-soft">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">4.9</span> en Google
              <span className="text-neutral-400 mx-2">•</span>
              +150 reseñas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
