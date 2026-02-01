"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui";
import { CLINIC_INFO } from "@/lib/constants";
import { generateWhatsAppLink, generatePhoneLink } from "@/lib/utils";

export function ContactCTA() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-primary-700 to-primary-800 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  ¿Listo para seguir cuidándote?
                </h2>
                <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                  ¡Reserva tu cita hoy mismo y da el primer paso!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={generatePhoneLink(CLINIC_INFO.phone)}>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full sm:w-auto gap-2 bg-white text-primary hover:bg-neutral-50"
                    >
                      <Phone className="w-5 h-5" />
                      {CLINIC_INFO.phone}
                    </Button>
                  </a>
                  <a
                    href={generateWhatsAppLink(CLINIC_INFO.whatsapp, "Hola, me gustaría pedir una cita")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto gap-2 border-white text-white hover:bg-white hover:text-primary"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Location Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Ubicación</h3>
                      <p className="text-primary-100 text-sm">
                        {CLINIC_INFO.address.street}<br />
                        {CLINIC_INFO.address.postalCode} {CLINIC_INFO.address.city}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Horario</h3>
                      <div className="text-primary-100 text-sm space-y-0.5">
                        {CLINIC_INFO.hours.map((schedule, index) => (
                          <p key={index}>
                            <span className="text-white/70">{schedule.days}:</span>{" "}
                            {schedule.hours}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <Link href="/contacto" className="block">
                  <div className="bg-white rounded-xl p-5 group hover:shadow-elevated transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Formulario de contacto
                        </h3>
                        <p className="text-neutral-500 text-sm">
                          Te respondemos en menos de 24h
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <svg
                          className="w-5 h-5 text-primary group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
