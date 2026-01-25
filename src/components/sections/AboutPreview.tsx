"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui";
import { VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Users,
  Lightbulb,
};

export function AboutPreview() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Placeholder for clinic image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-primary-dark font-medium">
                      Nuestro equipo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-elevated"
            >
              <p className="text-4xl font-bold">+15</p>
              <p className="text-primary-100 text-sm">años de experiencia</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
              Tu salud podológica en las mejores manos
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              En Clínica Podológica Gironés combinamos la experiencia de más de 15 años 
              con las técnicas más avanzadas para ofrecer un cuidado integral de tus pies. 
              Nuestro equipo de profesionales está comprometido con tu bienestar.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {VALUES.map((value, index) => {
                const Icon = iconMap[value.icon] || Award;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link href="/sobre-nosotros">
              <Button variant="outline" className="gap-2">
                Conoce nuestro equipo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
