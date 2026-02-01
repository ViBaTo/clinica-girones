// Información de la clínica
export const CLINIC_INFO = {
  name: 'Clínica Gironés',
  slogan: 'Cuidamos tus pies, mejoramos tu vida',
  description:
    'Clínica especializada en el cuidado integral de tu salud, con más de 30 años de experiencia ofreciendo tratamientos personalizados con la última tecnología.',
  phone: '+34 963 601 380',
  whatsapp: '+34 657 982 445',
  email: 'recepcion@clinicagirones.es',
  address: {
    street: "Carrer d'Armando Palacio Valdés, 11",
    floor: 'Bajo Derecha',
    neighborhood: 'El Pla del Real',
    city: 'València',
    postalCode: '46010',
    country: 'España'
  },
  hours: [
    { days: 'Lunes - Jueves', hours: '9:00 - 13:30 / 16:00 - 20:00' },
    { days: 'Viernes', hours: '9:00 - 13:30' }
  ],
  socialMedia: {
    instagram: 'https://www.instagram.com/clinicagirones/'
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Carrer+d'Armando+Palacio+Valdés,+11,+46010+València,+Spain&output=embed"
}

// Navegación principal
export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' }
]

// Servicios de la clínica
export const SERVICES = [
  {
    id: 'podologia',
    title: 'Podología',
    shortDescription:
      'Cuidado integral de tus pies con tratamientos personalizados para prevenir y solucionar molestias.',
    fullDescription:
      'Servicio integral de podología orientado al cuidado y la salud de tus pies, con tratamientos personalizados para prevenir, diagnosticar y solucionar diferentes molestias.',
    benefits: [
      'Estudio biomecánico de la pisada',
      'Plantillas personalizadas',
      'Dermatología del pie'
    ],
    icon: 'Footprints',
    image: '/podologia-hero.jpg'
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    shortDescription:
      'Prevención, tratamiento y recuperación de lesiones para mejorar tu movilidad y bienestar.',
    fullDescription:
      'Servicio integral de fisioterapia orientado a la prevención, tratamiento y recuperación de lesiones, mejorando la movilidad, reduciendo el dolor y favoreciendo el bienestar general.',
    benefits: [
      'Fisioterapia general',
      'Fisioterapia pediátrica',
      'Fisioterapia deportiva',
      'Aparatología avanzada'
    ],
    icon: 'Hand',
    image: '/fisioterapia-hero.jpg'
  },
  {
    id: 'suelo-pelvico',
    title: 'Suelo Pélvico',
    shortDescription:
      'Fisioterapia especializada en disfunciones de la musculatura pélvica para mejorar tu calidad de vida.',
    fullDescription:
      'La fisioterapia de suelo pélvico está especializada en la prevención y tratamiento de disfunciones relacionadas con la musculatura pélvica, ayudando a mejorar la calidad de vida y el bienestar de nuestros pacientes.',
    benefits: [
      'Prevención de disfunciones pélvicas',
      'Tratamiento especializado',
      'Mejora de la calidad de vida',
      'Bienestar integral'
    ],
    icon: 'Heart',
    image: '/suelo-pelvico-hero.jpg'
  },
  {
    id: 'pilates-terapeutico',
    title: 'Pilates Terapéutico',
    shortDescription:
      'Ejercicio supervisado por fisioterapeutas para mejorar postura, movilidad y control corporal.',
    fullDescription:
      'El pilates terapéutico es una modalidad de ejercicio supervisado por fisioterapeutas, orientado a mejorar la postura, la movilidad y el control corporal de forma segura y personalizada.',
    benefits: [
      'Mejora de la postura',
      'Mayor movilidad',
      'Control corporal',
      'Ejercicio seguro y personalizado'
    ],
    icon: 'Dumbbell',
    image:
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop&q=80'
  },
  {
    id: 'ejercicio-terapeutico',
    title: 'Ejercicio Terapéutico',
    shortDescription:
      'Parte fundamental de la fisioterapia para mejorar movilidad, fuerza y prevenir lesiones.',
    fullDescription:
      'El ejercicio terapéutico es una parte fundamental de la fisioterapia para mejorar la movilidad, recuperar la fuerza y prevenir lesiones de forma segura.',
    benefits: [
      'Mejora de la movilidad',
      'Recuperación de la fuerza',
      'Prevención de lesiones',
      'Ejercicio seguro'
    ],
    icon: 'Activity',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80'
  }
]

