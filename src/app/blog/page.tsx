"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
              Consejos y artículos de salud
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Información útil escrita por nuestros profesionales.
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
                  <div className="relative aspect-video md:aspect-auto min-h-[300px] overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-xs font-semibold text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-soft">
                      Artículo destacado
                    </span>
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
              description="Sigue explorando nuestros consejos de salud."
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
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
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
