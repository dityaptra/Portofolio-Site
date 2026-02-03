import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaBuilding,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    title: "Python Fundamental",
    issuer: "Dicoding",
    date: "Nov 2025",
    link: "/certificates/python_dicoding.pdf",
  },
  {
    title: "AI Fundamental",
    issuer: "Dicoding",
    date: "Nov 2025",
    link: "/certificates/ai_dicoding.pdf",
  },
  {
    title: "Machine Learning Beginner",
    issuer: "Dicoding",
    date: "Jan 2026",
    link: "/certificates/ml_dicoding.pdf",
  },
];

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk mendeteksi slide mana yang sedang aktif
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  // Fungsi untuk klik dot -> scroll ke slide terkait
  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 border-l-4 border-emerald-500 pl-4">
            Certifications
          </h2>
        </motion.div>

        {/* CONTAINER UTAMA 
          1. flex, overflow-x-auto, snap-x: Membuat slider horizontal di mobile
          2. [&::-webkit-scrollbar]:hidden: MENYEMBUNYIKAN SCROLLBAR (Request Anda)
          3. md:grid: Kembali ke tampilan Grid di Desktop
        */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-6 
            overflow-x-auto snap-x snap-mandatory 
            py-4
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
            md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:py-4
          "
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // Mobile: min-w-full (Satu layar penuh per kartu)
              // Desktop: min-w-0 (Reset lebar agar sesuai grid)
              className="group relative h-full min-w-full md:min-w-0 snap-center"
            >
              <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500/50 relative overflow-hidden flex flex-col">
                {/* Background Glow Effect */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-all duration-500"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl shadow-inner">
                    <FaAward className="text-2xl" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                    <FaCalendarAlt className="text-emerald-500" />
                    {cert.date}
                  </span>
                </div>

                <div className="mb-6 relative z-10 grow">
                  <h3 className="text-xl text-center font-bold text-slate-800 dark:text-white mb-2 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="relative z-10 flex justify-between items-center mt-auto pt-4 border-t border-slate-300 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                    <FaBuilding className="text-slate-400" />
                    <span>{cert.issuer}</span>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group/link"
                  >
                    Credential
                    <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- DOTS INDICATOR (MOBILE ONLY) --- */}
        {/* md:hidden artinya hilang di layar desktop */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {certifications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                activeIndex === idx
                  ? "w-8 bg-emerald-500" // Dot Aktif (Panjang)
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-emerald-300" // Dot Mati (Bulat)
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}