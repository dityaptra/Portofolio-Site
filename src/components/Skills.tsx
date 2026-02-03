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
  <div className="flex items-center gap-4 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm shrink-0 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300">
    <div className="w-10 h-10 relative flex items-center justify-center">
      <img
        src={icon}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
        loading="lazy"
        decoding="async"
        width="40"
        height="40"
      />
    </div>

    <span className="font-semibold text-slate-700 dark:text-slate-200 text-base whitespace-nowrap">
      {name}
    </span>
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
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex gap-6 py-2 pr-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
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

        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" speed={25} />
          <MarqueeRow items={row2} direction="right" speed={25} />
        </div>
      </div>
    </section>
  );
}
