import  { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 flex flex-col justify-between font-sans">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <main>
          {activeTab === "home" && (
            <Hero
              setActiveTab={setActiveTab}
              onOpenContact={() => setIsContactOpen(true)}
            />
          )}
          {activeTab === "about" && <About />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "projects" && <Projects />}
        </main>
      </div>

      <Footer />

      {/* Contact Modal Window */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
