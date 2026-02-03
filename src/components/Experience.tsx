import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Junior Web Developer",
    company: "Freelance",
    type: "Freelance",
    date: "Dec 2025 - Present",
    description:
      "Mengembangkan landing page responsif dan optimasi performa & SEO dasar.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-white mb-12 border-l-4 border-emerald-500 pl-4"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-emerald-300 dark:bg-emerald-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-1/2"></div>

                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-slate-900 shadow-sm z-10"></div>

                <div
                  className={`ml-12 md:ml-0 w-full md:w-1/2 px-4 ${
                    idx % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white leading-tight mb-1">
                    {exp.title}
                  </h3>

                  <div
                    className={`text-emerald-600 dark:text-emerald-400 font-bold text-base mb-2 flex flex-col md:block ${
                      idx % 2 === 0 ? "items-start md:items-end" : "items-start"
                    }`}
                  >
                    {exp.company}
                  </div>

                  <div
                    className={`flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3 ${
                      idx % 2 === 0
                        ? "justify-start md:justify-end"
                        : "justify-start"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-emerald-500" size={12} />
                      {exp.date}
                    </span>
                  </div>

                  <p
                    className={`text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-sm ${
                      idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
