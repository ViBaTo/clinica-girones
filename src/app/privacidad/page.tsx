import { Metadata } from "next";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${CLINIC_INFO.name}. Información sobre el tratamiento de datos personales.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
              Política de Privacidad
            </h1>
            <p className="text-lg text-neutral-600">
              Última actualización: Enero 2024
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>Identidad:</strong> {CLINIC_INFO.name}<br />
              <strong>Dirección:</strong> {CLINIC_INFO.address.street}, {CLINIC_INFO.address.postalCode} {CLINIC_INFO.address.city}<br />
              <strong>Email:</strong> {CLINIC_INFO.email}<br />
              <strong>Teléfono:</strong> {CLINIC_INFO.phone}
            </p>

            <h2>2. Finalidad del tratamiento de datos</h2>
            <p>
              Los datos personales que nos facilites a través de los formularios de contacto 
              o al solicitar una cita serán tratados con las siguientes finalidades:
            </p>
            <ul>
              <li>Gestionar las citas y consultas solicitadas</li>
              <li>Mantener la historia clínica del paciente</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>Atender consultas y solicitudes de información</li>
            </ul>

            <h2>3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul>
              <li>El consentimiento del interesado</li>
              <li>La ejecución de un contrato de prestación de servicios sanitarios</li>
              <li>El cumplimiento de obligaciones legales aplicables</li>
            </ul>

            <h2>4. Destinatarios</h2>
            <p>
              No se cederán datos a terceros, salvo obligación legal. No realizamos 
              transferencias internacionales de datos.
            </p>

            <h2>5. Conservación de datos</h2>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo 
              necesario para cumplir con la finalidad para la que se recabaron y 
              durante los plazos legalmente establecidos.
            </p>
            <p>
              En el caso de datos de salud, se conservarán según lo establecido en 
              la Ley 41/2002 de autonomía del paciente (mínimo 5 años desde el alta).
            </p>

            <h2>6. Derechos del interesado</h2>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión, 
              limitación, portabilidad y oposición enviando un email a {CLINIC_INFO.email} 
              o por correo postal a nuestra dirección.
            </p>
            <p>
              Asimismo, tiene derecho a presentar una reclamación ante la Agencia 
              Española de Protección de Datos (www.aepd.es).
            </p>

            <h2>7. Medidas de seguridad</h2>
            <p>
              Hemos adoptado las medidas de seguridad técnicas y organizativas 
              necesarias para garantizar la confidencialidad, integridad y 
              disponibilidad de los datos personales tratados.
            </p>

            <h2>8. Cookies</h2>
            <p>
              Esta web utiliza cookies técnicas necesarias para su funcionamiento 
              y cookies analíticas para mejorar la experiencia de navegación. 
              Puedes configurar las cookies en cualquier momento a través de tu navegador.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho a modificar la presente política de privacidad 
              para adaptarla a novedades legislativas o cambios en nuestros servicios.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
