import { Metadata } from "next";
import { CLINIC_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: `Aviso legal de ${CLINIC_INFO.name}. Información sobre el titular del sitio web y condiciones de uso.`,
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
              Aviso Legal
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
            <h2>1. Datos identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 
              de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la 
              Información y del Comercio Electrónico, a continuación se reflejan 
              los siguientes datos:
            </p>
            <p>
              <strong>Denominación social:</strong> {CLINIC_INFO.name}<br />
              <strong>Domicilio:</strong> {CLINIC_INFO.address.street}, {CLINIC_INFO.address.floor}, {CLINIC_INFO.address.postalCode} {CLINIC_INFO.address.city}<br />
              <strong>Email:</strong> {CLINIC_INFO.email}<br />
              <strong>Teléfono:</strong> {CLINIC_INFO.phone}
            </p>

            <h2>2. Objeto</h2>
            <p>
              Este sitio web tiene como finalidad dar a conocer los servicios de 
              podología que ofrece {CLINIC_INFO.name}, así como facilitar 
              información de interés relacionada con el cuidado de los pies.
            </p>

            <h2>3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos de esta web, incluyendo textos, fotografías, 
              gráficos, imágenes, iconos, tecnología, software, así como su diseño 
              gráfico y códigos fuente, constituyen una obra cuya propiedad 
              pertenece a {CLINIC_INFO.name}.
            </p>
            <p>
              Quedan expresamente prohibidas la reproducción, distribución y 
              comunicación pública, incluida su modalidad de puesta a disposición, 
              de la totalidad o parte de los contenidos de esta página web, con 
              fines comerciales, en cualquier soporte y por cualquier medio técnico, 
              sin la autorización de {CLINIC_INFO.name}.
            </p>

            <h2>4. Condiciones de uso</h2>
            <p>
              El usuario se compromete a hacer un uso adecuado de los contenidos 
              y servicios que {CLINIC_INFO.name} ofrece a través de su sitio web, 
              absteniéndose de:
            </p>
            <ul>
              <li>Realizar actividades ilícitas o contrarias a la buena fe</li>
              <li>Difundir contenidos de carácter ofensivo o discriminatorio</li>
              <li>Provocar daños en los sistemas del titular o de terceros</li>
              <li>Utilizar los contenidos con fines publicitarios sin autorización</li>
            </ul>

            <h2>5. Exención de responsabilidad</h2>
            <p>
              {CLINIC_INFO.name} no se hace responsable de:
            </p>
            <ul>
              <li>
                Los daños que pudieran ocasionarse por un uso inadecuado de la web
              </li>
              <li>
                La información contenida en páginas web de terceros a las que se 
                pueda acceder mediante enlaces desde esta web
              </li>
              <li>
                Los fallos técnicos que pudieran impedir el acceso a la web
              </li>
            </ul>
            <p>
              La información contenida en esta web tiene carácter meramente 
              informativo y no sustituye en ningún caso la consulta presencial 
              con un profesional de la podología.
            </p>

            <h2>6. Modificaciones</h2>
            <p>
              {CLINIC_INFO.name} se reserva el derecho de efectuar sin previo 
              aviso las modificaciones que considere oportunas en su portal, 
              pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios 
              que se presten a través de la misma como la forma en la que éstos 
              aparezcan presentados o localizados.
            </p>

            <h2>7. Legislación aplicable y jurisdicción</h2>
            <p>
              La relación entre {CLINIC_INFO.name} y el usuario se regirá por 
              la normativa española vigente. Para la resolución de cualquier 
              controversia las partes se someterán a los Juzgados y Tribunales 
              de Madrid.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
