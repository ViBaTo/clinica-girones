import Image from "next/image";

const INSURANCE_LOGOS = [
  { name: "Adeslas", src: "/aseguradoras/adeslas-logo.svg" },
  { name: "Sanitas", src: "/aseguradoras/Sanitas-Logo.svg" },
  { name: "Asisa", src: "/aseguradoras/Asisa-Logo.svg" },
  { name: "Muface", src: "/aseguradoras/Muface-logo.svg" },
  { name: "Mugeju", src: "/aseguradoras/Mugeju-logo.svg" },
  { name: "ISFAS", src: "/aseguradoras/ISFAS-LOGO.svg" },
  { name: "IBV", src: "/aseguradoras/IBV-logo.svg" },
  { name: "AIDIMME", src: "/aseguradoras/AIDIMME-logo.svg" },
];

export function InsurancePartners() {
  // Duplicamos los logos para crear el efecto de loop infinito
  const duplicatedLogos = [...INSURANCE_LOGOS, ...INSURANCE_LOGOS];

  return (
    <section className="py-12 md:py-16 bg-neutral-50 overflow-hidden">
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center"
            >
              <div className="relative w-28 h-16 md:w-36 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
