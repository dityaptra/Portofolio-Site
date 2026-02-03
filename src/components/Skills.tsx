import { motion } from "framer-motion";

const row1 = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Go", icon: "/icons/go.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
];

const row2 = [
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
  { name: "scikit-learn", icon: "/icons/scikit-learn.svg" },
];

const SkillPill = ({ name, icon }: { name: string; icon: string }) => (
  <div 
    className="flex items-center justify-center p-4 md:p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-sm shrink-0 hover:border-emerald-500 dark:hover:border-emerald-500 hover:scale-110 transition-all duration-300 cursor-help"
    title={name} // Tooltip native browser: Muncul saat hover
  >
    {/* CONTAINER ICON 
       Mobile: w-12 h-12 (48px)
       Desktop: w-16 h-16 (64px) -> Besar dan Jelas
    */}
    <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
      <img
        src={icon}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
        loading="lazy"
        decoding="async"
        width="64"
        height="64"
      />
    </div>

    {/* ELEMEN TEXT SUDAH DIHAPUS TOTAL */}
  </div>
);

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof row1;
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden relative w-full group">
      {/* Gradient Fade di kiri & kanan agar animasi terlihat smooth */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex gap-4 md:gap-8 py-4 pr-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((skill, idx) => (
          <SkillPill
            key={`${skill.name}-${idx}`}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-white mb-12 border-l-4 border-emerald-500 pl-4"
        >
          Technical Skills
        </motion.h2>

        <div className="flex flex-col gap-6 md:gap-10">
          <MarqueeRow items={row1} direction="left" speed={30} />
          <MarqueeRow items={row2} direction="right" speed={30} />
        </div>
      </div>
    </section>
  );
}