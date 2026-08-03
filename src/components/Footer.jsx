const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#161b22] border-t border-gray-800/80 py-3 px-6 mt-auto"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        {/* Copyright Left */}
        <div>
          <span className="text-cyan-400 font-semibold">DevPortfolio</span> ©
          2026 | All Rights Reserved
        </div>

        {/* Social Icons Right */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:jahirtawhid1988@gmail.com"
            className="hover:text-cyan-400 transition-colors"
            title="Email"
          >
            <i className="fas fa-envelope text-base"></i>
          </a>
          <a
            href="https://github.com/Jahir-tawhid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            title="GitHub"
          >
            <i className="fab fa-github text-base"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jahirtawhid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <i className="fab fa-linkedin text-base"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
