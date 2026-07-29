

const Navbar = ({ activeTab, setActiveTab, onOpenContact }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#161b22]/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => setActiveTab("home")}
          className="text-2xl font-bold tracking-wide text-white focus:outline-none"
        >
          Dev<span className="text-cyan-400">Portfolio</span>
        </button>

        {/* Dynamic Navigation Items */}
        <ul className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`transition-colors focus:outline-none ${
                  activeTab === item.id
                    ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={onOpenContact}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-4 py-2 rounded-lg transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
