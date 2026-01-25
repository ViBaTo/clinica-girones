"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-primary py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-primary-light rounded-full mx-auto flex items-center justify-center mb-6">
              <span className="text-6xl font-bold text-primary">404</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-neutral-600 text-lg mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto gap-2">
                <Home className="w-5 h-5" />
                Ir al inicio
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <Search className="w-5 h-5" />
                Contactar
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 mb-4">
              Quizás estés buscando:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/servicios", label: "Servicios" },
                { href: "/sobre-nosotros", label: "Sobre nosotros" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-white rounded-full text-sm text-neutral-700 hover:text-primary hover:bg-primary-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
