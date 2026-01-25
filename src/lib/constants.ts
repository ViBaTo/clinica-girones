// Información de la clínica
export const CLINIC_INFO = {
  name: "Clínica Podológica Gironés",
  slogan: "Cuidamos tus pies, mejoramos tu vida",
  description: "Clínica de podología especializada en el cuidado integral del pie. Más de 15 años de experiencia ofreciendo tratamientos personalizados con la última tecnología.",
  phone: "+34 610 828 085",
  whatsapp: "+34 610 828 085",
  email: "info@clinicagirones.es",
  address: {
    street: "Carrer d'Armando Palacio Valdés, 11",
    neighborhood: "El Pla del Real",
    city: "València",
    postalCode: "46010",
    country: "España",
  },
  hours: [
    { days: "Lunes - Viernes", hours: "9:00 - 20:00" },
    { days: "Sábados", hours: "10:00 - 14:00" },
    { days: "Domingos", hours: "Cerrado" },
  ],
  socialMedia: {
    instagram: "https://instagram.com/clinicagirones",
    facebook: "https://facebook.com/clinicagirones",
  },
  mapEmbedUrl: "https://www.google.com/maps?q=Carrer+d'Armando+Palacio+Valdés,+11,+46010+València,+Spain&output=embed",
};

// Navegación principal
export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

