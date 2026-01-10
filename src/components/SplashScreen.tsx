import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        finishLoading();
      }, 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // Tambahkan dark:bg-slate-900 agar tidak silau di dark mode
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-slate-900"
        >
          <div className="loader mb-8"></div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-slate-800 dark:text-white"
          >
            {/* Bisa diisi text loading jika mau */}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}