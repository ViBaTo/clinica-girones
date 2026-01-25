"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Footprints, Hand, Heart, Dumbbell } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, SectionTitle, Button } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Footprints,
  Hand,
  Heart,
  Dumbbell,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesPreview() {
  // Show first 4 services
  const previewServices = SERVICES.slice(0, 4);

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Nuestros Servicios"
          title="Cuidamos tu bienestar de forma integral"
          description="Ofrecemos servicios especializados en podología, fisioterapia, suelo pélvico y pilates con las técnicas más avanzadas."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {previewServices.map((service) => {
            const Icon = iconMap[service.icon] || Footprints;
            
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/servicios#${service.id}`}>
                  <Card hover className="h-full group cursor-pointer">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription>{service.shortDescription}</CardDescription>
                    <div className="mt-4 flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Más información
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/servicios">
            <Button variant="outline" className="gap-2">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
