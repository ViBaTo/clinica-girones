"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button, Input, Textarea, Card } from "@/components/ui";
import { CLINIC_INFO } from "@/lib/constants";
import { generateWhatsAppLink, generatePhoneLink } from "@/lib/utils";

// Form validation schema
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un email válido"),
  telefono: z.string().optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
              ¿Cómo podemos ayudarte?
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Estamos aquí para atenderte. Contacta con nosotros y te responderemos lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-neutral-600 mb-8">
                  Rellena el formulario y te contactaremos en menos de 24 horas.
                </p>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-800">¡Mensaje enviado!</p>
                      <p className="text-sm text-green-700">
                        Gracias por contactarnos. Te responderemos lo antes posible.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Error al enviar</p>
                      <p className="text-sm text-red-700">
                        Ha ocurrido un error. Por favor, inténtalo de nuevo.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      label="Nombre"
                      placeholder="Tu nombre"
                      error={errors.nombre?.message}
                      required
                      {...register("nombre")}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="tu@email.com"
                      error={errors.email?.message}
                      required
                      {...register("email")}
                    />
                  </div>

                  <Input
                    label="Teléfono"
                    type="tel"
                    placeholder="612 345 678"
                    helperText="Opcional - Te llamaremos si lo prefieres"
                    {...register("telefono")}
                  />

                  <Textarea
                    label="Mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    error={errors.mensaje?.message}
                    required
                    {...register("mensaje")}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick Contact */}
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Contacto directo
                </h3>
                <div className="space-y-4">
                  <a
                    href={generatePhoneLink(CLINIC_INFO.phone)}
                    className="flex items-center gap-4 p-3 bg-primary-light rounded-xl hover:bg-primary-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Llámanos</p>
                      <p className="font-semibold text-neutral-900">{CLINIC_INFO.phone}</p>
                    </div>
                  </a>

                  <a
                    href={generateWhatsAppLink(CLINIC_INFO.whatsapp, "Hola, me gustaría pedir una cita")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">WhatsApp</p>
                      <p className="font-semibold text-neutral-900">{CLINIC_INFO.whatsapp}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="flex items-center gap-4 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-neutral-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <p className="font-semibold text-neutral-900">{CLINIC_INFO.email}</p>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Ubicación
                </h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-700">{CLINIC_INFO.address.street}</p>
                    <p className="text-neutral-700">
                      {CLINIC_INFO.address.neighborhood}, {CLINIC_INFO.address.postalCode} {CLINIC_INFO.address.city}
                    </p>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden bg-neutral-100">
                  <iframe
                    src={CLINIC_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la clínica"
                  />
                </div>
              </Card>

              {/* Hours */}
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horario de atención
                </h3>
                <ul className="space-y-2">
                  {CLINIC_INFO.hours.map((schedule, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0"
                    >
                      <span className="text-neutral-600">{schedule.days}</span>
                      <span className={`font-medium ${schedule.hours === "Cerrado" ? "text-red-500" : "text-neutral-900"}`}>
                        {schedule.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-neutral-600">
              Resolvemos tus dudas más comunes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "¿Necesito cita previa?",
                a: "Sí, trabajamos con cita previa para poder ofrecerte la atención que mereces. Puedes pedir cita por teléfono, WhatsApp o a través del formulario.",
              },
              {
                q: "¿Cuánto dura una consulta?",
                a: "Depende del tratamiento. Una quiropodia básica dura entre 30-45 minutos, mientras que un estudio biomecánico puede durar hasta 60 minutos.",
              },
              {
                q: "¿Aceptáis seguros médicos?",
                a: "Trabajamos principalmente de forma privada, pero podemos facilitarte factura para que la presentes a tu seguro si cubre podología.",
              },
              {
                q: "¿Qué formas de pago aceptáis?",
                a: "Aceptamos pago en efectivo, tarjeta de crédito/débito y Bizum.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-neutral-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