// Servicios de la clínica
export const SERVICES = [
  {
    id: "podologia",
    title: "Podología",
    shortDescription: "Tratamiento integral del pie: quiropodia, uñas encarnadas, plantillas y más.",
    fullDescription: "Servicio completo de podología que incluye quiropodia, tratamiento de uñas encarnadas, estudio biomecánico de la pisada y plantillas personalizadas. Cuidamos la salud de tus pies con las técnicas más avanzadas.",
    benefits: [
      "Eliminación de callosidades y durezas",
      "Tratamiento de uñas encarnadas",
      "Plantillas personalizadas",
      "Estudio biomecánico de la pisada"
    ],
    icon: "Footprints",
    duration: "30-60 min",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    shortDescription: "Recuperación y rehabilitación física con técnicas manuales y terapéuticas.",
    fullDescription: "Servicio de fisioterapia especializado en la prevención, tratamiento y recuperación de lesiones musculoesqueléticas. Utilizamos técnicas manuales, terapia física y ejercicio terapéutico para restaurar tu movilidad y bienestar.",
    benefits: [
      "Alivio del dolor muscular y articular",
      "Recuperación de lesiones deportivas",
      "Mejora de la movilidad",
      "Prevención de futuras lesiones"
    ],
    icon: "Hand",
    duration: "45-60 min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "suelo-pelvico",
    title: "Suelo Pélvico",
    shortDescription: "Rehabilitación y fortalecimiento del suelo pélvico para mejorar tu calidad de vida.",
    fullDescription: "Tratamiento especializado en la rehabilitación del suelo pélvico. Trabajamos problemas de incontinencia, prolapsos, dolor pélvico y recuperación postparto con técnicas específicas y ejercicios personalizados.",
    benefits: [
      "Tratamiento de incontinencia urinaria",
      "Recuperación postparto",
      "Fortalecimiento muscular pélvico",
      "Mejora de la calidad de vida"
    ],
    icon: "Heart",
    duration: "45-60 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
  {
    id: "pilates",
    title: "Pilates",
    shortDescription: "Clases de pilates terapéutico para mejorar tu postura, fuerza y flexibilidad.",
    fullDescription: "Clases de pilates terapéutico dirigidas por fisioterapeutas. Mejora tu postura, fortalece tu core, aumenta tu flexibilidad y previene lesiones con ejercicios adaptados a tus necesidades específicas.",
    benefits: [
      "Mejora de la postura corporal",
      "Fortalecimiento del core",
      "Aumento de la flexibilidad",
      "Prevención de lesiones"
    ],
    icon: "Dumbbell",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop&q=80",
  },
];

// Equipo profesional
export const TEAM_MEMBERS = [
  {
    name: "Dr. Ernesto García López",
    role: "Director y Podólogo",
    bio: "Fundador de la clínica con más de 20 años de experiencia. Especialista en biomecánica y podología deportiva. Colaborador habitual con equipos deportivos profesionales.",
    image: "/images/team/ernesto.jpg",
    credentials: ["Grado en Podología - UCM", "Máster en Biomecánica", "Especialista en Podología Deportiva"],
  },
  {
    name: "Dra. María Sánchez Ruiz",
    role: "Podóloga",
    bio: "Especialista en pie diabético y cirugía podológica. 12 años de experiencia en tratamientos quirúrgicos mínimamente invasivos.",
    image: "/images/team/maria.jpg",
    credentials: ["Grado en Podología - UB", "Máster en Cirugía Podológica", "Experta en Pie Diabético"],
  },
  {
    name: "Carlos Martín Pérez",
    role: "Podólogo",
    bio: "Especializado en podología pediátrica y plantillas personalizadas. Apasionado por el desarrollo saludable del pie en la infancia.",
    image: "/images/team/carlos.jpg",
    credentials: ["Grado en Podología - UV", "Especialista en Podología Infantil", "Técnico Ortopédico"],
  },
];

// Valores de la clínica
export const VALUES = [
  {
    title: "Profesionalidad",
    description: "Formación continua y aplicación de las técnicas más avanzadas para ofrecer el mejor cuidado podológico.",
    icon: "Award",
  },
  {
    title: "Cercanía",
    description: "Trato personalizado y cercano. Escuchamos a cada paciente para entender sus necesidades específicas.",
    icon: "Users",
  },
  {
    title: "Innovación",
    description: "Incorporamos las últimas tecnologías y tratamientos para garantizar resultados óptimos.",
    icon: "Lightbulb",
  },
];

// Testimonios de pacientes
export const TESTIMONIALS = [
  {
    name: "Ana García",
    role: "Paciente desde 2019",
    content: "Después de años con problemas en los pies, encontré en esta clínica la solución definitiva. El Dr. Ernesto me hizo unas plantillas que cambiaron mi vida. Ahora puedo caminar sin dolor.",
    rating: 5,
    image: "/images/testimonials/ana.jpg",
  },
  {
    name: "Miguel Fernández",
    role: "Deportista amateur",
    content: "Como corredor, el estudio biomecánico fue revelador. Descubrieron la causa de mis lesiones recurrentes y con las plantillas deportivas he mejorado mis tiempos y dejado atrás las molestias.",
    rating: 5,
    image: "/images/testimonials/miguel.jpg",
  },
  {
    name: "Carmen López",
    role: "Paciente diabética",
    content: "El seguimiento que hacen del pie diabético es excepcional. Me siento muy cuidada y tranquila sabiendo que están pendientes de cualquier cambio. Muy profesionales y humanos.",
    rating: 5,
    image: "/images/testimonials/carmen.jpg",
  },
];

// Artículos del blog
export const BLOG_POSTS = [
  {
    slug: "5-consejos-cuidado-diario-pies",
    title: "5 Consejos para el Cuidado Diario de tus Pies",
    excerpt: "Descubre las rutinas básicas que mantendrán tus pies sanos y libres de problemas. Pequeños hábitos que marcan la diferencia.",
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
    image: "/images/blog/cuidado-pies.jpg",
    date: "2024-01-15",
    author: "Dr. Ernesto García",
    category: "Consejos",
    readTime: "5 min",
  },
  {
    slug: "como-elegir-calzado-adecuado",
    title: "Cómo Elegir el Calzado Adecuado para tus Pies",
    excerpt: "Una guía completa para seleccionar el calzado que mejor se adapte a tu tipo de pie y actividad diaria.",
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
    image: "/images/blog/calzado.jpg",
    date: "2024-01-08",
    author: "Dra. María Sánchez",
    category: "Guías",
    readTime: "7 min",
  },
  {
    slug: "prevencion-pie-diabetico",
    title: "Prevención del Pie Diabético: Todo lo que Necesitas Saber",
    excerpt: "Información esencial sobre el cuidado del pie en personas con diabetes y cómo prevenir complicaciones.",
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
    image: "/images/blog/pie-diabetico.jpg",
    date: "2024-01-01",
    author: "Dra. María Sánchez",
    category: "Salud",
    readTime: "8 min",
  },
];

// Metadata SEO
export const SEO_CONFIG = {
  siteName: "Clínica Podológica Gironés",
  siteUrl: "https://clinicagirones.es",
  defaultTitle: "Clínica Podológica Gironés | Podología en València",
  defaultDescription: "Clínica de podología en València especializada en quiropodia, plantillas personalizadas, pie diabético y podología deportiva. Más de 15 años cuidando tus pies.",
  defaultImage: "/images/og-image.jpg",
  twitterHandle: "@clinicagirones",
  locale: "es_ES",
};
