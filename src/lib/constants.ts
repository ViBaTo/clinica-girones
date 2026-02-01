// Información de la clínica
export const CLINIC_INFO = {
  name: 'Clínica Podológica Gironés',
  slogan: 'Cuidamos tus pies, mejoramos tu vida',
  description:
    'Clínica especializada en el cuidado integral de tu salud, con más de 30 años de experiencia ofreciendo tratamientos personalizados con la última tecnología.',
  phone: '+34 963 601 380',
  whatsapp: '+34 657 982 445',
  email: 'recepcion@clinicagirones.es',
  address: {
    street: "Carrer d'Armando Palacio Valdés, 11",
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
      'Prevención de patologías del pie',
      'Diagnóstico especializado',
      'Tratamientos personalizados',
      'Alivio de molestias y dolores'
    ],
    icon: 'Footprints',
    duration: '30-60 min',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop&q=80'
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    shortDescription:
      'Prevención, tratamiento y recuperación de lesiones para mejorar tu movilidad y bienestar.',
    fullDescription:
      'Servicio integral de fisioterapia orientado a la prevención, tratamiento y recuperación de lesiones, mejorando la movilidad, reduciendo el dolor y favoreciendo el bienestar general.',
    benefits: [
      'Mejora de la movilidad',
      'Reducción del dolor',
      'Recuperación de lesiones',
      'Bienestar general'
    ],
    icon: 'Hand',
    duration: '45-60 min',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80'
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
    duration: '45-60 min',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80'
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
    duration: '60 min',
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
    duration: '45-60 min',
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
    duration: '30-60 min',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop&q=80',
    highlights: [
      { label: 'Experiencia', value: '+15 años' },
      { label: 'Pacientes', value: '+5.000' },
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
            description: 'Alivio del dolor y tratamiento eficaz para evitar infecciones.',
            icon: 'Scissors'
          },
          {
            id: 'papilomas',
            title: 'Papilomas plantares',
            description: 'Eliminación de verrugas plantares con técnicas específicas.',
            badge: 'Láser de alta potencia',
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
        description: 'Evaluación completa de tu historial y estado actual del pie.'
      },
      {
        step: 2,
        title: 'Diagnóstico',
        description: 'Análisis detallado para identificar la causa de las molestias.'
      },
      {
        step: 3,
        title: 'Plan de tratamiento',
        description: 'Diseñamos un tratamiento personalizado según tus necesidades.'
      },
      {
        step: 4,
        title: 'Seguimiento',
        description: 'Control y ajuste del tratamiento para garantizar los mejores resultados.'
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
          'Las plantillas tienen una vida útil de 1 a 2 años dependiendo del uso. Es importante revisarlas periódicamente y renovarlas cuando sea necesario para mantener su eficacia.'
      },
      {
        question: '¿El tratamiento de uñas encarnadas es doloroso?',
        answer:
          'Utilizamos anestesia local para garantizar que el tratamiento sea completamente indoloro. La recuperación es rápida y las molestias postoperatorias son mínimas.'
      },
      {
        question: '¿Cuántas sesiones necesito para eliminar un papiloma?',
        answer:
          'Depende del tamaño y profundidad del papiloma. Con nuestro láser de alta potencia, normalmente se necesitan entre 1 y 3 sesiones para su eliminación completa.'
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
    duration: '45-60 min',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80',
    highlights: [
      { label: 'Experiencia', value: '+15 años' },
      { label: 'Tecnología', value: 'Avanzada' },
      { label: 'Tratamiento', value: 'Personalizado' }
    ],
    treatments: [
      {
        id: 'fisioterapia-general',
        title: 'Fisioterapia general',
        icon: 'Hand',
        description:
          'Tratamos dolencias musculares, articulares y tendinosas, contracturas, y lesiones derivadas de la actividad diaria.',
        longDescription:
          'Combinamos la terapia manual con las técnicas y tecnología más avanzada para recuperar la funcionalidad y mejorar la calidad de vida de nuestros pacientes. Abordamos todo tipo de dolencias del aparato locomotor con un enfoque integral y personalizado.',
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
          'Ayudamos a deportistas a optimizar su rendimiento, acelerar la recuperación y evitar recaídas mediante un tratamiento específico y adaptado. Trabajamos con deportistas de todos los niveles, desde amateurs hasta profesionales, aplicando las técnicas más avanzadas.',
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
          'Nuestro objetivo es favorecer un desarrollo saludable y prevenir futuras complicaciones. Trabajamos de forma lúdica y adaptada a cada edad, asegurando que los más pequeños se sientan cómodos durante el tratamiento.',
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
              'Tecnología de radiofrecuencia de última generación que estimula la regeneración de los tejidos, mejora la circulación y reduce el dolor y la inflamación. Tratamiento avanzado y no invasivo que acelera la recuperación funcional.',
            badge: 'Radiofrecuencia',
            icon: 'Radio'
          },
          {
            id: 'sistema-superinductivo',
            title: 'Sistema Superinductivo (BTL)',
            description:
              'Tecnología avanzada que emplea campos electromagnéticos de alta intensidad para aliviar el dolor, reducir la inflamación y estimular la recuperación muscular y articular. Especialmente eficaz en rehabilitación.',
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
        description: 'Evaluación completa de tu estado físico, historial y objetivos de recuperación.'
      },
      {
        step: 2,
        title: 'Diagnóstico funcional',
        description: 'Identificamos la causa del problema mediante pruebas específicas.'
      },
      {
        step: 3,
        title: 'Plan terapéutico',
        description: 'Diseñamos un programa de tratamiento personalizado y adaptado a ti.'
      },
      {
        step: 4,
        title: 'Tratamiento y seguimiento',
        description: 'Aplicamos las técnicas más adecuadas y monitorizamos tu evolución.'
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
        question: '¿A partir de qué edad se puede recibir fisioterapia pediátrica?',
        answer:
          'Atendemos a niños desde los primeros meses de vida hasta la adolescencia. Cada tratamiento se adapta a la edad y necesidades específicas del paciente, utilizando técnicas apropiadas y un enfoque lúdico.'
      },
      {
        question: '¿Es doloroso el tratamiento con aparatología?',
        answer:
          'No, todos nuestros tratamientos con aparatología son indoloros y no invasivos. Podrás sentir una sensación de calor o ligero hormigueo, pero nunca dolor. Son técnicas muy bien toleradas.'
      }
    ],
    relatedServices: ['podologia', 'suelo-pelvico', 'pilates-terapeutico', 'ejercicio-terapeutico']
  },
  'suelo-pelvico': {
    slug: 'suelo-pelvico',
    title: 'Suelo Pélvico',
    subtitle: 'Fisioterapia especializada en salud pélvica',
    heroDescription:
      'La fisioterapia de suelo pélvico está especializada en la prevención y tratamiento de disfunciones relacionadas con la musculatura pélvica, ayudando a mejorar la calidad de vida y el bienestar de nuestros pacientes.',
    icon: 'Heart',
    duration: '45-60 min',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
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
            description: 'Tratamiento de incontinencia de esfuerzo, de urgencia y mixta mediante técnicas de fortalecimiento y reeducación.',
            icon: 'Droplets'
          },
          {
            id: 'alteraciones-anorectales',
            title: 'Alteraciones ano-rectales',
            description: 'Incontinencia fecal, hemorroides, estreñimiento y prolapsos rectales.',
            icon: 'Shield'
          },
          {
            id: 'prolapsos-genitales',
            title: 'Prolapsos genitales',
            description: 'Tratamiento conservador y preventivo de prolapsos de órganos pélvicos.',
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
            description: 'Tratamiento del dolor durante las relaciones sexuales, tanto superficial como profunda.',
            icon: 'Heart'
          },
          {
            id: 'vaginismo',
            title: 'Vaginismo',
            description: 'Abordaje de la contracción involuntaria que dificulta o impide la penetración.',
            icon: 'Shield'
          },
          {
            id: 'vulvodinia',
            title: 'Vulvodinia',
            description: 'Tratamiento del dolor vulvar crónico sin causa aparente.',
            icon: 'Sparkles'
          },
          {
            id: 'anorgasmia',
            title: 'Anorgasmia y disorgasmia',
            description: 'Abordaje de las dificultades para alcanzar el orgasmo o alteraciones en el mismo.',
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
            description: 'Tratamiento del dolor menstrual intenso mediante técnicas específicas.',
            icon: 'Activity'
          },
          {
            id: 'endometriosis',
            title: 'Endometriosis',
            description: 'Abordaje fisioterapéutico complementario para el manejo del dolor.',
            icon: 'Heart'
          },
          {
            id: 'dolor-persistente',
            title: 'Dolor pélvico persistente',
            description: 'Tratamiento integral del dolor crónico de la región pélvica.',
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
        description: 'Conversación confidencial sobre tu historia clínica y síntomas.'
      },
      {
        step: 2,
        title: 'Valoración física',
        description: 'Evaluación del estado del suelo pélvico y musculatura asociada.'
      },
      {
        step: 3,
        title: 'Plan personalizado',
        description: 'Diseño de un programa de tratamiento adaptado a tus necesidades.'
      },
      {
        step: 4,
        title: 'Tratamiento y seguimiento',
        description: 'Sesiones de tratamiento con evaluación continua de tu progreso.'
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
        question: '¿Los hombres también pueden tener problemas de suelo pélvico?',
        answer:
          'Sí, los hombres también pueden sufrir disfunciones del suelo pélvico, especialmente tras cirugías de próstata. Ofrecemos tratamiento especializado para ellos.'
      },
      {
        question: '¿Las sesiones son incómodas?',
        answer:
          'Trabajamos en un ambiente de máxima confidencialidad y respeto. Las técnicas se explican detalladamente y se realizan con tu consentimiento y comodidad.'
      }
    ],
    relatedServices: ['fisioterapia', 'pilates-terapeutico', 'ejercicio-terapeutico']
  },
  'pilates-terapeutico': {
    slug: 'pilates-terapeutico',
    title: 'Pilates Terapéutico',
    subtitle: 'Ejercicio clínico supervisado por fisioterapeutas',
    heroDescription:
      'El pilates terapéutico es una modalidad de ejercicio clínico y funcional, supervisada por fisioterapeutas, que se adapta a las necesidades de cada persona tras una valoración previa. Su objetivo es mejorar la postura, la movilidad y el control del movimiento de forma segura, progresiva y personalizada.',
    icon: 'Dumbbell',
    duration: '60 min',
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
        description: 'Evaluación completa de tu estado físico, objetivos y posibles limitaciones.'
      },
      {
        step: 2,
        title: 'Programa personalizado',
        description: 'Diseño de un plan adaptado a tus necesidades específicas.'
      },
      {
        step: 3,
        title: 'Sesiones supervisadas',
        description: 'Ejercicio guiado con corrección individual y adaptación continua.'
      },
      {
        step: 4,
        title: 'Progresión y autonomía',
        description: 'Avance gradual hacia la autonomía en el movimiento y la actividad.'
      }
    ],
    faq: [
      {
        question: '¿Qué diferencia hay entre pilates terapéutico y pilates convencional?',
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
      'Los ejercicios terapéuticos son una herramienta clave dentro de la fisioterapia: un programa de movimiento planificado, progresivo y personalizado, diseñado a partir de una valoración clínica. No se trata de "hacer ejercicio" sin más, sino de entrenar de forma segura aquello que tu cuerpo necesita para reducir el dolor, recuperar movilidad y fuerza, mejorar el control motor y volver a tus actividades diarias o deportivas con confianza.',
    icon: 'Activity',
    duration: '45-60 min',
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
        description: 'Evaluación completa de tu estado físico, limitaciones y objetivos.'
      },
      {
        step: 2,
        title: 'Diseño del programa',
        description: 'Creación de un plan de ejercicios personalizado según tu fase y necesidades.'
      },
      {
        step: 3,
        title: 'Sesiones guiadas',
        description: 'Entrenamiento supervisado con corrección técnica y adaptación continua.'
      },
      {
        step: 4,
        title: 'Progresión y autonomía',
        description: 'Avance gradual hacia la autonomía para mantener resultados a largo plazo.'
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
  duration: string
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
    name: 'Dr. Ernesto García López',
    role: 'Director y Podólogo',
    bio: 'Fundador de la clínica con más de 20 años de experiencia. Especialista en biomecánica y podología deportiva. Colaborador habitual con equipos deportivos profesionales.',
    image: '/images/team/ernesto.jpg',
    credentials: [
      'Grado en Podología - UCM',
      'Máster en Biomecánica',
      'Especialista en Podología Deportiva'
    ]
  },
  {
    name: 'Dra. María Sánchez Ruiz',
    role: 'Podóloga',
    bio: 'Especialista en pie diabético y cirugía podológica. 12 años de experiencia en tratamientos quirúrgicos mínimamente invasivos.',
    image: '/images/team/maria.jpg',
    credentials: [
      'Grado en Podología - UB',
      'Máster en Cirugía Podológica',
      'Experta en Pie Diabético'
    ]
  },
  {
    name: 'Carlos Martín Pérez',
    role: 'Podólogo',
    bio: 'Especializado en podología pediátrica y plantillas personalizadas. Apasionado por el desarrollo saludable del pie en la infancia.',
    image: '/images/team/carlos.jpg',
    credentials: [
      'Grado en Podología - UV',
      'Especialista en Podología Infantil',
      'Técnico Ortopédico'
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
    slug: '5-consejos-cuidado-diario-pies',
    title: '5 Consejos para el Cuidado Diario de tus Pies',
    excerpt:
      'Descubre las rutinas básicas que mantendrán tus pies sanos y libres de problemas. Pequeños hábitos que marcan la diferencia.',
    content: `
## La importancia del cuidado diario

Nuestros pies soportan todo el peso del cuerpo y nos permiten movernos libremente. Sin embargo, a menudo los olvidamos hasta que aparece algún problema. Con estos sencillos consejos, podrás mantener tus pies en óptimas condiciones.

## 1. Higiene diaria adecuada

Lava tus pies todos los días con agua tibia y jabón neutro. Es importante secarlos bien, especialmente entre los dedos, para evitar la humedad que favorece las infecciones por hongos.

## 2. Hidratación constante

Aplica crema hidratante específica para pies después del baño, evitando la zona entre los dedos. La piel del pie tiende a resecarse, y una buena hidratación previene grietas y durezas.

## 3. Corte correcto de uñas

Corta las uñas en línea recta, sin redondear las esquinas, para prevenir las uñas encarnadas. Utiliza cortaúñas o tijeras específicas para pies y lima los bordes suavemente.

## 4. Calzado apropiado

Usa zapatos de tu talla, con espacio suficiente para los dedos. Alterna el calzado para permitir que se ventile y evita los tacones muy altos para el uso diario.

## 5. Revisiones periódicas

Examina tus pies regularmente en busca de cambios en la piel, uñas o sensibilidad. Ante cualquier anomalía, consulta con un podólogo.

## Conclusión

El cuidado de los pies es una inversión en tu salud y calidad de vida. Dedicar unos minutos al día a estas rutinas simples puede evitar muchos problemas en el futuro.
    `,
    image: '/images/blog/cuidado-pies.jpg',
    date: '2024-01-15',
    author: 'Dr. Ernesto García',
    category: 'Consejos',
    readTime: '5 min'
  },
  {
    slug: 'como-elegir-calzado-adecuado',
    title: 'Cómo Elegir el Calzado Adecuado para tus Pies',
    excerpt:
      'Una guía completa para seleccionar el calzado que mejor se adapte a tu tipo de pie y actividad diaria.',
    content: `
## El impacto del calzado en la salud del pie

El calzado que elegimos tiene un impacto directo en la salud de nuestros pies, rodillas, caderas y espalda. Un zapato inadecuado puede causar desde simples molestias hasta patologías serias.

## Características de un buen calzado

### Talla correcta
El pie debe tener espacio suficiente para moverse. Compra calzado al final del día, cuando el pie está más hinchado, y deja un centímetro entre el dedo más largo y la punta del zapato.

### Materiales transpirables
Opta por materiales naturales como el cuero o textiles transpirables que permitan la ventilación del pie y eviten la sudoración excesiva.

### Sujeción adecuada
El calzado debe sujetar bien el pie, especialmente en la zona del talón y el empeine, sin apretar ni causar rozaduras.

### Suela flexible pero con soporte
La suela debe ser lo suficientemente flexible para permitir el movimiento natural del pie, pero con el soporte necesario para absorber impactos.

## Tipos de calzado según la actividad

### Para el día a día
Zapatos cómodos con tacón bajo (2-4 cm), horma ancha y buena amortiguación.

### Para deporte
Calzado específico para cada actividad, renovándolo cuando muestre desgaste.

### Para ocasiones especiales
Limita el uso de tacones altos a pocas horas y descansa el pie después.

## Señales de que tu calzado no es adecuado

- Dolor o molestias al caminar
- Aparición de callosidades o durezas
- Uñas dañadas o encarnadas
- Fatiga excesiva en pies y piernas

## Conclusión

Invertir en buen calzado es invertir en salud. Si tienes dudas sobre qué tipo de calzado necesitas, consulta con un podólogo que podrá asesorarte según tu anatomía y necesidades.
    `,
    image: '/images/blog/calzado.jpg',
    date: '2024-01-08',
    author: 'Dra. María Sánchez',
    category: 'Guías',
    readTime: '7 min'
  },
  {
    slug: 'prevencion-pie-diabetico',
    title: 'Prevención del Pie Diabético: Todo lo que Necesitas Saber',
    excerpt:
      'Información esencial sobre el cuidado del pie en personas con diabetes y cómo prevenir complicaciones.',
    content: `
## ¿Qué es el pie diabético?

El pie diabético es una complicación de la diabetes que afecta a los pies debido a la neuropatía (daño en los nervios) y la mala circulación sanguínea. Puede provocar heridas que no cicatrizan, infecciones y, en casos graves, amputaciones.

## ¿Por qué los diabéticos deben cuidar especialmente sus pies?

### Neuropatía diabética
La diabetes puede dañar los nervios, reduciendo la sensibilidad. Esto significa que puedes hacerte daño sin darte cuenta.

### Problemas circulatorios
La mala circulación dificulta la cicatrización de heridas y aumenta el riesgo de infecciones.

### Mayor riesgo de infecciones
Los niveles elevados de glucosa favorecen el crecimiento de bacterias y hongos.

## Medidas de prevención

### Revisión diaria
Examina tus pies cada día buscando cortes, ampollas, enrojecimiento o cambios en la piel. Usa un espejo si es necesario.

### Control de la glucosa
Mantener los niveles de azúcar controlados es fundamental para prevenir complicaciones.

### Higiene cuidadosa
Lava tus pies diariamente con agua tibia (comprueba la temperatura con el codo). Sécalos bien, especialmente entre los dedos.

### Hidratación
Aplica crema hidratante evitando la zona entre los dedos.

### Calzado protector
Usa siempre calzado, incluso en casa. Revisa el interior antes de ponértelo para detectar objetos o irregularidades.

### No camines descalzo
Evita el riesgo de heridas caminando siempre con calzado protector.

## Cuándo acudir al podólogo

Consulta inmediatamente si observas:
- Heridas que no cicatrizan
- Cambios de color en la piel
- Hinchazón persistente
- Uñas encarnadas o infectadas
- Callosidades o durezas problemáticas

## Conclusión

La prevención es la mejor herramienta contra las complicaciones del pie diabético. Un seguimiento regular con tu podólogo y endocrino, junto con el autocuidado diario, son claves para mantener tus pies sanos.
    `,
    image: '/images/blog/pie-diabetico.jpg',
    date: '2024-01-01',
    author: 'Dra. María Sánchez',
    category: 'Salud',
    readTime: '8 min'
  }
]

// Metadata SEO
export const SEO_CONFIG = {
  siteName: 'Clínica Podológica Gironés',
  siteUrl: 'https://clinicagirones.es',
  defaultTitle: 'Clínica Podológica Gironés | Podología en València',
  defaultDescription:
    'Clínica de podología en València especializada en quiropodia, plantillas personalizadas, pie diabético y podología deportiva. Más de 15 años cuidando tus pies.',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@clinicagirones',
  locale: 'es_ES'
}
