"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { BLOG_POSTS, CLINIC_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import { notFound } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);

  // Parse markdown-like content to HTML
  const parseContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        // Handle headings
        if (paragraph.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="text-2xl font-semibold text-neutral-900 mt-8 mb-4"
            >
              {paragraph.slice(3)}
            </h2>
          );
        }
        if (paragraph.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="text-xl font-semibold text-neutral-900 mt-6 mb-3"
            >
              {paragraph.slice(4)}
            </h3>
          );
        }
        // Handle lists
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter((item) => item.startsWith("- "));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 my-4 text-neutral-700">
              {items.map((item, i) => (
                <li key={i}>{item.slice(2)}</li>
              ))}
            </ul>
          );
        }
        // Regular paragraphs
        if (paragraph.trim()) {
          return (
            <p key={index} className="text-neutral-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${post.title} - ${CLINIC_INFO.name}`;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 gradient-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary bg-primary-light px-4 py-2 rounded-full">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2 text-neutral-500 text-sm">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2 text-neutral-500 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime} de lectura
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{post.author}</p>
                <p className="text-sm text-neutral-500">Equipo de {CLINIC_INFO.name}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-primary-dark text-sm">Imagen del artículo</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {parseContent(post.content)}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-semibold text-neutral-900 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Compartir este artículo
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-blue-600 hover:text-white transition-all"
                      aria-label="Compartir en Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all"
                      aria-label="Compartir en Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-blue-700 hover:text-white transition-all"
                      aria-label="Compartir en LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={generateWhatsAppLink(
                        CLINIC_INFO.whatsapp,
                        `Mira este artículo: ${shareText} - ${shareUrl}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 hover:bg-green-500 hover:text-white transition-all"
                      aria-label="Compartir por WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* CTA Card */}
              <Card className="p-6 bg-primary text-white">
                <h3 className="font-semibold text-lg mb-3">
                  ¿Necesitas ayuda?
                </h3>
                <p className="text-primary-100 text-sm mb-4">
                  Si tienes dudas sobre la salud de tus pies, consulta con nuestros especialistas.
                </p>
                <Link href="/contacto">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-white text-primary hover:bg-neutral-50"
                  >
                    Pedir cita
                  </Button>
                </Link>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-4">
                    Artículos relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                        <Card hover className="p-4">
                          <h4 className="font-medium text-neutral-900 text-sm mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-neutral-500">
                            {relatedPost.readTime}
                          </p>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All Posts Link */}
              <Link
                href="/blog"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-neutral-100 rounded-xl text-neutral-700 font-medium hover:bg-neutral-200 transition-colors"
              >
                Ver todos los artículos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* More Posts Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
              Sigue leyendo
            </h2>
            <p className="text-neutral-600">
              Más artículos que pueden interesarte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.filter((p) => p.slug !== post.slug).map((otherPost) => (
              <Link key={otherPost.slug} href={`/blog/${otherPost.slug}`}>
                <Card hover className="h-full p-0 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
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
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium">
                      {otherPost.category}
                    </span>
                    <h3 className="font-semibold text-neutral-900 mt-2 mb-2 line-clamp-2">
                      {otherPost.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      {otherPost.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
