import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/dityaptra", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ditya1916bb282", label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/gede.raditya_", label: "Instagram" },
];

export default function Footer() {
  return (
    // UBAHAN 1: py-16 diganti jadi py-10 agar tidak terlalu tinggi
    <footer className="bg-slate-900 text-slate-300 py-10 border-t-4 border-emerald-500 relative z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UBAHAN 2: gap-8 dikurangi jadi gap-6, mb-12 jadi mb-8 */}
        <div className="flex flex-col items-center text-center gap-6 mb-8">
          
          {/* Logo */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              Gede<span className="text-emerald-400">Raditya</span>
            </h3>
          </div>

          {/* Sosmed */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="text-white font-bold text-lg">Let's Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright - pt-8 dikurangi jadi pt-6 */}
        <div className="border-t border-slate-800 pt-6 flex justify-center">
          <p className="text-sm text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Gede Raditya Putra.
          </p>
        </div>
        
      </div>
    </footer>
  );
}