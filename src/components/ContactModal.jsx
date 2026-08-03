const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#161b22] border border-gray-800 rounded-2xl max-w-md w-full p-6 relative shadow-2xl animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
        >
          ✕
        </button>

        {/* Modal Header */}
        <h3 className="text-2xl font-bold text-white mb-2 text-center">
          Get In <span className="text-cyan-400">Touch</span>
        </h3>
        <p className="text-gray-400 text-sm text-center mb-6">
          Feel free to connect with me via Email, GitHub, or LinkedIn.
        </p>

        {/* Contact Links */}
        <div className="space-y-4">
          {/* Email */}
          <a
            href="mailto:jahirtawhid1988@gmail.com"
            className="flex items-center gap-4 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 p-3.5 rounded-xl transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-gray-950 transition-colors">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-gray-400 font-medium">Email Address</p>
              <p className="text-sm font-semibold text-gray-200 truncate">
                jahirtawhid1988@gmail.com
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Jahir-tawhid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 p-3.5 rounded-xl transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">
                GitHub Profile
              </p>
              <p className="text-sm font-semibold text-gray-200">
                github.com/Jahir-tawhid
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jahirtawhid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900/80 hover:bg-gray-800 border border-gray-800 p-3.5 rounded-xl transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <i className="fab fa-linkedin"></i>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">
                LinkedIn Profile
              </p>
              <p className="text-sm font-semibold text-gray-200">
                linkedin.com/in/jahirtawhid
              </p>
            </div>
          </a>
        </div>

        {/* Modal Footer Close Action */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-semibold py-2.5 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
