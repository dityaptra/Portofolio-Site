import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaPython,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

// --- DATA SKILLS ---
const row1 = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
];

const row2 = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
  { name: "Go", icon: <SiGo className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
];

const row3 = [
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "Pandas", icon: <SiPandas className="text-purple-700" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-600" /> },
];

// --- KOMPONEN KECIL: Skill Pill ---
const SkillPill = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm shrink-0 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300">
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm whitespace-nowrap">
      {name}
    </span>
  </div>
);

// --- KOMPONEN MARQUEE ---
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 20,
}: {
  items: typeof row1;
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden relative w-full">
      {/* Container gradient dikurangi width-nya sedikit agar pas dengan layout box */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <motion.div
        // REVISI 2: Mengurangi padding vertical (py-4 jadi py-2) agar baris lebih dekat
        className="flex gap-6 py-2 pr-6" 
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items, ...items, ...items].map((skill, idx) => (
          <SkillPill key={`${skill.name}-${idx}`} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      
      {/* REVISI 1: Semua konten (Header + Marquee) dibungkus max-w-6xl agar lebarnya sama */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-slate-800 dark:text-white mb-12 border-l-4 border-emerald-500 pl-4"
        >
          Tech <span className="text-emerald-600 dark:text-emerald-400">Skills</span>
        </motion.h2>

        {/* --- AREA MARQUEE --- */}
        {/* REVISI 2: gap-4 diubah jadi gap-2 agar antar baris lebih rapat */}
        <div className="flex flex-col gap-2"> 
          {/* Baris 1: Ke Kiri */}
          <MarqueeRow items={row1} direction="left" speed={30} />

          {/* Baris 2: Ke Kanan */}
          <MarqueeRow items={row2} direction="right" speed={35} />

          {/* Baris 3: Ke Kiri */}
          <MarqueeRow items={row3} direction="left" speed={40} />
        </div>

      </div>
    </section>
  );
}