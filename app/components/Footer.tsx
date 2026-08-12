export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>© 2025 Rachana Tathed</span>
        <div className="flex items-center gap-6">
          <a href="mailto:rachanaathed572@gmail.com" className="hover:text-gray-700 transition-colors">
            rachanaathed572@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