// Detalles extendidos de servicios para páginas individuales
export const SERVICES_DETAIL: Record<string, ServiceDetail> = {
  podologia: {
    slug: 'podologia',
    title: 'Podología',
    subtitle: 'Cuidado integral para la salud de tus pies',
    heroDescription:
      'Servicio integral de podología orientado al cuidado y la salud de tus pies, con tratamientos personalizados para prevenir, diagnosticar y solucionar diferentes molestias.',
    icon: 'Footprints',
    image: '/podologia-hero.jpg',
    highlights: [
      { label: 'Experiencia', value: '+30 años' },
      { label: 'Pacientes', value: '+13.000' },
      { label: 'Tecnología', value: 'Última generación' }
    ],
    treatments: [
      {
        id: 'estudio-biomecanico',
        title: 'Estudio biomecánico de la pisada',
        icon: 'Activity',
        description:
          'Realizamos un análisis exhaustivo de la pisada y la postura para identificar alteraciones que puedan repercutir en pies, rodillas, caderas o espalda.',
        longDescription:
          'Se trata de un estudio altamente recomendable tanto en pacientes sin sintomatología, como medida preventiva, como en deportistas, niños en etapa de crecimiento y personas con patologías musculoesqueléticas, contribuyendo a optimizar la biomecánica y prevenir futuras lesiones.',
        benefits: [
          'Análisis completo de pisada y postura',
          'Identificación de alteraciones biomecánicas',
          'Prevención de lesiones futuras',
          'Optimización del rendimiento deportivo'
        ],
        recommendedFor: [
          'Deportistas',
          'Niños en crecimiento',
          'Pacientes con patologías musculoesqueléticas',
          'Prevención sin sintomatología'
        ]
      },
      {
        id: 'plantillas-personalizadas',
        title: 'Plantillas personalizadas',
        icon: 'Layers',
        description:
          'Diseñamos plantillas a medida adaptadas a cada paciente, con el objetivo de corregir la pisada, mejorar la estabilidad y aliviar dolores.',
        longDescription:
          'Cada plantilla se fabrica de forma personalizada tras un estudio completo del pie y la pisada del paciente, garantizando la máxima eficacia en la corrección y el confort.',
        benefits: [
          'Corrección de la pisada',
          'Mejora de la estabilidad',
          'Alivio de dolores',
          'Prevención de futuras lesiones'
        ],
        recommendedFor: [
          'Personas con problemas de pisada',
          'Deportistas',
          'Personas con dolor en pies o espalda',
          'Pacientes con deformidades del pie'
        ]
      },
      {
        id: 'dermatologia-pie',
        title: 'Dermatología del pie',
        icon: 'Shield',
        description:
          'Tratamos las principales afecciones dermatológicas que afectan a la piel y las uñas de los pies.',
        longDescription:
          'Ofrecemos tratamientos especializados para las patologías más comunes de la piel y uñas del pie, utilizando técnicas avanzadas y tecnología de última generación.',
        benefits: [
          'Tratamientos especializados',
          'Técnicas mínimamente invasivas',
          'Tecnología láser de alta potencia',
          'Resultados duraderos'
        ],
        subTreatments: [
          {
            id: 'onicocriptosis',
            title: 'Onicocriptosis (uñas encarnadas)',
            description:
              'Alivio del dolor y tratamiento eficaz para evitar infecciones.',
            icon: 'Scissors'
          },
          {
            id: 'papilomas',
            title: 'Papilomas plantares',
            description:
              'Eliminación de verrugas plantares con técnicas específicas.',
            icon: 'Zap'
          },
          {
            id: 'quiropodias',
            title: 'Quiropodias (limpiezas podológicas)',
            description:
              'Eliminación de durezas, callosidades y cuidado general del pie para mantenerlo sano.',
            icon: 'Sparkles'
          }
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Consulta inicial',
        description:
          'Evaluación completa de tu historial y estado actual del pie.'
      },
      {
        step: 2,
        title: 'Diagnóstico',
        description:
          'Análisis detallado para identificar la causa de las molestias.'
      },
      {
        step: 3,
        title: 'Plan de tratamiento',
        description:
          'Diseñamos un tratamiento personalizado según tus necesidades.'
      },
      {
        step: 4,
        title: 'Seguimiento',
        description:
          'Control y ajuste del tratamiento para garantizar los mejores resultados.'
      }
    ],
    faq: [
      {
        question: '¿Cada cuánto debo visitar al podólogo?',
        answer:
          'Recomendamos una revisión anual como mínimo. Si tienes patologías específicas, diabetes o practicas deporte de forma regular, las visitas deberían ser más frecuentes según indicación del especialista.'
      },
      {
        question: '¿Las plantillas personalizadas son para siempre?',
        answer:
          'Depende del uso que se le dé, pero entre 3-5 años. Es importante revisarlas periódicamente y renovarlas cuando sea necesario para mantener su eficacia.'
      },
      {
        question: '¿El tratamiento de uñas encarnadas es doloroso?',
        answer:
          'Utilizamos anestesia local para garantizar que el tratamiento sea completamente indoloro. La recuperación es rápida y las molestias postoperatorias son mínimas.'
      },
      {
        question: '¿Qué incluye una quiropodia o limpieza podológica?',
        answer:
          'Incluye eliminación de durezas y callosidades, corte y limado de uñas, hidratación y revisión general del estado del pie. Es el tratamiento básico de mantenimiento.'
      }
    ],
    relatedServices: ['fisioterapia', 'ejercicio-terapeutico']
  },
  fisioterapia: {
    slug: 'fisioterapia',
    title: 'Fisioterapia',
    subtitle: 'Recupera tu movilidad y bienestar',
    heroDescription:
      'Servicio integral de fisioterapia orientado a la prevención, tratamiento y recuperación de lesiones, mejorando la movilidad, reduciendo el dolor y favoreciendo el bienestar general.',
    icon: 'Hand',
    image: '/fisioterapia-hero.jpg',
    highlights: [
      { label: 'Tecnología', value: 'Avanzada' },
      { label: 'Tratamiento', value: 'Personalizado' },
      { label: 'Atención', value: 'Integral' }
    ],
    treatments: [
      {
        id: 'fisioterapia-general',
        title: 'Fisioterapia general',
        icon: 'Hand',
        description:
          'Tratamos dolencias musculares, articulares y tendinosas, contracturas, y lesiones derivadas de la actividad diaria.',
        longDescription:
          'Tratamos dolencias musculares, articulares y tendinosas, contracturas, y lesiones derivadas de la actividad diaria.',
        benefits: [
          'Alivio del dolor muscular y articular',
          'Tratamiento de contracturas',
          'Recuperación de lesiones cotidianas',
          'Mejora de la movilidad funcional'
        ],
        recommendedFor: [
          'Personas con dolor muscular',
          'Pacientes con contracturas',
          'Lesiones por esfuerzo repetitivo',
          'Dolencias de la vida diaria'
        ]
      },
      {
        id: 'fisioterapia-deportiva',
        title: 'Fisioterapia deportiva',
        icon: 'Activity',
        description:
          'Especializada en la prevención y rehabilitación de lesiones relacionadas con la actividad física y el deporte.',
        longDescription:
          'Especializada en la prevención y rehabilitación de lesiones relacionadas con la actividad física y el deporte. Ayudamos a deportistas a optimizar su rendimiento, acelerar la recuperación y evitar recaídas mediante un tratamiento específico y adaptado.',
        benefits: [
          'Optimización del rendimiento deportivo',
          'Recuperación acelerada de lesiones',
          'Prevención de recaídas',
          'Tratamiento específico y adaptado'
        ],
        recommendedFor: [
          'Deportistas profesionales',
          'Deportistas amateur',
          'Personas activas',
          'Atletas en rehabilitación'
        ]
      },
      {
        id: 'fisioterapia-pediatrica',
        title: 'Fisioterapia pediátrica',
        icon: 'Baby',
        description:
          'Atendemos a niños y adolescentes en etapa de crecimiento, abordando alteraciones posturales, problemas musculares o lesiones propias de la infancia.',
        longDescription:
          'Atendemos a niños y adolescentes en etapa de crecimiento, abordando alteraciones posturales, problemas musculares o lesiones propias de la infancia. Nuestro objetivo es favorecer un desarrollo saludable y prevenir futuras complicaciones.',
        benefits: [
          'Corrección de alteraciones posturales',
          'Tratamiento de problemas musculares infantiles',
          'Desarrollo motor saludable',
          'Prevención de complicaciones futuras'
        ],
        recommendedFor: [
          'Niños con alteraciones posturales',
          'Adolescentes en crecimiento',
          'Lesiones deportivas infantiles',
          'Problemas de desarrollo motor'
        ]
      },
      {
        id: 'aparatologia',
        title: 'Aparatología avanzada',
        icon: 'Cpu',
        description:
          'Combinamos la terapia manual con las técnicas y tecnología más avanzada para recuperar la funcionalidad y mejorar la calidad de vida.',
        longDescription:
          'Disponemos de equipamiento de última generación que complementa nuestros tratamientos manuales, acelerando la recuperación y mejorando los resultados en procesos de rehabilitación.',
        benefits: [
          'Tratamientos no invasivos',
          'Recuperación acelerada',
          'Tecnología de última generación',
          'Resultados optimizados'
        ],
        subTreatments: [
          {
            id: 'indiba',
            title: 'Indiba',
            description:
              'Es una tecnología de radiofrecuencia de última generación aplicada en fisioterapia que estimula la regeneración de los tejidos, mejora la circulación y reduce el dolor y la inflamación. Es un tratamiento avanzado y no invasivo, especialmente indicado en procesos de rehabilitación, ya que acelera la recuperación funcional y favorece una vuelta más rápida y segura a la actividad diaria.',
            badge: 'Radiofrecuencia',
            icon: 'Radio'
          },
          {
            id: 'sistema-superinductivo',
            title: 'Sistema Superinductivo (BTL)',
            description:
              'Es una tecnología avanzada utilizada en fisioterapia que emplea campos electromagnéticos de alta intensidad para aliviar el dolor, reducir la inflamación y estimular la recuperación muscular y articular. Es un tratamiento no invasivo especialmente eficaz en procesos de rehabilitación y recuperación funcional.',
            badge: 'Electromagnético',
            icon: 'Zap'
          },
          {
            id: 'k-laser',
            title: 'K-Láser',
            description:
              'Láser terapéutico de alta potencia para aliviar el dolor, reducir la inflamación y favorecer la regeneración de los tejidos. Tratamiento no invasivo, seguro y confortable, indicado en lesiones agudas y crónicas (tendón, músculo y articulación). Sesiones rápidas que aceleran la recuperación y facilitan la vuelta a la actividad física.',
            badge: 'Láser terapéutico',
            icon: 'Sparkles'
          }
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Valoración inicial',
        description:
          'Evaluación completa de tu estado físico, historial y objetivos de recuperación.'
      },
      {
        step: 2,
        title: 'Diagnóstico funcional',
        description:
          'Identificamos la causa del problema mediante pruebas específicas.'
      },
      {
        step: 3,
        title: 'Plan terapéutico',
        description:
          'Diseñamos un programa de tratamiento personalizado y adaptado a ti.'
      },
      {
        step: 4,
        title: 'Tratamiento y seguimiento',
        description:
          'Aplicamos las técnicas más adecuadas y monitorizamos tu evolución.'
      }
    ],
    faq: [
      {
        question: '¿Cuántas sesiones de fisioterapia necesitaré?',
        answer:
          'El número de sesiones varía según la patología y cada paciente. Tras la valoración inicial, te daremos una estimación del tratamiento. Normalmente, las dolencias agudas requieren menos sesiones que las crónicas.'
      },
      {
        question: '¿Qué diferencia hay entre fisioterapia general y deportiva?',
        answer:
          'La fisioterapia deportiva está especializada en lesiones relacionadas con la actividad física y en optimizar el rendimiento del deportista. Utiliza técnicas específicas y tiene en cuenta las demandas del deporte que practicas.'
      },
      {
        question: '¿La aparatología sustituye a la terapia manual?',
        answer:
          'No, la complementa. La aparatología como Indiba, BTL o K-Láser potencia los efectos de la terapia manual, acelerando la recuperación. Siempre combinamos ambas para obtener los mejores resultados.'
      },
      {
        question:
          '¿A partir de qué edad se puede recibir fisioterapia pediátrica?',
        answer:
          'Atendemos a niños desde los primeros meses de vida hasta la adolescencia. Cada tratamiento se adapta a la edad y necesidades específicas del paciente, utilizando técnicas apropiadas y un enfoque lúdico.'
      },
      {
        question: '¿Es doloroso el tratamiento con aparatología?',
        answer:
          'No, todos nuestros tratamientos con aparatología son indoloros y no invasivos. Podrás sentir una sensación de calor o ligero hormigueo, pero nunca dolor. Son técnicas muy bien toleradas.'
      }
    ],
    relatedServices: [
      'podologia',
      'suelo-pelvico',
      'pilates-terapeutico',
      'ejercicio-terapeutico'
    ]
  },
  'suelo-pelvico': {
    slug: 'suelo-pelvico',
    title: 'Suelo Pélvico',
    subtitle: 'Fisioterapia especializada en salud pélvica',
    heroDescription:
      'La fisioterapia de suelo pélvico está especializada en la prevención y tratamiento de disfunciones relacionadas con la musculatura pélvica, ayudando a mejorar la calidad de vida y el bienestar de nuestros pacientes.',
    icon: 'Heart',
    image: '/suelo-pelvico-hero.jpg',
    highlights: [
      { label: 'Especialización', value: 'Exclusiva' },
      { label: 'Tratamiento', value: 'Personalizado' },
      { label: 'Ambiente', value: 'Confidencial' }
    ],
    treatments: [
      {
        id: 'incontinencia-alteraciones',
        title: 'Incontinencia y alteraciones',
        icon: 'Droplets',
        description:
          'Tratamiento de incontinencia urinaria de esfuerzo, de urgencia y mixta, así como alteraciones ano-rectales y prolapsos genitales.',
        longDescription:
          'Abordamos de forma integral los problemas de incontinencia urinaria y las alteraciones ano-rectales como incontinencia fecal, hemorroides, estreñimiento y prolapsos. También tratamos prolapsos genitales con técnicas especializadas.',
        benefits: [
          'Recuperación del control vesical',
          'Tratamiento de alteraciones ano-rectales',
          'Abordaje de prolapsos',
          'Mejora de la calidad de vida'
        ],
        subTreatments: [
          {
            id: 'incontinencia-urinaria',
            title: 'Incontinencia urinaria',
            description:
              'Tratamiento de incontinencia de esfuerzo, de urgencia y mixta mediante técnicas de fortalecimiento y reeducación.',
            icon: 'Droplets'
          },
          {
            id: 'alteraciones-anorectales',
            title: 'Alteraciones ano-rectales',
            description:
              'Incontinencia fecal, hemorroides, estreñimiento y prolapsos rectales.',
            icon: 'Shield'
          },
          {
            id: 'prolapsos-genitales',
            title: 'Prolapsos genitales',
            description:
              'Tratamiento conservador y preventivo de prolapsos de órganos pélvicos.',
            icon: 'Heart'
          }
        ]
      },
      {
        id: 'embarazo-postparto',
        title: 'Embarazo y post-parto',
        icon: 'Baby',
        description:
          'Atención especializada durante el embarazo y recuperación completa tras el parto, incluyendo tratamiento de cicatrices.',
        longDescription:
          'Acompañamos a la mujer durante el embarazo preparando el suelo pélvico para el parto, y en el post-parto ayudamos a la recuperación completa. Incluye tratamiento de cicatrices (episiotomía, cesárea) y recuperación de tejidos.',
        benefits: [
          'Preparación al parto',
          'Recuperación post-parto',
          'Tratamiento de cicatrices',
          'Recuperación de tejidos'
        ],
        recommendedFor: [
          'Embarazadas',
          'Post-parto vaginal',
          'Post-cesárea',
          'Cicatrices de episiotomía'
        ]
      },
      {
        id: 'fisiosexologia',
        title: 'Fisiosexología',
        icon: 'HeartPulse',
        description:
          'Abordamos disfunciones sexuales relacionadas con el suelo pélvico para mejorar tu bienestar íntimo.',
        longDescription:
          'Tratamiento especializado de disfunciones sexuales como dispareunia (superficial y profunda), vaginismo, vulvodinia, anorgasmia y disorgasmia. Trabajamos de forma integral para recuperar una vida sexual plena y sin dolor.',
        benefits: [
          'Tratamiento del dolor sexual',
          'Abordaje del vaginismo',
          'Mejora de la respuesta sexual',
          'Recuperación de la intimidad'
        ],
        subTreatments: [
          {
            id: 'dispareunia',
            title: 'Dispareunia',
            description:
              'Tratamiento del dolor durante las relaciones sexuales, tanto superficial como profunda.',
            icon: 'Heart'
          },
          {
            id: 'vaginismo',
            title: 'Vaginismo',
            description:
              'Abordaje de la contracción involuntaria que dificulta o impide la penetración.',
            icon: 'Shield'
          },
          {
            id: 'vulvodinia',
            title: 'Vulvodinia',
            description:
              'Tratamiento del dolor vulvar crónico sin causa aparente.',
            icon: 'Sparkles'
          },
          {
            id: 'anorgasmia',
            title: 'Anorgasmia y disorgasmia',
            description:
              'Abordaje de las dificultades para alcanzar el orgasmo o alteraciones en el mismo.',
            icon: 'Activity'
          }
        ]
      },
      {
        id: 'dolor-pelvico',
        title: 'Dolor pélvico',
        icon: 'AlertCircle',
        description:
          'Tratamos diferentes patologías asociadas al dolor pélvico, tanto agudo como crónico.',
        longDescription:
          'Abordaje integral del dolor pélvico en todas sus formas: dismenorrea (dolor menstrual), endometriosis y dolor pélvico persistente. Utilizamos técnicas manuales, educación terapéutica y ejercicio específico.',
        benefits: [
          'Alivio del dolor menstrual',
          'Tratamiento de endometriosis',
          'Abordaje del dolor crónico',
          'Mejora de la calidad de vida'
        ],
        subTreatments: [
          {
            id: 'dismenorrea',
            title: 'Dismenorrea',
            description:
              'Tratamiento del dolor menstrual intenso mediante técnicas específicas.',
            icon: 'Activity'
          },
          {
            id: 'endometriosis',
            title: 'Endometriosis',
            description:
              'Abordaje fisioterapéutico complementario para el manejo del dolor.',
            icon: 'Heart'
          },
          {
            id: 'dolor-persistente',
            title: 'Dolor pélvico persistente',
            description:
              'Tratamiento integral del dolor crónico de la región pélvica.',
            icon: 'Shield'
          }
        ]
      },
      {
        id: 'postquirurgico',
        title: 'Acompañamiento post-quirúrgico',
        icon: 'Stethoscope',
        description:
          'Rehabilitación especializada tras cirugías ginecológicas, urológicas o abdominales.',
        longDescription:
          'Ofrecemos rehabilitación y tratamiento especializado tras cirugías ginecológicas, urológicas o abdominales para favorecer una recuperación completa. Trabajamos la cicatrización, el fortalecimiento muscular y la recuperación funcional.',
        benefits: [
          'Recuperación post-quirúrgica',
          'Tratamiento de cicatrices',
          'Fortalecimiento muscular',
          'Recuperación funcional completa'
        ],
        recommendedFor: [
          'Cirugía ginecológica',
          'Cirugía urológica',
          'Cirugía abdominal',
          'Prostatectomía'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Entrevista inicial',
        description:
          'Conversación confidencial sobre tu historia clínica y síntomas.'
      },
      {
        step: 2,
        title: 'Valoración física',
        description:
          'Evaluación del estado del suelo pélvico y musculatura asociada.'
      },
      {
        step: 3,
        title: 'Plan personalizado',
        description:
          'Diseño de un programa de tratamiento adaptado a tus necesidades.'
      },
      {
        step: 4,
        title: 'Tratamiento y seguimiento',
        description:
          'Sesiones de tratamiento con evaluación continua de tu progreso.'
      }
    ],
    faq: [
      {
        question: '¿Es normal tener pérdidas de orina después del parto?',
        answer:
          'Es frecuente pero no debe considerarse normal ni inevitable. Con el tratamiento adecuado, la mayoría de casos se resuelven completamente.'
      },
      {
        question: '¿Cuándo debo empezar la rehabilitación postparto?',
        answer:
          'Recomendamos una valoración inicial a partir de las 6-8 semanas postparto. Sin embargo, cada caso es diferente y tu matrona o ginecólogo pueden orientarte.'
      },
      {
        question: '¿Qué es la fisiosexología?',
        answer:
          'Es la especialidad de la fisioterapia que aborda las disfunciones sexuales relacionadas con el suelo pélvico, como el dolor durante las relaciones, el vaginismo o la vulvodinia. Trabajamos para recuperar una vida sexual plena y sin dolor.'
      },
      {
        question:
          '¿Los hombres también pueden tener problemas de suelo pélvico?',
        answer:
          'Sí, los hombres también pueden sufrir disfunciones del suelo pélvico, especialmente tras cirugías de próstata. Ofrecemos tratamiento especializado para ellos.'
      },
      {
        question: '¿Las sesiones son incómodas?',
        answer:
          'Trabajamos en un ambiente de máxima confidencialidad y respeto. Las técnicas se explican detalladamente y se realizan con tu consentimiento y comodidad.'
      }
    ],
    relatedServices: [
      'fisioterapia',
      'pilates-terapeutico',
      'ejercicio-terapeutico'
    ]
  },
  'pilates-terapeutico': {
    slug: 'pilates-terapeutico',
    title: 'Pilates Terapéutico',
    subtitle: 'Ejercicio clínico supervisado por fisioterapeutas',
    heroDescription:
      'El pilates terapéutico es una modalidad de ejercicio clínico y funcional, supervisada por fisioterapeutas, que se adapta a las necesidades de cada persona tras una valoración previa. Su objetivo es mejorar la postura, la movilidad y el control del movimiento de forma segura, progresiva y personalizada.',
    icon: 'Dumbbell',
    image:
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop&q=80',
    highlights: [
      { label: 'Supervisión', value: 'Fisioterapeutas' },
      { label: 'Programa', value: 'Personalizado' },
      { label: 'Enfoque', value: 'Clínico' }
    ],
    treatments: [
      {
        id: 'dolor-espalda',
        title: 'Dolor de espalda',
        icon: 'Activity',
        description:
          'Tratamiento de lumbalgia, cervicalgia, dorsalgia, episodios recurrentes de contracturas, ciática y dolor irradiado de origen mecánico.',
        longDescription:
          'A través del trabajo de respiración, estabilidad lumbopélvica, fuerza de la musculatura profunda y corrección de patrones de movimiento, ayudamos a reducir el dolor, recuperar la función y prevenir recaídas.',
        benefits: [
          'Reducción del dolor',
          'Mejora de la estabilidad lumbopélvica',
          'Fortalecimiento musculatura profunda',
          'Prevención de recaídas'
        ],
        recommendedFor: [
          'Lumbalgia',
          'Cervicalgia',
          'Dorsalgia',
          'Ciática mecánica'
        ]
      },
      {
        id: 'alteraciones-posturales',
        title: 'Alteraciones posturales',
        icon: 'User',
        description:
          'Corrección de hipercifosis, hiperlordosis, escoliosis leve-moderada, dolor por malas posturas, rigidez y desequilibrios musculares.',
        longDescription:
          'Trabajamos la corrección postural mediante ejercicios específicos que mejoran la alineación corporal, reducen la rigidez y equilibran la musculatura para prevenir molestias.',
        benefits: [
          'Corrección postural',
          'Reducción de rigidez',
          'Equilibrio muscular',
          'Prevención de dolor'
        ],
        recommendedFor: [
          'Hipercifosis',
          'Hiperlordosis',
          'Escoliosis leve-moderada',
          'Dolor por malas posturas'
        ]
      },
      {
        id: 'patologia-hombro-cuello',
        title: 'Patología de hombro y cuello',
        icon: 'Shield',
        description:
          'Tratamiento de tendinopatías del manguito rotador, síndrome subacromial, rigidez, molestias por sobreuso y tensión cervicodorsal.',
        longDescription:
          'Abordamos las patologías de hombro y cuello mediante ejercicios que mejoran la movilidad, fortalecen la musculatura estabilizadora y reducen la tensión acumulada.',
        benefits: [
          'Mejora de la movilidad',
          'Fortalecimiento estabilizadores',
          'Reducción de la tensión',
          'Prevención de lesiones'
        ],
        recommendedFor: [
          'Tendinopatías manguito rotador',
          'Síndrome subacromial',
          'Tensión cervicodorsal',
          'Rigidez de hombro'
        ]
      },
      {
        id: 'lesiones-miembro-inferior',
        title: 'Lesiones de cadera, rodilla y tobillo',
        icon: 'Footprints',
        description:
          'Dolor femoropatelar, tendinopatías (rotuliana, aquiles), inestabilidad, esguinces de tobillo, sobrecargas y molestias al correr o entrenar.',
        longDescription:
          'Programa específico para lesiones del miembro inferior que mejora la estabilidad, fortalece la musculatura y permite una vuelta segura a la actividad física.',
        benefits: [
          'Mejora de la estabilidad',
          'Fortalecimiento muscular',
          'Recuperación funcional',
          'Vuelta segura al deporte'
        ],
        recommendedFor: [
          'Dolor femoropatelar',
          'Tendinopatía rotuliana/aquiles',
          'Esguinces de tobillo',
          'Sobrecargas deportivas'
        ]
      },
      {
        id: 'tendinopatias-sobreuso',
        title: 'Tendinopatías y lesiones por sobreuso',
        icon: 'Zap',
        description:
          'Epicondilalgia (codo de tenista), fascitis plantar, periostitis, sobrecargas musculares y molestias asociadas a movimientos repetidos.',
        longDescription:
          'Tratamiento de lesiones por sobreuso mediante ejercicios progresivos que permiten la recuperación del tendón y la vuelta a la actividad sin recaídas.',
        benefits: [
          'Recuperación tendinosa',
          'Reducción del dolor',
          'Readaptación progresiva',
          'Prevención de recaídas'
        ],
        recommendedFor: [
          'Epicondilalgia',
          'Fascitis plantar',
          'Periostitis',
          'Sobrecargas musculares'
        ]
      },
      {
        id: 'rehabilitacion-postoperatorio',
        title: 'Rehabilitación y postoperatorios',
        icon: 'Stethoscope',
        description:
          'Recuperación tras cirugía, inmovilización o periodos de inactividad, mejorando fuerza, movilidad y confianza en el movimiento.',
        longDescription:
          'Programa guiado y progresivo para recuperar la función tras cirugías o periodos de inactividad, trabajando la fuerza, movilidad y el control motor de forma segura.',
        benefits: [
          'Recuperación de fuerza',
          'Mejora de movilidad',
          'Confianza en el movimiento',
          'Progresión segura'
        ],
        recommendedFor: [
          'Postoperatorios',
          'Tras inmovilización',
          'Periodos de inactividad',
          'Recuperación funcional'
        ]
      },
      {
        id: 'dolor-cronico',
        title: 'Dolor crónico y síndrome miofascial',
        icon: 'HeartPulse',
        description:
          'Dolor persistente, rigidez, pérdida de condición física, fatiga y miedo al movimiento.',
        longDescription:
          'Abordaje del dolor crónico mediante ejercicio terapéutico progresivo que ayuda a recuperar la confianza en el movimiento, mejorar la condición física y reducir el dolor.',
        benefits: [
          'Reducción del dolor',
          'Mejora condición física',
          'Superación miedo al movimiento',
          'Recuperación funcional'
        ],
        recommendedFor: [
          'Dolor crónico',
          'Síndrome miofascial',
          'Fatiga muscular',
          'Miedo al movimiento'
        ]
      },
      {
        id: 'suelo-pelvico-postparto',
        title: 'Suelo pélvico y etapa postparto',
        icon: 'Baby',
        description:
          'Reeducación del control abdominal profundo, respiración, estabilidad y mejora de la postura en el día a día.',
        longDescription:
          'Programa específico para la recuperación postparto que trabaja el control abdominal profundo, la respiración y la estabilidad lumbopélvica de forma progresiva y segura.',
        benefits: [
          'Reeducación abdominal',
          'Mejora de la respiración',
          'Estabilidad lumbopélvica',
          'Recuperación postural'
        ],
        recommendedFor: [
          'Postparto',
          'Diástasis abdominal',
          'Debilidad suelo pélvico',
          'Recuperación postural'
        ]
      },
      {
        id: 'hipermovilidad',
        title: 'Hipermovilidad y falta de estabilidad',
        icon: 'Target',
        description:
          'Refuerzo del control motor y de la musculatura estabilizadora para mejorar seguridad y rendimiento.',
        longDescription:
          'Programa enfocado en mejorar el control motor y fortalecer la musculatura estabilizadora en personas con hiperlaxitud o falta de estabilidad articular.',
        benefits: [
          'Mejora del control motor',
          'Fortalecimiento estabilizadores',
          'Mayor seguridad articular',
          'Mejora del rendimiento'
        ],
        recommendedFor: [
          'Hiperlaxitud',
          'Inestabilidad articular',
          'Falta de control motor',
          'Prevención de lesiones'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Valoración inicial',
        description:
          'Evaluación completa de tu estado físico, objetivos y posibles limitaciones.'
      },
      {
        step: 2,
        title: 'Programa personalizado',
        description: 'Diseño de un plan adaptado a tus necesidades específicas.'
      },
      {
        step: 3,
        title: 'Sesiones supervisadas',
        description:
          'Ejercicio guiado con corrección individual y adaptación continua.'
      },
      {
        step: 4,
        title: 'Progresión y autonomía',
        description:
          'Avance gradual hacia la autonomía en el movimiento y la actividad.'
      }
    ],
    faq: [
      {
        question:
          '¿Qué diferencia hay entre pilates terapéutico y pilates convencional?',
        answer:
          'El pilates terapéutico no es una clase estándar: es un programa guiado y progresivo, supervisado por fisioterapeutas, diseñado para que vuelvas a moverte con calidad. Se adapta a patologías específicas y busca una mejora real de la función.'
      },
      {
        question: '¿Para qué patologías está indicado?',
        answer:
          'Está especialmente indicado en dolor de espalda, alteraciones posturales, patologías de hombro y cuello, lesiones de miembro inferior, tendinopatías, rehabilitación postoperatoria, dolor crónico, suelo pélvico postparto e hipermovilidad.'
      },
      {
        question: '¿Necesito experiencia previa en pilates?',
        answer:
          'No, cada programa se adapta a tu nivel y situación. Los principiantes aprenden las bases y progresan gradualmente de forma segura bajo supervisión del fisioterapeuta.'
      },
      {
        question: '¿Cuál es el objetivo del pilates terapéutico?',
        answer:
          'Buscamos que ganes fuerza y estabilidad sin sobrecargar, mejores tu movilidad y postura, y recuperes autonomía en tus actividades diarias y deportivas. El resultado es una reducción del dolor y prevención de lesiones a largo plazo.'
      },
      {
        question: '¿Puedo hacer pilates si tengo dolor o una lesión?',
        answer:
          'Sí, precisamente está indicado para estos casos. El fisioterapeuta adaptará los ejercicios a tu situación, trabajando de forma progresiva para recuperar la función sin generar sobrecarga.'
      }
    ],
    relatedServices: ['fisioterapia', 'ejercicio-terapeutico', 'suelo-pelvico']
  },
  'ejercicio-terapeutico': {
    slug: 'ejercicio-terapeutico',
    title: 'Ejercicio Terapéutico',
    subtitle: 'Programa de movimiento planificado y personalizado',
    heroDescription:
      'El ejercicio terapéutico es una parte fundamental de la fisioterapia para mejorar la movilidad, recuperar la fuerza y prevenir lesiones de forma segura. En nuestra clínica, los programas son diseñados y supervisados por fisioterapeutas, adaptándose a las necesidades de cada paciente, independientemente de su edad o condición física. Las sesiones se realizan en grupos reducidos de máximo 4 personas, organizados tras una valoración previa para que los pacientes compartan un nivel similar de edad, condición física y objetivos terapéuticos, garantizando así un trabajo eficaz y personalizado.',
    icon: 'Activity',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&q=80',
    highlights: [
      { label: 'Supervisión', value: 'Fisioterapeutas' },
      { label: 'Programa', value: 'Personalizado' },
      { label: 'Enfoque', value: 'Progresivo' }
    ],
    treatments: [
      {
        id: 'dolor-espalda-cuello',
        title: 'Dolor de espalda y cuello',
        icon: 'Activity',
        description:
          'Tratamiento de lumbalgia, cervicalgia, dorsalgia, dolor irradiado de origen mecánico, rigidez y episodios recurrentes.',
        longDescription:
          'Programa de ejercicios adaptado a cada fase (aguda, subaguda o crónica) que combina trabajo de fuerza, estabilidad, movilidad y reeducación de patrones de movimiento para reducir el dolor y prevenir recaídas.',
        benefits: [
          'Reducción del dolor',
          'Mejora de la movilidad',
          'Prevención de recaídas',
          'Recuperación funcional'
        ],
        recommendedFor: [
          'Lumbalgia',
          'Cervicalgia',
          'Dorsalgia',
          'Episodios recurrentes'
        ]
      },
      {
        id: 'lesiones-musculares',
        title: 'Lesiones musculares',
        icon: 'Zap',
        description:
          'Sobrecargas, contracturas, roturas fibrilares leves-moderadas y readaptación tras parón.',
        longDescription:
          'Programa progresivo de ejercicios para recuperar la función muscular tras lesiones, trabajando la fuerza, flexibilidad y tolerancia a la carga de forma segura.',
        benefits: [
          'Recuperación muscular',
          'Readaptación progresiva',
          'Prevención de recaídas',
          'Vuelta segura a la actividad'
        ],
        recommendedFor: [
          'Sobrecargas musculares',
          'Contracturas',
          'Roturas fibrilares',
          'Readaptación tras parón'
        ]
      },
      {
        id: 'tendinopatias',
        title: 'Tendinopatías',
        icon: 'Target',
        description:
          'Tendinopatía rotuliana, aquiles, glútea, manguito rotador, epicondilalgia (codo de tenista) y molestias por sobreuso.',
        longDescription:
          'Programa de ejercicio específico para la recuperación tendinosa, con cargas progresivas que permiten la regeneración del tendón y la vuelta a la actividad sin recaídas.',
        benefits: [
          'Recuperación tendinosa',
          'Carga progresiva',
          'Reducción del dolor',
          'Prevención de recaídas'
        ],
        recommendedFor: [
          'Tendinopatía rotuliana',
          'Tendinopatía aquiles',
          'Epicondilalgia',
          'Manguito rotador'
        ]
      },
      {
        id: 'lesiones-articulares',
        title: 'Lesiones articulares',
        icon: 'Shield',
        description:
          'Esguinces (tobillo/rodilla), inestabilidad, molestias de cadera, rodilla u hombro, y limitaciones de movilidad.',
        longDescription:
          'Programa de estabilidad, propiocepción y fortalecimiento para recuperar la función articular y prevenir nuevas lesiones.',
        benefits: [
          'Recuperación de estabilidad',
          'Mejora propioceptiva',
          'Fortalecimiento periarticular',
          'Vuelta segura al deporte'
        ],
        recommendedFor: [
          'Esguinces tobillo/rodilla',
          'Inestabilidad articular',
          'Molestias de cadera/hombro',
          'Limitaciones de movilidad'
        ]
      },
      {
        id: 'recuperacion-postoperatoria',
        title: 'Recuperación postoperatoria',
        icon: 'Stethoscope',
        description:
          'Recuperación de fuerza, rango articular y función tras cirugías o periodos de reposo e inmovilización.',
        longDescription:
          'Programa guiado y progresivo para recuperar la función tras cirugías o periodos de inactividad, trabajando la fuerza, movilidad y control motor de forma segura según indicación profesional.',
        benefits: [
          'Recuperación de fuerza',
          'Mejora del rango articular',
          'Recuperación funcional',
          'Progresión segura'
        ],
        recommendedFor: [
          'Postoperatorios',
          'Postinmovilización',
          'Periodos de reposo',
          'Recuperación funcional'
        ]
      },
      {
        id: 'artrosis-dolor-articular',
        title: 'Artrosis y dolor articular',
        icon: 'Heart',
        description:
          'Mejora de la movilidad, fuerza y tolerancia a la carga para reducir dolor y mejorar la función en artrosis.',
        longDescription:
          'Programa de ejercicio adaptado que mejora la capacidad funcional, reduce el dolor y aumenta la tolerancia a las actividades diarias en pacientes con artrosis.',
        benefits: [
          'Reducción del dolor',
          'Mejora de la movilidad',
          'Mayor tolerancia a la carga',
          'Mejora funcional'
        ],
        recommendedFor: [
          'Artrosis de rodilla',
          'Artrosis de cadera',
          'Dolor articular crónico',
          'Limitación funcional'
        ]
      },
      {
        id: 'dolor-cronico',
        title: 'Dolor crónico',
        icon: 'HeartPulse',
        description:
          'Dolor persistente, síndrome miofascial, desacondicionamiento físico y miedo al movimiento.',
        longDescription:
          'Abordaje del dolor crónico mediante ejercicio terapéutico progresivo que ayuda a recuperar la confianza en el movimiento, mejorar la condición física y reducir el dolor.',
        benefits: [
          'Reducción del dolor',
          'Mejora condición física',
          'Superación miedo al movimiento',
          'Recuperación funcional'
        ],
        recommendedFor: [
          'Dolor persistente',
          'Síndrome miofascial',
          'Desacondicionamiento',
          'Miedo al movimiento'
        ]
      },
      {
        id: 'control-motor-postural',
        title: 'Alteraciones posturales y control motor',
        icon: 'User',
        description:
          'Desequilibrios musculares, patrones de movimiento ineficientes y prevención de recaídas.',
        longDescription:
          'Programa enfocado en corregir patrones de movimiento disfuncionales, equilibrar la musculatura y mejorar el control motor para prevenir lesiones y recaídas.',
        benefits: [
          'Corrección de patrones',
          'Equilibrio muscular',
          'Mejora control motor',
          'Prevención de recaídas'
        ],
        recommendedFor: [
          'Desequilibrios musculares',
          'Patrones ineficientes',
          'Lesiones recurrentes',
          'Prevención'
        ]
      },
      {
        id: 'prevencion-rendimiento',
        title: 'Prevención de lesiones y rendimiento',
        icon: 'Trophy',
        description:
          'Especialmente indicado en deportistas o personas activas que buscan volver a entrenar con seguridad.',
        longDescription:
          'Programa de ejercicio diseñado para mejorar el rendimiento deportivo, prevenir lesiones y garantizar una vuelta segura al entrenamiento tras periodos de inactividad o lesión.',
        benefits: [
          'Prevención de lesiones',
          'Mejora del rendimiento',
          'Vuelta segura al entreno',
          'Optimización física'
        ],
        recommendedFor: [
          'Deportistas',
          'Personas activas',
          'Prevención de lesiones',
          'Mejora del rendimiento'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Valoración clínica',
        description:
          'Evaluación completa de tu estado físico, limitaciones y objetivos.'
      },
      {
        step: 2,
        title: 'Diseño del programa',
        description:
          'Creación de un plan de ejercicios personalizado según tu fase y necesidades.'
      },
      {
        step: 3,
        title: 'Sesiones guiadas',
        description:
          'Entrenamiento supervisado con corrección técnica y adaptación continua.'
      },
      {
        step: 4,
        title: 'Progresión y autonomía',
        description:
          'Avance gradual hacia la autonomía para mantener resultados a largo plazo.'
      }
    ],
    faq: [
      {
        question: '¿En qué se diferencia del entrenamiento en un gimnasio?',
        answer:
          'El ejercicio terapéutico es un programa planificado y personalizado, prescrito por fisioterapeutas tras una valoración clínica. No se trata de "hacer ejercicio" sin más, sino de entrenar de forma segura aquello que tu cuerpo necesita.'
      },
      {
        question: '¿Para qué patologías está indicado?',
        answer:
          'Está indicado en dolor de espalda y cuello, lesiones musculares y tendinosas, lesiones articulares, recuperación postoperatoria, artrosis, dolor crónico, alteraciones posturales y prevención de lesiones en deportistas.'
      },
      {
        question: '¿Puedo hacer ejercicio terapéutico si tengo dolor?',
        answer:
          'Sí, de hecho es una de las principales indicaciones. Los ejercicios se adaptan a cada fase (aguda, subaguda o crónica) y se seleccionan para reducir el dolor sin agravar tu situación.'
      },
      {
        question: '¿Me darán ejercicios para hacer en casa?',
        answer:
          'Sí, parte fundamental del tratamiento es la pauta de ejercicios para realizar de forma autónoma. El objetivo es que vuelvas a tu vida con más fuerza y mejores herramientas para cuidarte a largo plazo.'
      },
      {
        question: '¿Cuál es el objetivo final del ejercicio terapéutico?',
        answer:
          'Que vuelvas a tu vida y a tu deporte con menos dolor, más fuerza y mejores herramientas para cuidarte. Los ejercicios son la base para recuperar y mantener resultados: mejor tolerancia a la carga, más control y menos riesgo de recaer.'
      }
    ],
    relatedServices: ['fisioterapia', 'pilates-terapeutico', 'podologia']
  }
}

// Tipo para los detalles de servicio
export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  heroDescription: string
  icon: string
  image: string
  highlights: { label: string; value: string }[]
  treatments: Treatment[]
  process: ProcessStep[]
  faq: FAQ[]
  relatedServices: string[]
}

export interface Treatment {
  id: string
  title: string
  icon: string
  description: string
  longDescription: string
  benefits: string[]
  recommendedFor?: string[]
  subTreatments?: SubTreatment[]
}

export interface SubTreatment {
  id: string
  title: string
  description: string
  icon: string
  badge?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

// Equipo profesional
export const TEAM_MEMBERS = [
  {
    name: 'Dra. Pilar Gironés Puñet',
    role: 'Directora y Podóloga',
    bio: 'Fundadora y directora de la clínica con más de 30 años de experiencia en el sector. Pionera en tratamientos podológicos avanzados y comprometida con la formación continua y la excelencia en el cuidado del paciente.',
    image: '/images/team/pilar-girones.jpg',
    credentials: [
      'Grado en Podología',
      'Directora de Clínica Gironés',
      'Más de 30 años de experiencia'
    ]
  },
  {
    name: 'Pilar Cerdá Gironés',
    role: 'Podóloga y Fisioterapeuta',
    bio: 'Profesional con doble titulación en podología y fisioterapia, ofreciendo una visión integral del paciente. Más de 6 años de experiencia combinando ambas disciplinas para un tratamiento completo y personalizado.',
    image: '/images/team/pilar-cerda.jpg',
    credentials: [
      'Grado en Podología',
      'Grado en Fisioterapia',
      'Más de 6 años de experiencia'
    ]
  },
  {
    name: 'Alba Romero Alifa',
    role: 'Podóloga',
    bio: 'Podóloga con más de 4 años de experiencia dedicada al cuidado integral del pie. Comprometida con la atención personalizada y el bienestar de cada paciente.',
    image: '/images/team/alba-romero.jpg',
    credentials: [
      'Grado en Podología',
      'Más de 4 años de experiencia'
    ]
  },
  {
    name: 'Elena Díaz Comes',
    role: 'Fisioterapeuta - Suelo Pélvico',
    bio: 'Fisioterapeuta especializada en suelo pélvico con más de 10 años de experiencia. Experta en el tratamiento de disfunciones del suelo pélvico, rehabilitación postparto y salud íntima femenina y masculina.',
    image: '/images/team/elena-diaz.jpg',
    credentials: [
      'Grado en Fisioterapia',
      'Especialista en Suelo Pélvico',
      'Más de 10 años de experiencia'
    ]
  },
  {
    name: 'Próximamente',
    role: 'Nuevo/a especialista',
    bio: 'Estamos ampliando nuestro equipo para seguir ofreciendo la mejor atención. Pronto contaremos con un nuevo profesional que se sumará a nuestro compromiso con tu salud.',
    image: '/images/team/placeholder.jpg',
    credentials: [
      'Información próximamente'
    ]
  }
]

// Valores de la clínica
export const VALUES = [
  {
    title: 'Profesionalidad',
    description:
      'Formación continua y aplicación de las técnicas más avanzadas para ofrecer el mejor cuidado.',
    icon: 'Award'
  },
  {
    title: 'Cercanía',
    description:
      'Trato personalizado y cercano. Escuchamos a cada paciente para atender sus necesidades personales.',
    icon: 'Users'
  },
  {
    title: 'Innovación',
    description:
      'Incorporamos las últimas tecnologías y tratamientos para garantizar resultados óptimos.',
    icon: 'Lightbulb'
  }
]

// Testimonios de pacientes
export const TESTIMONIALS = [
  {
    name: 'Mari Mar Rosado',
    role: 'Paciente',
    content:
      'Mi hijo acudió para eliminar una verruga plantar que llevaba arrastrando varios años y varios podólogos y siempre volvía a aparecer. Por fin le han dado el alta. Tras varios meses de tratamiento está eliminada y ha quedado encantado con el trato recibido y el interés mostrado en todo momento por las doctoras. Sin duda volverá si vuelve a necesitar algún servicio.',
    rating: 5,
    image: '/images/testimonials/marimar.jpg'
  },
  {
    name: 'Carolina Llobet Roig',
    role: 'Paciente',
    content:
      'Encantadísima con el trato. Llevaba mucho tiempo con una tendinitis de los peroneos, fui a esta clínica gracias a una amiga que me la recomendó y no puedo estar más agradecida. Desde el momento en que llegué, el ambiente fue muy profesional y acogedor. Me realizó unas plantillas hechas a medida después de los resultados del estudio de la pisada que me hizo detalladamente y la mejoría fue alucinante.',
    rating: 5,
    image: '/images/testimonials/carolina.jpg'
  },
  {
    name: 'Ian',
    role: 'Paciente',
    content:
      'Estoy muy contento con el trato recibido por todo el equipo de esta clínica. Me han cambiado totalmente la vida al tratarme varios problemas en el pie. Profesionales, atentas, siempre explicándome con todo detalle el tratamiento. Han solucionado mi problema y el dolor agudo que tenía al caminar. Muchas gracias a este equipo. Añadir que las instalaciones son maravillosas.',
    rating: 5,
    image: '/images/testimonials/ian.jpg'
  },
  {
    name: 'Almudena Ortega Ramírez',
    role: 'Paciente',
    content:
      'Acudí a esta clínica por recomendación y estoy encantada. La fisioterapeuta Alba es, además de una profesional, un encanto. Supo detectar el problema que tenía desde el primer momento y tratarlo rápidamente. Quedé encantada con el trato y volví para probar con las podólogas: otro 10. Recomiendo esta clínica a todo el mundo, tanto por la profesionalidad como por el trato, inmejorable!',
    rating: 5,
    image: '/images/testimonials/almudena.jpg'
  },
  {
    name: 'Iñaki Huelamo',
    role: 'Paciente',
    content:
      'Clínica muy recomendable. Las instalaciones muy nuevas. El personal profesional y atento tanto Alba como Pilar. Para un tema tan delicado como los pies hay que ponerse en buenas manos y aquí lo estoy.',
    rating: 5,
    image: '/images/testimonials/inaki.jpg'
  },
  {
    name: 'Federico Martín Sancho',
    role: 'Deportista',
    content:
      'Llevaba arrastrando meses una fascitis plantar que me impedía correr. Por la recomendación de unos amigos acudí a ésta clínica. Me hicieron un estudio biomecánico completo para hacerme plantillas, a la vez que me dieron sesiones de rehabilitación y un seguimiento completo y personalizado. A día de hoy, ha desaparecido completamente mi dolor y estoy corriendo con normalidad. Las plantillas las hacen con una nueva técnica en impresión 3D… realmente asombrado con el resultado.',
    rating: 5,
    image: '/images/testimonials/federico.jpg'
  },
  {
    name: 'Héctor Quiles Bou',
    role: 'Paciente',
    content:
      'Me desplazo hasta esta clínica a propósito desde donde vivo (87km de distancia). Muy profesionales y con un trato genial al cliente, desde la recepcionista hasta las doctoras. Además muy estrictas y cuidadosas con las medidas de seguridad, lo cual se agradece mucho.',
    rating: 5,
    image: '/images/testimonials/hector.jpg'
  },
  {
    name: 'Judith Pérez',
    role: 'Paciente',
    content:
      'Las dos doctoras son un encanto! Fui con dolor, me recomendaron unas plantillas y las llevo súper cómodas, me las voy cambiando de zapatillas, el dolor ha desaparecido! Las recomiendo a todo el mundo.',
    rating: 5,
    image: '/images/testimonials/judith.jpg'
  },
  {
    name: 'Arturo Ramírez Muñoz',
    role: 'Paciente',
    content:
      'Fui porque tenía una molestia en la pierna que me dolía al andar y se me hacía muy incómodo. Decidí ir por recomendación de un amigo y encantado tanto con el trato como con las plantillas que me hicieron!',
    rating: 5,
    image: '/images/testimonials/arturo.jpg'
  }
]

// Artículos del blog
export const BLOG_POSTS = [
  {
    slug: 'como-cuidar-tus-plantillas',
    title: 'Cómo cuidar tus plantillas: limpieza, desinfección y consejos prácticos',
    excerpt:
      'Las plantillas personalizadas son una herramienta clave en podología para mejorar la pisada, reducir sobrecargas y prevenir lesiones. Descubre cómo mantenerlas en óptimas condiciones.',
    content: `
## Cómo cuidar tus plantillas personalizadas

Las plantillas personalizadas son una herramienta clave en podología para mejorar la pisada, reducir sobrecargas y prevenir lesiones. Para que mantengan su eficacia y durabilidad, es importante realizar un cuidado adecuado en el día a día.

En nuestra clínica trabajamos con materiales como el EVA, un componente ligero y amortiguador que ofrece gran comodidad, especialmente en tratamientos biomecánicos. Como cualquier material técnico, necesita ciertos cuidados para conservarse en buen estado.

A continuación, te compartimos recomendaciones sencillas para el mantenimiento de tus plantillas.

## 1. Limpieza regular, siempre a mano

Las plantillas deben limpiarse con frecuencia para evitar acumulación de sudor, bacterias u olores.

Lo ideal es:
- Utilizar un paño húmedo
- Agua tibia
- Jabón neutro suave

Evita sumergirlas completamente, ya que el exceso de agua puede afectar a su estructura y materiales.

## 2. Desinfección suave para prevenir hongos y mal olor

Si las usas muchas horas al día o practicas deporte, es recomendable desinfectarlas de forma ocasional.

Puedes hacerlo con:
- Sprays específicos para calzado o plantillas
- Productos desinfectantes suaves (sin alcohol agresivo)

Esto ayuda a reducir el riesgo de proliferación bacteriana y mantener una correcta higiene.

## 3. Secado natural: nunca con calor directo

Después de limpiarlas, deja que se sequen al aire, en un lugar ventilado.

⚠️ Evita fuentes de calor como:
- Radiadores
- Secadores
- Exposición directa al sol

Los materiales pueden deformarse con temperaturas altas, perdiendo su función amortiguadora.

## 4. Revisión periódica: las plantillas también se desgastan

Aunque estén bien cuidadas, las plantillas sufren desgaste con el uso. Con el tiempo pueden perder parte de su capacidad de amortiguación y corrección por lo que necesites hacer revisiones.

Se recomienda una revisión podológica periódica, aconsejamos máximo un año y medio y especialmente si:
- Notas molestias nuevas
- Cambias tu actividad física
- El material se deforma
- Han pasado varios meses de uso intensivo

## Conclusión

Las plantillas personalizadas son un tratamiento eficaz, pero su mantenimiento diario es esencial para asegurar su comodidad, higiene y efectividad. Con una limpieza adecuada, una buena ventilación y revisiones periódicas, podrás aprovechar al máximo sus beneficios.

Si tienes dudas sobre el estado de tus plantillas o necesitas una revisión, estaremos encantados de ayudarte.
    `,
    image: '/images/blog/plantillas.jpg',
    date: '2025-01-28',
    author: 'Dra. Pilar Cerdá Gironés',
    category: 'Podología',
    readTime: '5 min'
  },
  {
    slug: 'pie-diabetico-cuidados-diarios',
    title: 'Pie diabético: Cuidados diarios recomendados',
    excerpt:
      'Guía completa de cuidados diarios para el pie diabético: revisión visual, higiene, hidratación, calzado adecuado y señales de alarma que debes conocer.',
    content: `
## Pie diabético: Cuidados diarios recomendados

## 1. Revisión visual cada día

Observa ambos pies a diario, incluyendo la planta y entre los dedos. Busca:
- Ampollas o rozaduras
- Enrojecimiento
- Grietas o heridas
- Cambios de color o temperatura

Si cuesta ver la planta, puede utilizarse un espejo o pedir ayuda.

## 2. Higiene y secado cuidadoso

Lava los pies con agua tibia y jabón suave. Evita el agua demasiado caliente, ya que la sensibilidad puede estar reducida.

Después, seca muy bien, especialmente entre los dedos, para disminuir el riesgo de infecciones por hongos.

## 3. Hidratación para evitar grietas

La piel seca favorece fisuras que pueden convertirse en puerta de entrada para bacterias.

Aplica crema hidratante en la planta y talones, evitando la zona entre los dedos.

## 4. Calzado y calcetines adecuados

El calzado debe ser cómodo, amplio y sin costuras internas que generen presión.

Un consejo práctico es usar calcetines claros, ya que permiten detectar rápidamente:
- Pequeñas pérdidas de sangre
- Secreciones
- Signos tempranos de infección

Evita caminar descalzo, incluso en casa, para prevenir cortes o golpes.

## 5. Corte correcto de uñas y cuidado profesional

Las uñas deben cortarse rectas y sin apurar demasiado. Ante cualquier duda o dificultad, es preferible acudir al podólogo.

El manejo profesional es especialmente importante si existen:
- Uñas engrosadas
- Problemas de visión
- Pérdida de sensibilidad

## Síntomas de alarma: cuándo consultar de inmediato

Acude cuanto antes a un profesional si aparece:
- Herida que no mejora en 24–48 h
- Enrojecimiento, calor o hinchazón
- Secreción o mal olor
- Dolor nuevo o aumento de molestias
- Zonas negras o cambios bruscos de color
- Fiebre o signos generales de infección

En pie diabético, actuar rápido puede evitar complicaciones importantes.

## La importancia de las revisiones periódicas

Las guías internacionales recomiendan revisiones regulares del pie en personas con diabetes para identificar factores de riesgo y prevenir úlceras antes de que aparezcan.

Un abordaje multidisciplinar (podología, medicina y enfermería) ha demostrado reducir complicaciones y mejorar resultados.

## Conclusión

El cuidado del pie diabético se basa en hábitos diarios sencillos: revisar, limpiar, hidratar, usar calzado adecuado y consultar ante cualquier señal de alarma. La prevención es siempre el mejor tratamiento.

Si tienes diabetes, una valoración podológica periódica puede ayudarte a mantener tus pies sanos y seguros.

## Referencias científicas

- Armstrong DG, Boulton AJM, Bus SA. Diabetic Foot Ulcers and Their Recurrence. N Engl J Med. 2017.
- Lipsky BA et al. 2012 Infectious Diseases Society of America Clinical Practice Guideline for Diabetic Foot Infections. Clin Infect Dis. 2012.
- Bus SA et al. IWGDF Guidelines on the prevention and management of diabetic foot disease. Diabetes Metab Res Rev. 2020.
- Boulton AJM et al. Comprehensive foot examination and risk assessment. Diabetes Care. 2008.
    `,
    image: '/images/blog/pie-diabetico.jpg',
    date: '2025-01-21',
    author: 'Dra. Pilar Cerdá Gironés',
    category: 'Podología',
    readTime: '7 min'
  },
  {
    slug: 'rehabilitacion-suelo-pelvico',
    title: 'Rehabilitación del suelo pélvico: salud, bienestar y calidad de vida',
    excerpt:
      'El suelo pélvico es fundamental para la continencia, la estabilidad y la salud sexual. Descubre cómo la fisioterapia especializada puede ayudarte.',
    content: `
## Rehabilitación del suelo pélvico: salud, bienestar y calidad de vida

El suelo pélvico es un conjunto de músculos y tejidos que sostiene órganos como la vejiga, el útero o el recto. Además, desempeña un papel fundamental en funciones como la continencia urinaria y fecal, la estabilidad del core, la postura y la salud sexual.

A lo largo de la vida, factores como el embarazo, el parto, la menopausia, el deporte o determinadas intervenciones quirúrgicas pueden alterar esta musculatura, provocando síntomas que afectan directamente a la calidad de vida.

La buena noticia es que la fisioterapia de suelo pélvico constituye un tratamiento eficaz, seguro y respaldado por una sólida evidencia científica.

## ¿Cuándo está indicada la rehabilitación del suelo pélvico?

La fisioterapia de suelo pélvico está indicada en disfunciones frecuentes como:
- Incontinencia urinaria (de esfuerzo, urgencia o mixta)
- Alteraciones ano-rectales: estreñimiento, hemorroides, incontinencia o prolapsos
- Prolapsos genitales
- Embarazo y postparto
- Tratamiento de cicatrices y recuperación tras episiotomías o cirugías
- Dolor pélvico crónico, dismenorrea o endometriosis
- Disfunciones sexuales como dispareunia, vaginismo o vulvodinia

## Un abordaje basado en una valoración individual

El tratamiento comienza siempre con una valoración inicial completa y personalizada, que incluye:
- Historia clínica y hábitos de vida
- Evaluación postural y funcional
- Valoración abdominal y diafragmática
- Exploración específica del suelo pélvico
- Establecimiento de objetivos terapéuticos individualizados

## Técnicas utilizadas en fisioterapia de suelo pélvico

La rehabilitación combina diferentes herramientas terapéuticas según cada caso, entre ellas:
- **Terapia manual**, orientada a mejorar la función, liberar tensiones y disminuir el dolor
- **Educación terapéutica** para comprender el funcionamiento del suelo pélvico y mejorar hábitos a largo plazo
- **Biofeedback**, que permite aprender a activar y relajar correctamente la musculatura
- **Ejercicio terapéutico e hipopresivos** para mejorar el control lumbopélvico y la estabilidad del core

Además, se pueden emplear tecnologías avanzadas que favorecen la regeneración tisular, la analgesia y la recuperación funcional en casos específicos.

## Beneficios respaldados por la evidencia científica

La fisioterapia de suelo pélvico cuenta con una base científica sólida. Numerosos estudios demuestran que el entrenamiento específico de la musculatura pélvica mejora la continencia urinaria, reduce síntomas de prolapsos, disminuye el dolor pélvico y contribuye a una mejor calidad de vida.

Se trata de un abordaje eficaz tanto en prevención como en tratamiento, especialmente en etapas como el postparto, la menopausia o tras una cirugía.

## Conclusión: una atención especializada y personalizada

La rehabilitación del suelo pélvico va mucho más allá de realizar ejercicios aislados. Se trata de un abordaje integral, individualizado y basado en evidencia, que permite recuperar funcionalidad, confianza y bienestar.

En Clínica Gironés ofrecemos un servicio especializado de fisioterapia de suelo pélvico con valoración individual y tratamiento personalizado.

Si presentas síntomas como pérdidas de orina, dolor pélvico o molestias en el postparto, no los normalices. Una valoración a tiempo puede marcar la diferencia.

## Referencias científicas

- Pelvic floor muscle training versus no treatment for urinary incontinence in women (Cochrane Review) - pubmed.ncbi.nlm.nih.gov/35383288/
- Effectiveness of Pelvic Floor Muscle Training on Quality of Life in Women with Urinary Incontinence: Systematic Review and Meta-analysis (2023) - pubmed.ncbi.nlm.nih.gov/37374208/
- Pelvic Floor Physical Therapy for Pelvic Floor Hypertonicity: Systematic Review (2022) - pubmed.ncbi.nlm.nih.gov/34127429/
- Effectiveness of physical therapy interventions in women with dyspareunia: Systematic Review + Meta-analysis (2023) - pubmed.ncbi.nlm.nih.gov/37712430/
    `,
    image: '/images/blog/suelo-pelvico.jpg',
    date: '2025-01-14',
    author: 'Elena Díaz Comes',
    category: 'Suelo Pélvico',
    readTime: '8 min'
  },
  {
    slug: 'ejercicio-terapeutico-salud-prevencion',
    title: 'Ejercicio Terapéutico: salud, prevención y recuperación funcional',
    excerpt:
      'El ejercicio terapéutico es una de las herramientas más eficaces de la fisioterapia para mejorar la movilidad, recuperar la fuerza y prevenir lesiones de forma segura.',
    content: `
## Ejercicio terapéutico: salud, prevención y recuperación funcional

El ejercicio terapéutico es una de las herramientas más eficaces dentro de la fisioterapia para mejorar la movilidad, recuperar la fuerza y prevenir lesiones de forma segura.

A diferencia del ejercicio general, el ejercicio terapéutico está diseñado de manera individualizada y supervisado por fisioterapeutas, adaptándose a las necesidades, edad y condición física de cada paciente.

Su objetivo principal es mejorar la funcionalidad del cuerpo, reducir el dolor y promover una recuperación duradera.

## ¿Por qué es tan importante el ejercicio terapéutico?

El movimiento es esencial para mantener un sistema musculoesquelético saludable. Con el paso del tiempo, el sedentarismo, las lesiones o ciertas patologías pueden provocar pérdida de fuerza, rigidez articular y disminución del equilibrio.

El ejercicio terapéutico permite:
- Mejorar el tono muscular y la estabilidad corporal
- Aumentar la fuerza y la resistencia de forma progresiva
- Reducir el riesgo de recaídas y nuevas lesiones
- Favorecer una recuperación funcional completa
- Mejorar la postura y el control del movimiento

## Prevención de lesiones y dolor musculoesquelético

El ejercicio terapéutico es clave tanto en prevención como en tratamiento. Fortalecer la musculatura y mejorar el control motor ayuda a reducir sobrecargas, compensaciones y molestias frecuentes como dolor lumbar, cervical o tendinopatías.

Un buen tono muscular y una correcta estabilidad articular son fundamentales para mantener una vida activa y segura.

## Ejercicio terapéutico en personas mayores: prevención de caídas

En edades avanzadas, la pérdida de fuerza y equilibrio aumenta el riesgo de caídas, una de las principales causas de lesiones y pérdida de autonomía.

Programas específicos de ejercicio terapéutico han demostrado ser eficaces para:
- Mejorar el equilibrio y la coordinación
- Aumentar la fuerza en miembros inferiores
- Reducir significativamente el riesgo de caídas
- Favorecer la independencia en actividades diarias

El ejercicio se convierte así en una herramienta fundamental para un envejecimiento saludable.

## Un tratamiento activo y personalizado

El ejercicio terapéutico no consiste únicamente en "hacer ejercicios", sino en un abordaje guiado y adaptado, con progresión segura y objetivos funcionales.

En nuestra clínica, las sesiones se realizan en grupos reducidos tras una valoración previa, garantizando un entorno controlado y una atención cercana.

## Conclusión

En Clínica Gironés diseñamos programas personalizados de ejercicio terapéutico supervisados por fisioterapeutas, orientados a mejorar tu movilidad, prevenir lesiones y aumentar tu calidad de vida.

## Referencias científicas

- Exercise therapy for chronic low back pain: Systematic Review - pubmed.ncbi.nlm.nih.gov/34580864/
- Strength training and prevention of falls in older adults: Meta-analysis - pubmed.ncbi.nlm.nih.gov/31060853/
- Exercise interventions reduce fall risk in older people: Systematic Review (Cochrane) - pubmed.ncbi.nlm.nih.gov/30703208/
- Therapeutic exercise and musculoskeletal rehabilitation outcomes - pubmed.ncbi.nlm.nih.gov/32861321/
- Physical activity and muscle strength as protective factors in ageing - pubmed.ncbi.nlm.nih.gov/31813192/
    `,
    image: '/images/blog/ejercicio-terapeutico.jpg',
    date: '2025-01-07',
    author: 'Dra. Pilar Cerdá Gironés',
    category: 'Fisioterapia',
    readTime: '6 min'
  }
]

// Metadata SEO
export const SEO_CONFIG = {
  siteName: 'Clínica Gironés',
  siteUrl: 'https://clinicagirones.es',
  defaultTitle: 'Clínica Gironés | Podología en València',
  defaultDescription:
    'Clínica de podología en València especializada en quiropodia, plantillas personalizadas, pie diabético y podología deportiva. Más de 15 años cuidando tus pies.',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@clinicagirones',
  locale: 'es_ES'
}
