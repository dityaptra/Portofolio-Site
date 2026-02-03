export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t-4 border-emerald-500 relative z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 text-center">
          copyright &copy; {new Date().getFullYear()} Gede Raditya Putra.
        </p>
      </div>
    </footer>
  );
}
