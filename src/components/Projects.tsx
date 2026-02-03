"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projects = [
  {
    title: "TiketLoka",
    desc: "Aplikasi web dengan desain responsif untuk memesan tiket wisata online.",
    tech: ["Next.js", "Typescript", "Tailwind", "Laravel", "MySQL"],
    image: "/images/projects/tiketloka.png",
    link: "https://www.tiketloka.web.id",
    github: "https://github.com/dityaptra/TiketLoka-Frontend",
  },
  {
    title: "Raditya Collection",
    desc: "Halaman web informatif dengan SEO yang kuat untuk jasa lobang dan pasang kancing.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/images/projects/radityacollection.png",
    link: "https://www.radityacollection.web.id",
    github: "https://github.com/dityaptra/Raditya-Collection-V2",
  },
  {
    title: "Coming Soon",
    desc: "Sedang dalam tahap pengembangan.",
    tech: ["Node.js", "Express", "MongoDB"],
    image: "/images/image1.png",
    link: "/gede-raditya-portofolio/src/components/NotFound.tsx",
    github: "/gede-raditya-portofolio/src/components/NotFound.tsx",
  },
  {
    title: "Coming Soon",
    desc: "Sedang dalam tahap pengembangan.",
    tech: ["React", "Python", "TensorFlow"],
    image: "/images/image1.png",
    link: "/gede-raditya-portofolio/src/components/NotFound.tsx",
    github: "/gede-raditya-portofolio/src/components/NotFound.tsx",
  },
];

const ITEMS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section
      id="projects"
      className="py-14 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-white mb-12 border-l-4 border-emerald-500 pl-4"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentProjects.map((project, idx) => (
            <motion.div
              key={`${currentPage}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-slate-800 rounded-xl border-2 border-gray-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 overflow-hidden transition-all duration-300 flex flex-col"
            >
              <div className="h-36 relative overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition hover:-translate-y-2 duration-500"
                />
                <div className="absolute inset-0 transition-colors duration-300"></div>
              </div>

              <div className="p-4 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0 ml-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md"
                      title="GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors p-1 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-md"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                currentPage === 1
                  ? "text-slate-300 dark:text-slate-600 border-slate-200 dark:border-slate-800 cursor-not-allowed"
                  : "text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 bg-white dark:bg-slate-800 cursor-pointer shadow-sm"
              }`}
            >
              <FaChevronLeft size={14} />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm ${
                  currentPage === page
                    ? "bg-emerald-600 text-white border border-emerald-600 shadow-emerald-200 dark:shadow-emerald-900/40"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600"
                }`}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                currentPage === totalPages
                  ? "text-slate-300 dark:text-slate-600 border-slate-200 dark:border-slate-800 cursor-not-allowed"
                  : "text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 bg-white dark:bg-slate-800 cursor-pointer shadow-sm"
              }`}
            >
              <FaChevronRight size={14} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
