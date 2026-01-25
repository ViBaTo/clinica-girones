"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Card, SectionTitle } from "@/components/ui";
import { BLOG_POSTS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

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

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
              Consejos y artículos de salud podológica
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Información útil para el cuidado de tus pies, escrita por nuestros profesionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card hover className="overflow-hidden p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center min-h-[300px]">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <span className="text-primary-dark text-sm font-medium">
                        Artículo destacado
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3" />
                        {featuredPost.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
                        <Calendar className="w-3 h-3" />
                        {formatDate(featuredPost.date)}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-900">
                            {featuredPost.author}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {featuredPost.readTime} de lectura
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-primary font-medium">
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <SectionTitle
              title="Más artículos"
              description="Sigue explorando nuestros consejos de salud podológica."
              align="left"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {otherPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card hover className="h-full flex flex-col p-0 overflow-hidden">
                      {/* Image */}
                      <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-light px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {formatDate(post.date)}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-neutral-400" />
                            <span className="text-xs text-neutral-500">
                              {post.readTime}
                            </span>
                          </div>
                          <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                            Leer
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              ¿Te ha resultado útil?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Si tienes alguna duda sobre la salud de tus pies, no dudes en consultarnos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-neutral-50 transition-colors"
            >
              Consultar con un especialista
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
