import { motion } from "framer-motion";
import { PiBarbellFill } from "react-icons/pi";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 border-l-4 border-emerald-500 pl-4">
              About Me
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:items-stretch">
            <div className="w-full lg:w-1/3 relative shrink-0">
              <div className="aspect-3/4 lg:aspect-auto lg:h-full rounded-3xl overflow-hidden border-2 border-emerald-500 shadow-xl relative">
                <img
                  src="/images/image1.png"
                  alt="Profile Photo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              <div className="grow bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Hai! Saya adalah mahasiswa Ilmu Komputer yang sedang mendalami
                  Pengembangan Web dan Kecerdasan Buatan. Saya senang membangun
                  aplikasi web, terutama dibidang Backend Development. Saat ini,
                  saya sedang belajar tentang mengintegrasikan AI ke dalam
                  proyek web dan menjelajahi teknologi Machine Learning & Deep
                  Learning.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                        Location
                      </p>
                      <p className="text-slate-800 dark:text-white font-semibold text-lg leading-tight">
                        Bali, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                      <FaGraduationCap className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                        Education
                      </p>
                      <p className="text-slate-800 dark:text-white font-semibold text-lg leading-tight">
                        Universitas Pendidikan Ganesha
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                      <FaBriefcase className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                        Current Role
                      </p>
                      <p className="text-slate-800 dark:text-white font-semibold text-lg leading-tight">
                        Mahasiswa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
                      <PiBarbellFill className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                        Hobbies
                      </p>
                      <p className="text-slate-800 dark:text-white font-semibold text-lg leading-tight">
                        Workout, Coding, Gaming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
