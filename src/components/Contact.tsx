import { useState } from "react"; // Import useState
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    if (formData.get("bot-field")) {
      return;
    }

    // --- 🛡️ CEK 2: COOLDOWN (Anti Manusia Spam) ---
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const currentTime = Date.now();
    const cooldownPeriod = 5 * 60 * 1000;

    if (
      lastSubmitTime &&
      currentTime - parseInt(lastSubmitTime) < cooldownPeriod
    ) {
      const sisaWaktu = Math.ceil(
        (cooldownPeriod - (currentTime - parseInt(lastSubmitTime))) / 60000
      );
      setErrorMessage(
        `Mohon tunggu ${sisaWaktu} menit lagi sebelum mengirim pesan baru.`
      );
      return;
    }

    setFormStatus("submitting");

    const data = {
      "bot-field": formData.get("bot-field"),
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setFormStatus("success");

        localStorage.setItem("lastSubmitTime", Date.now().toString());

        (e.target as HTMLFormElement).reset();
      })
      .catch((error) => {
        console.error(error);
        setFormStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-100 dark:bg-lime-900/20 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              Ingin Berdiskusi <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                Proyek Menarik?
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              Saya selalu terbuka untuk mendiskusikan proyek pengembangan
              perangkat lunak, pengembangan kecerdasan buatan, atau peluang
              kemitraan. Mari diskusikan solusi terbaik untuk kebutuhan Anda.
            </p>

            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 mb-2">
              <FaEnvelope className="text-emerald-500" />
              <span>gdradit765@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <FaMapMarkerAlt className="text-emerald-500" />
              <span>Bali, Indonesia</span>
            </div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300"
          >
            {/* TAMPILAN JIKA SUKSES */}
            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <FaCheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Pesan Terkirim!
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Terima kasih telah menghubungi saya. Saya akan membalas
                  secepatnya.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 text-emerald-600 font-semibold hover:underline"
                >
                  Kirim pesan lagi
                </button>
              </div>
            ) : (
              /* TAMPILAN FORM NORMAL */
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
              >
                {/* Hidden input tetap wajib */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium animate-pulse">
                    {errorMessage}
                  </div>
                )}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                      placeholder="Project Inquiry..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition"
                      placeholder="Enter the message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900 flex justify-center items-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Now"}
                    {!formStatus && (
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>

                  {formStatus === "error" && (
                    <p className="text-red-500 text-sm text-center">
                      Gagal mengirim pesan. Silakan coba lagi.
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
