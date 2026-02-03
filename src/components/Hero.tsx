import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaEye, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/dityaptra", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ditya1916bb282", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/gede.raditya_", label: "Instagram" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/radit.gede.90", label: "Facebook" }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden relative bg-slate-50 dark:bg-slate-900 pt-32 pb-20 md:pt-20 md:pb-10 transition-colors duration-300"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] bg-emerald-200/40 dark:bg-emerald-500/20 rounded-full blur-[60px] md:blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] -right-[20%] md:-top-[5%] md:-right-[10%] w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] bg-lime-200/40 dark:bg-lime-500/20 rounded-full blur-[60px] md:blur-[100px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 20, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[10%] md:-bottom-[20%] md:left-[20%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-teal-200/30 dark:bg-teal-500/20 rounded-full blur-[60px] md:blur-[120px]"
        />
      </div>

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blob-shape" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-2 h-10 sm:h-[50px] lg:h-[60px] flex items-center justify-center lg:justify-start">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              <span className="bg-clip-text text-emerald-600 dark:text-emerald-400">
                Gede Raditya Putra
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-6 h-10 sm:h-[50px] lg:h-[60px] flex items-center justify-center lg:justify-start">
              <span className="mr-3">I'm a</span>
              <TypeAnimation
                sequence={[
                  "Student",
                  2000,
                  "Web Developer",
                  2000,
                  "AI Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-emerald-600 dark:text-emerald-400"
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Mengubah ide kompleks menjadi produk digital yang berkualitas.
              Fokus menciptakan solusi untuk membantu bisnis Anda tumbuh di era digital.
            </p>

            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 text-xl rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md border border-slate-200 dark:border-slate-700
                             bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white
                             dark:bg-slate-800 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="/not-found"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 flex justify-center items-center gap-2 group"
              >
                <span>See My CV </span>
                <FaEye className="text-lg" />
              </a>
            </div>

          </motion.div>

          <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]"
            >
              <div
                className="absolute inset-0 bg-linear-to-tr from-emerald-400 to-lime-400 opacity-80 shadow-2xl z-0"
                style={{ clipPath: "url(#blob-shape)" }}
              ></div>

              <div
                className="relative w-full h-full z-10 bg-emerald-50 dark:bg-slate-800 transition-colors duration-300 overflow-hidden"
                style={{ clipPath: "url(#blob-shape)" }}
              >
                <img
                  src="/images/image2.png"
                  alt="Gede Raditya Putra"
                  className="w-full h-full object-cover scale-110 mt-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}