"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Show button after initial scroll or after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Show tooltip after button appears (only once)
    if (isVisible && !hasBeenDismissed) {
      const timer = setTimeout(() => {
        setIsTooltipVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasBeenDismissed]);

  const handleDismissTooltip = () => {
    setIsTooltipVisible(false);
    setHasBeenDismissed(true);
  };

  const whatsappLink = generateWhatsAppLink(
    CLINIC_INFO.whatsapp,
    "Hola, me gustaría solicitar información sobre sus servicios de podología."
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-xl shadow-elevated p-4 max-w-[200px]"
              >
                <button
                  onClick={handleDismissTooltip}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-200 transition-colors"
                  aria-label="Cerrar mensaje"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm text-neutral-700">
                  ¿Tienes dudas? <span className="font-medium text-primary">Escríbenos por WhatsApp</span>
                </p>
                {/* Arrow */}
                <div className="absolute right-[-8px] bottom-4 w-4 h-4 bg-white transform rotate-45 shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Contactar por WhatsApp"
            onClick={handleDismissTooltip}
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
            
            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
