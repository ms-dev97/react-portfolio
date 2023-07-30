import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import Home from "./scenes/Home";
import Navbar from "./scenes/Navbar";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import Contact from "./scenes/Contact";
import DotGroup from "./scenes/DotGroup";
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <div className="app bg-deep-blue">
      {isDesktop && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <Home setSelectedPage={setSelectedPage} />
      </motion.div>

      <LineGradient />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("skills")}
      >
        <MySkills />
      </motion.div>

      <LineGradient />

      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <Projects />
      </motion.div>
      <LineGradient />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("testimonials")}
      >
        <Testimonials />
      </motion.div>

      <LineGradient />
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
